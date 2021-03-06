import { dispatch } from 'd3';
import { SvgStrategy, strategies } from '../../svg/SvgStrategy';
import { svgAsDataUri } from '../../utils/image';

/**
 * Base class, which includes common methods for all the charts
 * @export Chart
 * @class Chart
 */
export default class Chart {
    /**
     * Non-instanciable Chart. This is the parent class for all the ones (Linechart, Barchart, etc.)
     * 
     * @param {any} d Data. This object could be an array of data points or a datasource. Examples:
     * <pre class="prettyprint">
     * //With datasource
     * var data = {
     *       endpoint: 'ws://192.168.3.32:3000/barchart'
     * };
     *  var dataSource = new proteic.WebsocketDatasource(data);
     * 
     * barchart = new proteic.Barchart(dataSource);
     * 
     * //With data
     * barchart = new proteic.Barchart([{x:"SP", y:2},{x:"FR", y:6}]);
     * </pre>
     * @param {any} config Configuration of the chart.
     * 
     * @memberOf Chart
     */
    constructor(d, config) {
        var clazz = this.constructor.name;
        if (clazz === 'Chart') {
            throw new Error(clazz + ' is non-instanciable');
        }

        this.events = {};

        if (!d && !config) {
            throw new Error('Missing constructor parameters');
        }

        let dataFormat = d.constructor.name;
        let nArguments = (d && config) ? 2 : 1;

        switch (dataFormat) {
            case 'WebsocketDatasource':
            case 'HTTPDatasource':
                this.datasource = d;
                this.data = [];
                this._configureDatasource();
                break;
            case 'Array':
                this.data = d;
                break;
            default:
                throw TypeError('Wrong data format');
        }
        //if only 1 parameter is specified, take default config. Else, take the second argument as config.
        this.config = (nArguments === 1) ? {} : config;

        this._initializeSVGContext();
    }

    /**
     * Private method. Initialize the API by dinamically creating methods. It creates N method, one per configuration option
     * 
     * @param {any} properties An array that contains the name of the methods
     * 
     * @memberOf Chart
     */
    _initializeAPI(properties) {
        let clazz = this.constructor;
        properties.forEach((method) => {
            clazz.prototype[method] = function (value) {
                return this.change(method, value);
            }
        });
    }

    /**
     * Return the chart context: data, configuration and type
     * 
     * @returns chart Chart context
     * 
     * @memberOf Chart
     */
    _getChartContext() {
        return {
            data: this.data,
            config: this.config,
            cType: this.constructor.name
        };
    }

    /**
     * Initialize the SVG context, by dinamically creating an <svg> tag in the specified selector. It is automatically invoked
     * by the chart constructor and should not be used outside of this instance.
     * 
     * @memberOf Chart
     */
    _initializeSVGContext() {
        this._svg = new SvgStrategy(strategies[this.constructor.name](this._getChartContext()));
    }

    /**
     * Paint data into the chart. If no data is specified, it takes by default the last dataset (very useful when repaintng charts )
     * 
     * @param {any} data Data to be painted
     * 
     * @memberOf Chart
     */
    draw(data = this.data) {
        this._svg.draw(data);
    }

    /**
     * Make and download an image of the current state of the chart.
     * 
     * @memberOf Chart
     */
    download() {
        let selector = this._svg.strategy.config.selector + ' ' + 'svg';
        svgAsDataUri(d3.select(selector).node(), {}, (uri, err) => {
            if (err) {
                throw Error('Error converting to image ' + err);
            }
            else {
                let link = document.createElement('a');
                link.style = 'position: fixed; left -10000px;'; // making it invisible
                link.href = uri
                link.download = this.constructor.name + '.svg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    }

    _keepDrawingByAdding(datum) {
        var datumType = datum.constructor;

        if (datumType === Array) {
            this.data = this.data.concat(datum);
        }
        else {
            this.data.push(datum);
        }
        this.draw(JSON.parse(JSON.stringify(this.data)));
    }


    /**
     * 
     * This method add a data record / array of data into the current data. 
     * @param {any} datum
     * @param {any} method
     * 
     * @memberOf Chart
    
     */
    keepDrawing(datum, method) {
        if (method === 'add') {
            this._keepDrawingByAdding(datum);
        }
        else {
            this._keepDrawingByReplacing(datum);
        }
    }

    _configureDatasource() {
        this.dispatcher = dispatch('onmessage', 'onopen', 'onerror');

        this.datasource.configure(this.dispatcher);

        this.dispatcher.on('onmessage', (data) => this.keepDrawing(data));
        //this.dispatcher.on('onmessage', (data) => console.log(data));


        this.dispatcher.on('onopen', (event) => {
            console.log('onopen', event);
        });

        this.dispatcher.on('onerror', (error) => {
            console.log('onerror', error);
        });
    }

    /**
     * Change a configuration property. They all are also available through a method with the same name of the property.
     * 
     * @param {any} property property name
     * @param {any} value the new property value
     * @returns the instance of the current chart
     * 
     * @memberOf Chart
     */
    change(property, value) {
        this._svg.strategy.changeConfigProperty(property, value);
        return this;
    }
}