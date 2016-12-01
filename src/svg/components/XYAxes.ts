import XAxis from './XAxis';
import YAxis from './YAxis';

import Config from '../../Config';
import Component from './Component';

class XYAxis extends Component {
    private _x: XAxis;
    private _y: YAxis;

    constructor() {
        super();

        this._x = new XAxis();
        this._y = new YAxis();
    }

    public render(): void {
        this._x.render();
        this._y.render();

    }


    public range(xRange: any, yRange: any) {
        this._x.xAxis.scale().range(xRange);
        this._y.yAxis.scale().range(yRange);
        this.svg.selectAll('.x.axis').attr('transform', 'translate(0,' + this.config.get('height') + ')').transition().duration(300).call(this._x.xAxis);
        this.svg.selectAll('.y.axis').transition().duration(300).call(this._y.yAxis);

    }

    public update(data: any): void {
        this._x.update(data);
        this._y.update(data);
    }


    public configure(config: Config, svg: any) {
        super.configure(config, svg);
        this._x.configure(config, svg);
        this._y.configure(config, svg);
    }

    get x(): XAxis {
        return this._x;
    }

    get y(): YAxis {
        return this._y;
    }

    public makeItResponsive() {
        this._x.makeItResponsive();
        this._y.makeItResponsive();
    }


}

export default XYAxis;