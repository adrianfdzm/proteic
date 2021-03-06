'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var d3$1 = require('d3');

var paletteCategory1 = [
    '#e1c8df',
    '#9ecd9d',
    '#acd9d6',
    '#e4e36b',
    '#bfa1c5',
    '#e4d3b8',
    '#facba8',
    '#ced4ea',
    '#acd9d6'
];

var paletteCategory2 = [
    '#b6dde2',
    '#6394af',
    '#e4e9ab',
    '#8ea876',
    '#f7dce1',
    '#cc878f',
    '#fadaac',
    '#f29a83',
    '#8d7e9e'
];

var paletteCategory3 = [
    '#6b68a9',
    '#8cc590',
    '#b9487d',
    '#bfa1c5',
    '#4e6936',
    '#71bbc3',
    '#484156',
    '#ccaf44',
    '#d0553c'
];

var paletteCategory4 = [
    '#f1a30d',
    '#1d4763',
    '#84c7bc',
    '#c1212d',
    '#8fbe46',
    '#076837',
    '#563a2d',
    '#563a2d',
    '#87325d'
];

var paletteCategory5 = [
    '#f1a30d',
    '#0c3183',
    '#acd9d6',
    '#c1212d',
    '#8fbe46',
    '#076837',
    '#8a6338',
    '#8d2d84',
    '#f09bbc'
];

var paletteCategory6 = [
    '#71bbc3',
    '#1d4763',
    '#8fbe46',
    '#4e6936',
    '#ee8998',
    '#c1212d',
    '#f5af3c',
    '#e95e2e',
    '#634484'
];

var paletteCategory7 = [
    '#ea671e',
    '#684592',
    '#84b92a',
    '#cd131c',
    '#3c5ba2',
    '#5baddc',
    '#ffde06',
    '#5db68b',
    '#775e47'
];

var paletteCategory8 = [
    '#ebd646',
    '#a50f38',
    '#00a096',
    '#f09bbc',
    '#065b78',
    '#72722a',
    '#005231',
    '#4d4e98',
    '#7c4d25'
];

var paletteSequentialYellow = [
    '#fff1c6',
    '#fee5a7',
    '#fcda87',
    '#face64',
    '#f8bf4b',
    '#f6b030',
    '#f4a009',
    '#d28514',
    '#b36c17',
    '#955618',
    '#7a4317',
    '#613214',
    '#49230f'
];

var paletteSequentialRedOrange = [
    '#ffecb8',
    '#fbd68b',
    '#f7bf5e',
    '#f3a82f',
    '#df7520',
    '#cd4925',
    '#be0a26',
    '#a81023',
    '#941320',
    '#80141d',
    '#6d1419',
    '#5a1215',
    '#470f0f'
];

var paletteSequentialRed = [
    '#fde4d4',
    '#f1c4af',
    '#f7bf5e',
    '#db826a',
    '#d0614d',
    '#c73e36',
    '#be0a26',
    '#a81023',
    '#941320',
    '#80141d',
    '#6d1419',
    '#5a1215',
    '#470f0f'
];

var paletteSequentialPink = [
    '#fbe3e3',
    '#f9cfcc',
    '#f0aaa9',
    '#ed7e7e',
    '#ea647b',
    '#e74576',
    '#e41270',
    '#c70f65',
    '#aa105c',
    '#8d1253',
    '#731448',
    '#5a123c',
    '#420e30'
];

var paletteSequentialPurplePink = [
    '#f9d8e6',
    '#ebbed7',
    '#dda4c7',
    '#c890bb',
    '#b27daf',
    '#8a4c94',
    '#622181',
    '#622181',
    '#50216b',
    '#472060',
    '#3e1f55',
    '#361e4b',
    '#2d1c41'
];

var paletteSequentialPurple = [
    '#f6e8f1',
    '#dcc5de',
    '#c2a3c9',
    '#a980b3',
    '#905e9f',
    '#793f8e',
    '#622181',
    '#592175',
    '#4f216b',
    '#462060',
    '#3d1f55',
    '#351e4b',
    '#2c1c41'
];

var paletteSequentialBlue = [
    '#e5f2f9',
    '#d1e5f5',
    '#afd3ed',
    '#91afd7',
    '#738bbf',
    '#3c5a9e',
    '#0c3183',
    '#132a68',
    '#10204c',
    '#0b193b',
    '#06142f',
    '#051228',
    '#061020'
];

var paletteSequentialLightBlue = [
    '#eff8fd',
    '#d9eff6',
    '#c2e5ef',
    '#a8dae8',
    '#90cbe4',
    '#76b8e1',
    '#5baddc',
    '#4d96cc',
    '#427ebc',
    '#3a67ab',
    '#324c88',
    '#29366b',
    '#1e2354'
];

var paletteSequentialBlueViolet = [
    '#edf7e7',
    '#c8e3d2',
    '#91cdbf',
    '#41b5ab',
    '#218ba4',
    '#145d94',
    '#0c3183',
    '#0d2d76',
    '#0d2a6a',
    '#0e265e',
    '#0d2253',
    '#0c1e47',
    '#0b1a3c'
];

var paletteSequentialTurquoise = [
    '#e2ecf6',
    '#cadfe6',
    '#b1d3d6',
    '#94c6c6',
    '#74b9b6',
    '#4caca6',
    '#00a096',
    '#008d89',
    '#007b7c',
    '#006a6f',
    '#005963',
    '#004a57',
    '#063b4c'
];

var paletteSequentialLightGreen = [
    '#faf9de',
    '#e9efc3',
    '#d7e4a7',
    '#c5d989',
    '#b1ce6a',
    '#9cc34c',
    '#84b92a',
    '#6fa32b',
    '#5a8f2a',
    '#477c29',
    '#346b27',
    '#205b24',
    '#074d21'
];

var paletteSequentialDarkGreen = [
    '#eaf3e5',
    '#c7d5be',
    '#a3ba9a',
    '#80a078',
    '#5c885a',
    '#357442',
    '#00632e',
    '#00592b',
    '#004e27',
    '#004423',
    '#033a1e',
    '#053019',
    '#052613'
];

var paletteSequentialGreenBrown = [
    '#f7eccd',
    '#d9cba6',
    '#bcad82',
    '#a29162',
    '#887946',
    '#716330',
    '#5b501f',
    '#51461d',
    '#483d1b',
    '#3f3418',
    '#362b15',
    '#2d2311',
    '#231a0d'
];

var paletteSequentialBrown = [
    '#f7eccd',
    '#eed3ab',
    '#e4bb89',
    '#dba269',
    '#ad7446',
    '#834d2c',
    '#5e2f19',
    '#552a18',
    '#4c2516',
    '#432113',
    '#3a1c11',
    '#32180f',
    '#29130b'
];

var paletteSequentialGrey = [
    '#e5e8ea',
    '#bdbfc3',
    '#999a9f',
    '#77797f',
    '#595c64',
    '#3e444c',
    '#253038',
    '#20282e',
    '#1a2024',
    '#15181b',
    '#0e1112',
    '#070808',
    '#000000'
];

var paletteSequentialVioletCb = [
    '#f4f3f9',
    '#e0dced',
    '#cbc6e0',
    '#b7b0d4',
    '#948cbf',
    '#706baa',
    '#4d4e98',
    '#484889',
    '#42427a',
    '#3d3c6c',
    '#37365e',
    '#313050',
    '#2c2a44'
];

var paletteSequentialPinkCb = [
    '#fbe5ee',
    '#f8ccd5',
    '#f4b2bc',
    '#f096a3',
    '#d56976',
    '#bc3f52',
    '#a50f38',
    '#951735',
    '#851b31',
    '#761d2e',
    '#671e2a',
    '#581d26',
    '#4a1c22'
];

var paletteSequentialBlueCb = [
    '#eaf6fc',
    '#cfe4f4',
    '#cfe4f4',
    '#91bfe3',
    '#6999bb',
    '#417797',
    '#065b78',
    '#11536b',
    '#174b5f',
    '#194354',
    '#1a3b49',
    '#1a343f',
    '#192d35'
];

var paletteSequentialGreenCb = [
    '#fff7d0',
    '#e9e09b',
    '#d1ca62',
    '#b7b623',
    '#9e9e28',
    '#88872a',
    '#72722a',
    '#676726',
    '#5c5c23',
    '#51511f',
    '#47471b',
    '#3d3d17',
    '#333413'
];

var paletteSequentialGreenBrownCb = [
    '#f2edde',
    '#d8d1c0',
    '#bfb699',
    '#a09778',
    '#837b5a',
    '#686141',
    '#4f4b2c',
    '#3e3e1f',
    '#2e3313',
    '#292d14',
    '#232613',
    '#1e2012',
    '#191a10'
];

var paletteDivergingSpectral1 = [
    '#98141f',
    '#ab332c',
    '#bf5040',
    '#d5705b',
    '#e4a57f',
    '#f3d6a6',
    '#f5f2b8',
    '#cfdbb1',
    '#a4c4a9',
    '#71ada1',
    '#4e868f',
    '#2e637d',
    '#06456c'
];

var paletteDivergingSpectral2 = [
    '#d43d4f',
    '#df564b',
    '#eb6d45',
    '#f08e53',
    '#f8b96f',
    '#fee08b',
    '#f5f2b8',
    '#d7e5b1',
    '#b5d7aa',
    '#8ec8a3',
    '#6abda3',
    '#4fa4b5',
    '#3489be'
];

var paletteDivergingSpectral3 = [
    '#651035',
    '#ae1143',
    '#c9314b',
    '#dd7257',
    '#eeb27a',
    '#feeb9e',
    '#f5f2b8',
    '#cadfba',
    '#96cabb',
    '#50b4bb',
    '#3eaecc',
    '#206791',
    '#0c2c63'
];

var paletteDivergingBrownTurquoise = [
    '#3f3128',
    '#683828',
    '#933624',
    '#d5705b',
    '#db9c5e',
    '#feeb9e',
    '#f5f2b8',
    '#cfdbb1',
    '#a4c4a9',
    '#71ada1',
    '#628f85',
    '#53746d',
    '#475b57'
];

var paletteDivergingOrangePink = [
    '#e7511e',
    '#eb6929',
    '#ee7f37',
    '#f29446',
    '#f9c083',
    '#ffe9c3',
    '#ffeee3',
    '#f9cfc1',
    '#f3a9ab',
    '#db6882',
    '#c71360',
    '#891953',
    '#4b1c47'
];

var paletteDivergingRedBlue = [
    '#b2172b',
    '#c4443e',
    '#d76a5a',
    '#ed937e',
    '#f4b8a2',
    '#fcdbc7',
    '#efefef',
    '#bfcad5',
    '#8ba7bc',
    '#4d87a5',
    '#3c7ca0',
    '#28729b',
    '#036896'
];

var paletteDivergingRedGrey = [
    '#b2172b',
    '#c54532',
    '#da6c3b',
    '#f29446',
    '#f8bc67',
    '#fee08b',
    '#efece5',
    '#c9c5c1',
    '#a5a19f',
    '#808080',
    '#666666',
    '#333333',
    '#000000'
];

var paletteDivergingOrangeViolet = [
    '#98141f',
    '#ab332c',
    '#f9bc47',
    '#fdcf66',
    '#fede8d',
    '#ffecb3',
    '#f9eff6',
    '#e8d0e3',
    '#a4c4a9',
    '#a973aa',
    '#834f96',
    '#622181',
    '#402357'
];

var paletteDivergingPurpleGreen = [
    '#59194b',
    '#85134b',
    '#c71360',
    '#db6882',
    '#eba7a8',
    '#fce0ca',
    '#faefe1',
    '#dbd9aa',
    '#b9c26e',
    '#94ad31',
    '#728b2b',
    '#546c25',
    '#39521f'
];

var paletteDivergingVioletGreen = [
    '#55296e',
    '#75408e',
    '#8a5fa0',
    '#a081b5',
    '#beadcf',
    '#ddd7e7',
    '#eae8ed',
    '#c1d4bc',
    '#93be86',
    '#58a951',
    '#3c853e',
    '#23662f',
    '#084a22'
];

var paletteDivergingRedGreen = [
    '#b2172b',
    '#c5403c',
    '#d96453',
    '#ef8972',
    '#f6b49c',
    '#fcdbc7',
    '#f9ebde',
    '#dad6a8',
    '#b9c16d',
    '#94ad31',
    '#728b2b',
    '#546c25',
    '#39521f'
];

var paletteDivergingBrownGreen = [
    '#735146',
    '#846454',
    '#977a65',
    '#aa9177',
    '#c2ad91',
    '#dbcaad',
    '#edebd6',
    '#c4d6aa',
    '#94bf7c',
    '#58a951',
    '#3c853e',
    '#23662f',
    '#084a22'
];

var paletteDivergingLightBrownTurquoise = [
    '#8b5219',
    '#a46821',
    '#bf812c',
    '#cfa151',
    '#e2c489',
    '#f6e8c3',
    '#f5f1df',
    '#cbdccc',
    '#9cc6b9',
    '#60afa6',
    '#359790',
    '#1d7d75',
    '#00665e'
];


function category1() {
    return d3$1.scaleOrdinal().range(paletteCategory1);
}

function category2() {
    return d3$1.scaleOrdinal().range(paletteCategory2);
}

function category3() {
    return d3$1.scaleOrdinal().range(paletteCategory3);
}

function category4() {
    return d3$1.scaleOrdinal().range(paletteCategory4);
}

function category5() {
    return d3$1.scaleOrdinal().range(paletteCategory5);
}

function category6() {
    return d3$1.scaleOrdinal().range(paletteCategory6);
}

function category7() {
    return d3$1.scaleOrdinal().range(paletteCategory7);
}

function category8() {
    return d3$1.scaleOrdinal().range(paletteCategory8);
}

function sequentialYellow() {
    return d3$1.scaleQuantile().range(paletteSequentialYellow);
}

function sequentialRedOrange() {
    return d3$1.scaleQuantile().range(paletteSequentialRedOrange);
}

function sequentialRed() {
    return d3$1.scaleQuantile().range(paletteSequentialRed);
}

function sequentialPink() {
    return d3$1.scaleQuantile().range(paletteSequentialPink);
}

function sequentialPurplePink() {
    return d3$1.scaleQuantile().range(paletteSequentialPurplePink);
}

function sequentialPurple() {
    return d3$1.scaleQuantile().range(paletteSequentialPurple);
}

function sequentialBlue() {
    return d3$1.scaleQuantile().range(paletteSequentialBlue);
}

function sequentialLightBlue() {
    return d3$1.scaleQuantile().range(paletteSequentialLightBlue);
}

function sequentialBlueViolet() {
    return d3$1.scaleQuantile().range(paletteSequentialBlueViolet);
}

function sequentialTurquoise() {
    return d3$1.scaleQuantile().range(paletteSequentialTurquoise);
}

function sequentialLightGreen() {
    return d3$1.scaleQuantile().range(paletteSequentialLightGreen);
}

function sequentialDarkGreen() {
    return d3$1.scaleQuantile().range(paletteSequentialDarkGreen);
}

function sequentialGreenBrown() {
    return d3$1.scaleQuantile().range(paletteSequentialGreenBrown);
}

function sequentialBrown() {
    return d3$1.scaleQuantile().range(paletteSequentialBrown);
}

function sequentialGrey() {
    return d3$1.scaleQuantile().range(paletteSequentialGrey);
}

function sequentialVioletCb() {
    return d3$1.scaleQuantile().range(paletteSequentialVioletCb);
}

function sequentialPinkCb() {
    return d3$1.scaleQuantile().range(paletteSequentialPinkCb);
}

function sequentialBlueCb() {
    return d3$1.scaleQuantile().range(paletteSequentialBlueCb);
}

function sequentialGreenCb() {
    return d3$1.scaleQuantile().range(paletteSequentialGreenCb);
}

function sequentialGreenBrownCb() {
    return d3$1.scaleQuantile().range(paletteSequentialGreenBrownCb);
}

function diverging_spectral1() {
    return d3$1.scaleQuantile().range(paletteDivergingSpectral1);
}

function diverging_spectral2() {
    return d3$1.scaleQuantile().range(paletteDivergingSpectral2);
}

function diverging_spectral3() {
    return d3$1.scaleQuantile().range(paletteDivergingSpectral3);
}

function diverging_brown_turquoise() {
    return d3$1.scaleQuantile().range(paletteDivergingBrownTurquoise);
}

function diverging_orange_pink() {
    return d3$1.scaleQuantile().range(paletteDivergingOrangePink);
}

function diverging_red_blue() {
    return d3$1.scaleQuantile().range(paletteDivergingRedBlue);
}

function diverging_red_grey() {
    return d3$1.scaleQuantile().range(paletteDivergingRedGrey);
}

function diverging_orange_violet() {
    return d3$1.scaleQuantile().range(paletteDivergingOrangeViolet);
}

function diverging_purple_green() {
    return d3$1.scaleQuantile().range(paletteDivergingPurpleGreen);
}

function diverging_violet_green() {
    return d3$1.scaleQuantile().range(paletteDivergingVioletGreen);
}

function diverging_red_green() {
    return d3$1.scaleQuantile().range(paletteDivergingRedGreen);
}

function diverging_brown_green() {
    return d3$1.scaleQuantile().range(paletteDivergingBrownGreen);
}

function diverging_lightBrown_turquoise() {
    return d3$1.scaleQuantile().range(paletteDivergingLightBrownTurquoise);
}

/**
 * 
 * A Datasource is the name given to the connection set up to a data endpoint. This class defines the common methods for the datasources,
 * such as start() and stop().
 * 
 * @export Default export: Datasource class
 * 
 * @class Datasource The Datasource class
 * 
 */
var Datasource = function Datasource() {
    this.filters = [];
    this.properties = [];
};

/**
 * Starts the stream of data
 * 
 * 
 * @memberOf Datasource
 */
Datasource.prototype.start = function start () {
    window.console.log('Starting datasource');
};

/**
 * 
 * If started, this method stops the stream of data
 * 
 * @memberOf Datasource
    
 */
Datasource.prototype.stop = function stop () {
    window.console.log('Stopping datasource');
};


Datasource.prototype.property = function property (prop, newProp, cast) {
    this.properties.push({ 'p': prop, 'newP': newProp, cast: cast });
    return this;
};


Datasource.prototype.convert = function convert (data) {
        var this$1 = this;

    var result = {};
    for (var i in this.properties) {
        var p = this$1.properties[i].p;
        var value = eval('data.' + this$1.properties[i].newP);
       // if(this.properties[i].cast){
        //value = new this.properties[i].cast(value);
       // }

        result[p] = value;
    }
    return result;
};

/**
 * Filters the incoming messages. Each data record that do not comply the filter condition will be discarded
 * 
 * @param {any} filter A filter condition
 * @returns this Datasource instance
 * 
 * @memberOf Datasource
 */
Datasource.prototype.filter = function filter (filter) {
    return this;
};

/**
 * 
 * This datasource set up a connection to a http server. 
 * @export
 * @class HTTPDatasource
 * @extends {Datasource}

 */
var HTTPDatasource = (function (Datasource$$1) {
    function HTTPDatasource(source) {
        Datasource$$1.call(this);
        this.source = source;
        this.intervalId = -1;
        this.started = false;
    }

    if ( Datasource$$1 ) HTTPDatasource.__proto__ = Datasource$$1;
    HTTPDatasource.prototype = Object.create( Datasource$$1 && Datasource$$1.prototype );
    HTTPDatasource.prototype.constructor = HTTPDatasource;

    /**
     * Configure a dispatcher for this datasource.
     * 
     * @param {any} dispatcher A d3 dispatcher. This dispatcher is in charge of receiving and sending events.
     * 
     * @memberOf HTTPDatasource
     */
    HTTPDatasource.prototype.configure = function configure (dispatcher) {
        this.dispatcher = dispatcher;
    };

    /**
     * 
     * Initialize an HTTP connection
     * 
     * @memberOf HTTPDatasource
    
     */
    HTTPDatasource.prototype.start = function start () {
        if (!this.started) {
            Datasource$$1.prototype.start.call(this);
            var pollingTime = this.source.pollingTime;
            var url = this.source.url;
            this._startPolling(url, pollingTime);
            this.started = true;
        }
    };


    HTTPDatasource.prototype._startPolling = function _startPolling (url, time) {
        var this$1 = this;
        if ( time === void 0 ) time = 1000;

        var interval = window.setInterval;
        this.intervalId = interval(function () { return this$1._startRequest(url); }, time);
    };

    HTTPDatasource.prototype._startRequest = function _startRequest (url) {
        var this$1 = this;


        window.console.log('url', url);
        d3$1.request(url).get(function (e, response) { return this$1._handleResponse(response); });
    };

    HTTPDatasource.prototype._stopPolling = function _stopPolling () {
        var clearInterval = window.clearInterval;
        clearInterval(this.intervalId);
    };

    HTTPDatasource.prototype._handleResponse = function _handleResponse (xmlHttpRequest) {
        var parseJson = window.JSON.parse;
        if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
            var response = parseJson(xmlHttpRequest.response);
            this._handleOK(response);
        }
        else {
            this._handleError(xmlHttpRequest);
        }
    };

    HTTPDatasource.prototype._handleOK = function _handleOK (data) {
        if(this.properties.length > 0 ) {
            data = this.convert(data);
        }
        this.dispatcher.call('onmessage', this, data);
    };

    HTTPDatasource.prototype._handleError = function _handleError (data) {
        this.dispatcher.call('onerror', this, data);
    };

    /**
     * If started, this method close the HTTP connection.
     * 
     * @memberOf HTTPDatasource
    * */
    HTTPDatasource.prototype.stop = function stop () {
        if (this.started) {
            this._stopPolling();
            this.started = false;
        }
    };

    return HTTPDatasource;
}(Datasource));

/**
 * 
 * This datasource set up a connection to a websocket server. 
 * @export
 * @class WebsocketDatasource
 * @extends {Datasource}

 */
var WebsocketDatasource = (function (Datasource$$1) {
    function WebsocketDatasource(source) {
        Datasource$$1.call(this);
        this.source = source;
    }

    if ( Datasource$$1 ) WebsocketDatasource.__proto__ = Datasource$$1;
    WebsocketDatasource.prototype = Object.create( Datasource$$1 && Datasource$$1.prototype );
    WebsocketDatasource.prototype.constructor = WebsocketDatasource;
    
    /**
     * Configure a dispatcher for this datasource.
     * 
     * @param {any} dispatcher A d3 dispatcher. This dispatcher is in charge of receiving and sending events.
     * 
     * @memberOf WebsocketDatasource
     */
    WebsocketDatasource.prototype.configure = function configure (dispatcher) {
        this.dispatcher = dispatcher;
    };

    /**
     * 
     * Initialize a websocket connection
     * 
     * @memberOf WebsocketDatasource
    
     */
    WebsocketDatasource.prototype.start = function start () {
        var this$1 = this;

        Datasource$$1.prototype.start.call(this);
        this.ws = new window.WebSocket(this.source.endpoint);

        this.ws.onopen = function (e) {
            this$1.dispatcher.call('onopen', this$1, e);
        };
        this.ws.onerror = function (e) {
            throw new Error('An error occurred trying to reach the websocket server' + e);
            //this.dispatcher.call('onerror', this, e);
        };
        this.ws.onmessage = function (e) {
            var data = JSON.parse(e.data);
            this$1.dispatcher.call('onmessage', this$1, data);
        };
    };
    /**
     * If started, this method close the websocket connection.
     * 
     * @memberOf WebsocketDatasource
    * */
    WebsocketDatasource.prototype.stop = function stop () {
        Datasource$$1.prototype.stop.call(this);
        if (this.ws) {
            this.ws.close();
        }
    };

    return WebsocketDatasource;
}(Datasource));

var defaults = {
    selector: '#chart',
    colorScale: category7(),
    //Area
    areaOpacity: 0.4,

    //Axes
    xAxisType: 'linear',
    xAxisFormat: '',
    xAxisLabel: null,
    yAxisType: 'linear',
    yAxisFormat: '',
    yAxisLabel: null,
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    //markers
    markerShape: 'circle',
    markerSize: 5,
    markerOutlineWidth: 2,
    //Width & height
    width: '100%', // %, auto, or numeric
    height: 250,
    //Events
    onDown: function onDown(d) {
    },
    onHover: function onHover(d) {
    },
    onLeave: function onLeave(d) {
    },
    onClick: function onClick(d) {
    },

    maxNumberOfElements: 100, // used by keepDrawing method to reduce the number of elements in the current chart
};

var SvgContainer = function SvgContainer(config) {
  this._config = config;
  this.svg = this._initializeSvgContainer(config);
  this.components = Array();
};

SvgContainer.prototype._initializeSvgContainer = function _initializeSvgContainer (config) {
    var selector = config.selector,
    width = config.width + config.marginLeft + config.marginRight,
    height = config.height + config.marginTop + config.marginBottom,
    svg = null;

  svg = d3$1.select(selector)
    .append('svg:svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('class', 'chartContainer')
    .attr('transform', 'translate(' + config.marginLeft + ',' + config.marginTop + ')');

  return svg;
};


SvgContainer.prototype.add = function add (component, render) {
    if ( render === void 0 ) render = true;

  this.components.push(component);

  if (render) {
    component.render(this.svg, this._config);
  }
  return this;
};

SvgContainer.prototype.transform = function transform (translation) {
  this.svg.attr('transform', translation);

};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isEven(n) {
  return n % 2 === 0;
}

function isPercentage(n) {
  var split = null;
  var number = null;
  if (!n || typeof n !== 'string') {
    return false;
  }
  split = n.split('%');
  number = (+split[0]);
  return split.length === 2 &&
    (number >= 0) &&
    (number <= 100);
}








function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function calculateWidth(widthConfig, selector) {
  if (widthConfig === 'auto') {
    return d3$1.select(selector)
      .node()
      .getBoundingClientRect()
      .width;
  }
  else if (isNumeric(widthConfig)) {
    return widthConfig;
  }
  else if (isPercentage(widthConfig)) {
    var containerWidth, percentage;
    containerWidth = d3$1.select(selector)
      .node()
      .getBoundingClientRect()
      .width;
    percentage = widthConfig.split('%')[0];
    return Math.round(percentage * containerWidth / 100);
  } else {
    throw Error('Unknow config width value: ' + widthConfig);
  }
}

var SvgAxis = function SvgAxis(context) {
    this._loadConfig(context.config);
    this.svgContainer = new SvgContainer(this.config);
};

SvgAxis.prototype.changeConfigProperty = function changeConfigProperty (p, v) {
    this.config[p] = v;
    if (p === 'width' || p === 'height') {
        this.config.needRescaling = true;
    }
};

SvgAxis.prototype.rescale = function rescale (width, height) {
        if ( width === void 0 ) width = this.config.width;
        if ( height === void 0 ) height = this.config.height;

    this.axes.rescale(width, height);
    this.config.needRescaling = false;
};

/**
 * 
 * Load the configuration context. It creates a configuration global from the parameters specified by users.
 * If any parameter is empty, this will be replaced by its default option 
 * 
 * @param {any} config User configuration
 * @param {any} defaults Defaults values for this chart
 * 
 * @memberOf SvgAxis
    
 */
SvgAxis.prototype._loadConfig = function _loadConfig (config, defaults) {
    this.config = {};
    //Selector
    this.config.selector = config.selector || defaults.selector;
    //Margins 
    this.config.marginTop = config.marginTop || defaults.marginTop;
    this.config.marginLeft = config.marginLeft || defaults.marginLeft;
    this.config.marginRight = config.marginRight || defaults.marginRight;
    this.config.marginBottom = config.marginBottom || defaults.marginBottom;
    //Width & height
    this.config.width = config.width
        ? calculateWidth(config.width, this.config.selector) - this.config.marginLeft - this.config.marginRight
        : calculateWidth(defaults.width, this.config.selector) - this.config.marginLeft - this.config.marginRight;
    this.config.height = config.height || defaults.height;
    //Axis
    this.config.xAxisType = config.xAxisType || defaults.xAxisType;
    this.config.xAxisFormat = config.xAxisFormat || defaults.xAxisFormat;
    this.config.xAxisLabel = config.xAxisLabel || defaults.xAxisLabel;
    this.config.yAxisType = config.yAxisType || defaults.yAxisType;
    this.config.yAxisFormat = config.yAxisFormat || defaults.yAxisFormat;
    this.config.yAxisLabel = config.yAxisLabel || defaults.yAxisLabel;
    //Color
    this.config.colorScale = config.colorScale || defaults.colorScale;
    //Events
    this.config.onDown = config.onDown || defaults.onDown;
    this.config.onUp = config.onUp || defaults.onUp;
    this.config.onHover = config.onHover || defaults.onHover;
    this.config.onClick = config.onClick || defaults.onClick;
    this.config.onLeave = config.onLeave || defaults.onLeave;
};

var XAxis = function XAxis(xAxisType, config) {
  if (config === null) {
    throw new Error('No chart context specified for XAxis');
  }

  this.xAxis = this._initializeXAxis(xAxisType, config);
};


XAxis.prototype.rescale = function rescale (width, height) {
  this.xAxis.scale().range([0, width]);
};

XAxis.prototype._initializeXAxis = function _initializeXAxis (xAxisType, config) {
    if ( xAxisType === void 0 ) xAxisType = 'linear';

  var x = null,
    axis = null;

  // switch (xAxisType) {
  // case 'time':
  //   x = scaleTime().range([0, config.width]);
  //   break;
  // case 'linear':
  //   x = scaleLinear().range([0, config.width]);
  //   break;
  // case 'categorical':
  //   x = scaleBand().rangeRound([0, config.width])
  //     .padding(0.1)
  //     .align(0.5);
  //   break;
  // default:
  //   throw new Error('Not allowed type for XAxis. Only allowed "time","linear" or "categorical". Got: ' + xAxisType);
  // }

  switch (xAxisType) {
    case 'time':
      x = d3$1.scaleTime().range([0, config.width]);
      axis = d3$1.axisBottom(x);
      break;
    case 'linear':
      x = d3$1.scaleLinear().range([0, config.width]);
      axis = d3$1.axisBottom(x).tickFormat(d3$1.format(config.xAxisFormat));
      break;
    case 'categorical':
      x = d3$1.scaleBand().rangeRound([0, config.width])
        .padding(0.1)
        .align(0.5);
      axis = d3$1.axisBottom(x);
      break;
    default:
      throw new Error('Not allowed type for XAxis. Only allowed "time","linear" or "categorical". Got: ' + xAxisType);
  }

  return d3$1.axisBottom(x);
};

XAxis.prototype.transition = function transition (svg, time) {
    if ( time === void 0 ) time = 200;

  svg.selectAll('.x.axis').transition().duration(time).call(this.xAxis).on('end', this.xStyle);
};

XAxis.prototype.xStyle = function xStyle () {
  d3$1.select(this).selectAll('g.tick text')
    .style('font', '1.4em Montserrat, sans-serif')
    .style('fill', function (d, i) { return !isEven(i) || i === 0 ? '#5e6b70' : '#1a2127'; })
    .style('fill', function (d) { return '#1a2127'; });


  d3$1.select(this).selectAll(['path', 'line'])
    .attr('stroke', 'gray')
    .attr('stroke-width', .3);

};

/**
 * This function is used when both x and y dial update their domains by x and y max/min values, respectively.
 */
XAxis.prototype.updateDomainByBBox = function updateDomainByBBox (b) {
  var x = this.xAxis.scale();
  x.domain([b[0], b[1]]);
};

/**
 * Used when x domain is caterogial (a set of keys) and y domain is linear.
 */
XAxis.prototype.updateDomainByKeys = function updateDomainByKeys (keys$$1, yBbox) {
  var x = this.xAxis.scale();
  x.domain(keys$$1);
};

XAxis.prototype.render = function render (svg, config) {
  var xAxis = this.xAxis,
    width = config.width,
    height = config.height;
  svg
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + config.height + ')')
    .call(xAxis);

  svg
    .append('text')
    .attr('class', 'xaxis-title')
    .attr("text-anchor", "middle")
    .attr('x', width / 2)
    .attr('y', height + 40)
    .text(config.xAxisLabel)
    .style('font', '0.8em Montserrat, sans-serif');

  this.svg = svg;
};

var YAxis = function YAxis(yAxisType, config) {
  if (config === null) {
    throw new Error('No chart context specified for XAxis');
  }

  this.yAxis = this._initializeYAxis(yAxisType, config);
};

YAxis.prototype.rescale = function rescale (width, height) {
  this.yAxis.tickSizeInner(-width);
};

YAxis.prototype._initializeYAxis = function _initializeYAxis (yAxisType, config) {
    if ( yAxisType === void 0 ) yAxisType = 'linear';

  var y = null,
    axis = null;
  switch (yAxisType) {
    case 'linear':
      y = d3$1.scaleLinear().range([config.height, 0]);
      axis = d3$1.axisLeft(y).tickFormat(d3$1.format(config.yAxisFormat));
      break;
    case 'categorical':
      y = d3$1.scaleBand().rangeRound([config.height, 0])
        .padding(0.1)
        .align(0.5);
      axis = d3$1.axisLeft(y);
      break;
    default:
      throw new Error('Not allowed type for YAxis. Only allowed "time","linear" or "categorical". Got: ' + yAxisType);
  }

  return axis.tickSizeInner(-config.width)
    .tickSizeOuter(0)
    .tickPadding(20);
};

// _initializeYAxis(yAxisType = 'linear', config) {
// let y = null,
//   yAxis = null;
//
// switch (yAxisType) {
//   case 'linear':
//     y = scaleLinear().range([config.height, 0]);
//     break;
//   case 'categorical':
//     y = scaleBand().rangeRound([config.height, 0])
//       .padding(0.1)
//       .align(0.5);
//     break;
//   default:
//     throw new Error('Not allowed type for YAxis. Only allowed "time","linear" or "categorical". Got: ' + yAxisType);
// }
// return axisLeft(y)
//   .tickSizeInner(-config.width)
//   .tickSizeOuter(0)
//   .tickPadding(20)
//   .tickFormat((d) => d)
//   .ticks(config.yticks, config.tickLabel);
// }

YAxis.prototype.transition = function transition (svg, time) {
    if ( time === void 0 ) time = 200;

  svg.selectAll('.y.axis').transition().duration(time).call(this.yAxis).on('end', this.yStyle);
};

YAxis.prototype.yStyle = function yStyle () {
  d3$1.select(this).selectAll('g.tick text')
    .style('font', '1.4em Montserrat, sans-serif')
    .style('fill', function (d, i) { return !isEven(i) || i === 0 ? '#5e6b70' : '#1a2127'; });
  d3$1.select(this).selectAll('g.tick line')
    .style('stroke', function (d, i) { return isEven(i) && i !== 0 ? '#5e6b70' : '#dbdad8'; });
};

YAxis.prototype.updateDomainByBBox = function updateDomainByBBox (b) {
  var y = this.yAxis.scale();
  y.domain(b);
};

YAxis.prototype.updateDomainByKeys = function updateDomainByKeys (keys$$1) {
  var y = this.yAxis.scale();
  y.domain(keys$$1);
};

YAxis.prototype.render = function render (svg, config) {
  var yAxis = this.yAxis,
    width = config.width,
    height = config.height;
  svg
    .append('g')
    .attr('class', 'y axis')
    .attr('stroke-dasharray', '1, 5')
    .call(yAxis);

  svg
    .append('text')
    .attr('class', 'yaxis-title')
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr('x', 0 - height / 2)
    .attr('y', 0 - 55)
    .text(config.yAxisLabel)
    .style('font', '0.8em Montserrat, sans-serif');

};

var XYAxes = function XYAxes(xAxisType, yAxisType, config) {
  if (config === null) {
    throw new Error('No chart context specified for XAxis');
  }

  this.x = new XAxis(xAxisType, config);
  this.y = new YAxis(yAxisType, config);
};

XYAxes.prototype.transition = function transition (svg, time) {
    if ( time === void 0 ) time = 200;

  this.x.transition(svg, time);
  this.y.transition(svg, time);
};

/**
 * This function is used when both x and y dial update their domains by x and y max/min values, respectively.
 */
XYAxes.prototype.updateDomainByBBox = function updateDomainByBBox (b) {
  this.x.updateDomainByBBox([b[0], b[1]]);
  this.y.updateDomainByBBox([b[2], b[3]]);
};

/**
 * Used when x domain is caterogial (a set of keys) and y domain is linear.
 */
XYAxes.prototype.updateDomainByKeysAndBBox = function updateDomainByKeysAndBBox (keys, bbox) {
  this.x.updateDomainByKeys(keys);
  this.y.updateDomainByBBox(bbox);
};

XYAxes.prototype.updateDomainByBBoxAndKeys = function updateDomainByBBoxAndKeys (bbox, keys){
  this.x.updateDomainByBBox(bbox);
  this.y.updateDomainByKeys(keys);
};
  
XYAxes.prototype.render = function render (svg, config) {
  this.x.render(svg, config);
  this.y.render(svg, config);
};
  
XYAxes.prototype.rescale = function rescale (width, height){
  this.x.rescale(width, height);
  this.y.rescale(width, height);
};

var Lineset = function Lineset(x, y) {
  var this$1 = this;

  this.xAxis = x.xAxis;
  this.yAxis = y.yAxis;
  this.lineGenerator = d3$1.line()
    .x(function (d) { return this$1.xAxis.scale()(d.x); })
    .y(function (d) { return this$1.yAxis.scale()(d.y); });
};

Lineset.prototype.update = function update (svg, config, data) {
    var this$1 = this;

  var dataSeries = d3$1.nest().key(function (d) { return d.key; }).entries(data),
    series = null,
    lines = null,
    colorScale = config.colorScale;

  svg.selectAll('g.serie').remove();

  series = svg.selectAll('g.serie');
  lines = series
    .data(dataSeries, function (d) { return d.key; })
    .enter()
    .append('g')
    .attr('class', 'serie')
    .attr('stroke', function (d, i) { return colorScale(i); })
    .append('svg:path')
    .style('stroke', function (d, i) { return colorScale(i); })
    .style('stroke-width', 1.3)
    .style('fill', 'none')
    .attr('d', function (d) { return this$1.lineGenerator(d.values); })
    .attr('class', 'line');

  this.svg = svg;
};

Lineset.prototype.render = function render (svg, config) {
  //Do nothing, since lines render only when new data is received.
};

var Legend = function Legend() {};

Legend.prototype.update = function update (svg, config, data) {
  var dataSeries = d3$1.nest()
      .key(function (d) { return d.key; })
      .entries(data),
    legend = null,
    entries = null,
    colorScale = config.colorScale,
    height = config.height,
    width = config.width;

  if(dataSeries.length === 1 && dataSeries[0].key === 'undefined'){
    console.warn('Not showing legend, since there is a valid key');
    return;
  }
    
  svg.selectAll('g.legend').remove();
    
  legend = svg.append('g').attr('class', 'legend');
  entries = legend.selectAll('.legend-entry')
    .data(dataSeries, function (d) { return d.key; })
    .enter()
    .append('g')
    .attr('class', 'legend-entry');


  entries.append('rect')
    .attr('x', width + 10)
    .attr('y', function (d, i) { return i * 25; })
    .attr('height', 20)
    .attr('width', 20)
    .attr('fill', function (d, i) { return colorScale(i); })
    .style('opacity', 0.8);

  entries.append('text')
    .attr("x", width + 25 + 10)
    .attr("y", function (d, i) { return i * 25 + 7; })
    .attr("dy", "0.55em")
    .text(function (d) { return d.key; })
    .style('font', '14px Montserrat, sans-serif');

};

Legend.prototype.render = function render (svg, config) {
  //Do nothing, since legend render only when new data is received.
};

var Areaset = function Areaset(x, y) {
  this.xAxis = x.xAxis;
  this.yAxis = y.yAxis;
};

Areaset.prototype.update = function update (svg, config, data) {
    var this$1 = this;

  var dataSeries = d3$1.nest()
      .key(function (d) { return d.key; })
      .entries(data);

  var series = null
      , areas = null
      , area$$1 = config.area
      , colorScale = config.colorScale
      , height = config.height
      , areaOpacity = config.areaOpacity;

  var areaGenerator = d3.area()
      .x(function (d) { return this$1.xAxis.scale()(d.x); })
      .y0(height)
      .y1(function (d) { return this$1.yAxis.scale()(d.y); });

  svg.selectAll('g.area').remove();

  series = svg.selectAll('g.area');
  areas = series
      .data(dataSeries, function (d) { return d.key; })
      .enter()
      .append('g')
      .attr('class', 'area')
      .append('svg:path')
      .style('fill', function (d, i) { return colorScale(i); })
      .style('fill-opacity', areaOpacity)
      .attr('d', function (d) { return areaGenerator(d.values); });

  // series
  //   .insert('path', ':first-child') //if not :first-child, area overlaps markers.
  //   .attr('class', 'area')
  //   .data(dataSeries)
  //   .style('stroke', (d, i) => colorScale(i))
  //   .style('fill', (d, i) => colorScale(i))
  //   .style('fill-opacity', areaOpacity)
  //   .attr('d', (d) => areaGenerator(d.values));

  this.svg = svg;
};

Areaset.prototype.render = function render (svg, config) {
  //Do nothing, since areas render only when new data is received.
};

var Pointset = function Pointset(x, y) {
  this.xAxis = x.xAxis;
  this.yAxis = y.yAxis;
};
Pointset.prototype.update = function update (svg, config, data) {
    var this$1 = this;

  var dataSeries = d3$1.nest()
    .key(function (d) { return d.key; })
    .entries(data),
    markers = null,
    markerShape = config.markerShape,
    markerSize = config.markerSize,
    markerOutlineWidth = config.markerOutlineWidth,
    colorScale = config.colorScale,
    points = null,
    series = null;

  svg.selectAll('g.points').remove();

  series = svg.selectAll('g.points');

  switch (markerShape) {
    case 'dot':
      points = series
        .data(dataSeries, function (d) { return d.key; })
        .enter()
        .append('g')
        .attr('class', 'points')
        .style('fill', function (d, i) { return colorScale(i); })
        .selectAll('circle')
        .data(function (d) { return d.values; })
        .enter()
        .append('circle')
        .attr('cx', function (d) { return this$1.xAxis.scale()(d.x); })
        .attr('cy', function (d) { return this$1.yAxis.scale()(d.y); })
        .attr('r', markerSize)
        .attr('class', 'marker');
      break;
    case 'ring':
      window.console.warn('Deprecated "circle" marker shape: use "dot" or "ring" instead');
      points = series
        .data(dataSeries, function (d) { return d.key; })
        .enter()
        .append('g')
        .attr('class', 'points')
        .style('stroke', function (d, i) { return colorScale(i); })
        .selectAll('circle')
        .data(function (d, i) { return d.values; })
        .enter()
        .append('circle')
        .attr('cx', function (d) { return this$1.xAxis.scale()(d.x); })
        .attr('cy', function (d) { return this$1.yAxis.scale()(d.y); })
        .attr('r', markerSize)
        .attr('class', 'marker')
        .style('fill', 'white')
        .style('stroke-width', markerOutlineWidth);
      break;
    // Deprecated circle option
    case 'circle':
      window.console.warn('Deprecated "circle" marker shape: use "dot" or "ring" instead');
      points = series
        .data(dataSeries, function (d) { return d.key; })
        .enter()
        .append('g')
        .attr('class', 'points')
        .style('stroke', function (d, i) { return colorScale(i); })
        .selectAll('circle')
        .data(function (d, i) { return d.values; })
        .enter()
        .append('circle')
        .attr('cx', function (d) { return this$1.xAxis.scale()(d.x); })
        .attr('cy', function (d) { return this$1.yAxis.scale()(d.y); })
        .attr('r', markerSize)
        .attr('class', 'lineMarker')
        .style('fill', 'white')
        .style('stroke-width', markerOutlineWidth);
      break;
    default:
      points = series
        .data(dataSeries, function (d) { return d.key; })
        .enter()
        .append('g')
        .attr('class', 'points')
        .style('stroke', function (d, i) { return colorScale(i); })
        .selectAll('circle')
        .data(function (d, i) { return d.values; })
        .enter()
        .append('circle')
        .attr('cx', function (d) { return this$1.xAxis.scale()(d.x); })
        .attr('cy', function (d) { return this$1.yAxis.scale()(d.y); })
        .attr('r', markerSize)
        .attr('class', 'lineMarker')
        .style('fill', 'white')
        .style('stroke-width', markerOutlineWidth);
  }

  markers = svg.selectAll('g.points circle');
  markers
    .on('mousedown.user', config.onDown)
    .on('mouseup.user', config.onUp)
    .on('mouseleave.user', config.onLeave)
    .on('mouseover.user', config.onHover)
    .on('click.user', config.onClick);

  //this.interactiveElements = markers;
};

Pointset.prototype.render = function render (svg, config) {
  //Do nothing, since points render only when new data is received.
};

function simple2stacked(data) {
  return d3$1.nest().key(function (d) { return d.x; }).rollup(function (array) {
    var r = {};
    for (var i = 0; i < array.length; i++) {
      var object = array[i];
      if (object) {
        r[object.key] = object.y;
      }
    }
    return r;
  }).entries(data);
}

function simple2nested(data, key) {
  if ( key === void 0 ) key = 'key';

  return d3$1.nest().key(function (d) { return d[key]; }).entries(data);
}



function simple2Linked(data) {
  var linkedData = { links: [], nodes: [] };
  data.map(function (d) { return d.key === 'link' ? linkedData.links.push(d) : linkedData.nodes.push(d); });
  return linkedData;
}


function convertPropretiesToTimeFormat(data, properties, format$$1) {
  data.forEach(function (d) {
    properties.map(function (p) {
      d[p] = d3$1.timeParse(format$$1)(d[p]);
    });
  });
}

function convertByXYFormat(data, config) {
  data.forEach(function (d) {
    //parse x coordinate
    switch (config.xAxisType) {
      case 'time':
        d.x = d3$1.timeParse(config.xAxisFormat)(d.x);
        break;
      case 'linear':
        d.x = +d.x;
        break;
    }
    //parse Y coordinate
    switch (config.yAxisType) {
      case 'time':
        d.y = d3$1.timeParse(config.yAxisFormat)(d.y);
        break;
      case 'linear':
        d.y = +d.y;
        break;
    }
  });
  return data;
}

function sortByField (array, field){
    array.sort(function (e1, e2) {
        var a = e1[field];
        var b = e2[field];
        return (a < b) ? -1 : (a > b) ? 1 : 0;   
    });
}

var SvgLinechartStrategy = (function (SvgAxis$$1) {
  function SvgLinechartStrategy(context) {
    SvgAxis$$1.call(this, context);

    this.axes = new XYAxes(this.config.xAxisType, 'linear', this.config);

    this.lines = new Lineset(this.axes.x, this.axes.y);
    this.legend = new Legend();

    //Include components in the chart container
    this.svgContainer
      .add(this.axes)
      .add(this.legend)
      .add(this.lines);

    if (this._checkArea(this.config)) {
      this.areas = new Areaset(this.axes.x, this.axes.y);
      this.svgContainer.add(this.areas);
    }

    if (this._checkMarkers(this.config)) {
      this.points = new Pointset(this.axes.x, this.axes.y);
      this.svgContainer.add(this.points);
    }
  }

  if ( SvgAxis$$1 ) SvgLinechartStrategy.__proto__ = SvgAxis$$1;
  SvgLinechartStrategy.prototype = Object.create( SvgAxis$$1 && SvgAxis$$1.prototype );
  SvgLinechartStrategy.prototype.constructor = SvgLinechartStrategy;

	/**
	 * Renders a linechart based on data object
	 * @param  {Object} data Data Object. Contains an array with x and y properties.
	 * 
	 */
  SvgLinechartStrategy.prototype.draw = function draw (data) {
    var svg = this.svgContainer.svg,
      config = this.config,
      needRescaling = this.config.needRescaling,
      bbox = null;

    //Transform data, if needed
    convertByXYFormat(data, config);

    //Sort data
    sortByField(data, 'x');

    //rescale, if needed.
    if (needRescaling) {
      this.rescale();
    }


    bbox = this._getDomainBBox(data);

    this.axes.updateDomainByBBox(bbox);

    //Create a transition effect for dial rescaling
    this.axes.transition(svg, 200);

    // Update legend
    this.legend.update(svg, config, data);

    //Now update lines
    this.lines.update(svg, config, data);

    if (config.areaOpacity > 0) {
      // Update areas
      this.areas.update(svg, config, data);
    }

    if (this._checkMarkers(config)) {
      // Update points
      this.points.update(svg, config, data);
    }

  };

  SvgLinechartStrategy.prototype._getDomainBBox = function _getDomainBBox (data) {
    var minX = d3$1.min(data, function (d) { return d.x; }),
      maxX = d3$1.max(data, function (d) { return d.x; }),
      minY = d3$1.min(data, function (d) { return d.y; }),
      maxY = d3$1.max(data, function (d) { return d.y; });
    return [minX, maxX, minY, maxY];
  };


  SvgLinechartStrategy.prototype._checkMarkers = function _checkMarkers (config) {
    return config.markerSize > 0;
  };
  SvgLinechartStrategy.prototype._checkArea = function _checkArea (config) {
    return config.areaOpacity > 0;
  };

  /**
   * This method adds config options to the chart context.
   * @param  {Object} config Config object
   */
  SvgLinechartStrategy.prototype._loadConfig = function _loadConfig (config) {
    SvgAxis$$1.prototype._loadConfig.call(this, config, defaults);
    //Markers
    this.config.markerOutlineWidth = config.markerOutlineWidth || defaults.markerOutlineWidth;
    this.config.markerShape = config.markerShape || defaults.markerShape;
    this.config.markerSize = (typeof config.markerSize === 'undefined' || config.markerSize < 0) ? defaults.markerSize : config.markerSize;
    //Area
    this.config.areaOpacity = (typeof config.areaOpacity === 'undefined' || config.markerSize < 0) ? defaults.areaOpacity : config.areaOpacity;
    return this;
  };

  return SvgLinechartStrategy;
}(SvgAxis));

var defaults$1 = {
    selector: '#chart',
    colorScale: category5(),
    //Stacked
    stacked: true,
    //Axes
    xAxisType: 'linear',
    xAxisFormat: '',
    xAxisLabel: null,
    yAxisType: 'linear',
    yAxisFormat: '',
    yAxisLabel: null,
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    //width & height
    width: '100%',
    height: 350,
    //Events
    onDown: function onDown(d) {
    },
    onHover: function onHover(d) {
    },
    onLeave: function onLeave(d) {
    },
    onClick: function onClick(d) {
    }
};

var Barset = function Barset(xAxis, yAxis) {
  this.xAxis = xAxis;
  this.yAxis = yAxis;
  this.lineGenerator = d3$1.line()
    .x(function (d) { return xAxis.scale()(d.x); })
    .y(function (d) { return yAxis.scale()(d.y); });
};


Barset.prototype.update = function update (svg, config, data, method) {
  var bars = null;

  if (method === 'stacked') {
    this._updateStacked(svg, config, data);
  } else {
    this._updateGrouped(svg, config, data);
  }
  bars = svg.selectAll('g.serie rect');
  bars
    .on('mousedown.user', config.onDown)
    .on('mouseup.user', config.onUp)
    .on('mouseleave.user', config.onLeave)
    .on('mouseover.user', config.onHover)
    .on('click.user', config.onClick);
      
  /**
  TODO: Add default events?
  bars
    .on('mousedown.default', config.onDown)
    .on('mouseup.default', config.onUp)
    .on('mouseleave.default', function (){ select(this).transition().duration(150).attr('fill-opacity', 1)})
    .on('mouseover.default',function (){ select(this).transition().duration(150).attr('fill-opacity', 0.9)})
    .on('click.default', config.onClick);
  **/

  this.interactiveElements = bars;
};

Barset.prototype._updateStacked = function _updateStacked (svg, config, dataSeries) {
  this._cleanCurrentSeries(svg);

  var colorScale = config.colorScale,
    layer = svg.selectAll('.serie').data(dataSeries),
    layerEnter = layer.enter().append('g'),
    layerMerge = null,
    bar = null,
    barEnter = null,
    barMerge = null,
    x = this.xAxis.scale(),
    y = this.yAxis.scale();

  layerMerge = layer.merge(layerEnter)
    .attr('class', 'serie')
    .attr('fill', function (d, i) { return colorScale(i); });

  bar = layerMerge.selectAll('rect')
    .data(function (d) { return d; });

  barEnter = bar.enter().append('rect');

  barMerge = bar.merge(barEnter)
    .attr("x", function (d) { return x(d.data.key); })
    .attr("y", function (d) { return y(d[1]); })
    .attr("height", function (d) { return y(d[0]) - y(d[1]); })
    .attr("width", x.bandwidth());
};


Barset.prototype._updateGrouped = function _updateGrouped (svg, config, data) {
  this._cleanCurrentSeries(svg);

  var keys = d3$1.map(data, function (d) { return d.key; }).keys(),
    colorScale = config.colorScale,
    layer = svg.selectAll('.serie').data(data),
    layerEnter = null,
    layerMerge = null,
    bar = null,
    barEnter = null,
    barMerge = null,
    x = this.xAxis.scale(),
    y = this.yAxis.scale(),
    xGroup = d3$1.scaleBand().domain(keys).range([0, x.bandwidth()]),
    height = config.height;

  data = simple2nested(data, 'x');

  layer = svg.selectAll('.serie').data(data);

  layerEnter = layer.enter().append('g')
    .attr('transform', function (d) { return 'translate(' + x(d.key) + ')'; });

  layerMerge = layer.merge(layerEnter)
    .attr('class', 'serie')
    .attr('transform', function (d) { return 'translate(' + x(d.key) + ')'; });

  bar = layerMerge.selectAll('rect')
    .data(function (d) { return d.values; });

  barEnter = bar.enter().append('rect');

  barMerge = bar.merge(barEnter)
    .attr('width', xGroup.bandwidth())
    .attr("x", function (d) { return xGroup(d.key); })
    .attr('fill', function (d, i) { return colorScale(i); })
    .attr("y", function (d) { return y(d.y); })
    .attr("height", function (d) { return height - y(d.y); });

};

Barset.prototype._getKeysFromData = function _getKeysFromData (data) {
  var keys = [];
  for (var p in data[0]) {
    if (p !== 'total' && p !== 'key') {
      keys.push(p);
    }
  }
  return keys;

};

Barset.prototype._cleanCurrentSeries = function _cleanCurrentSeries (svg) {
  svg.selectAll('.serie').remove();
};

Barset.prototype.render = function render (svg, config) {
  //Do nothing, since bars render only when new data is received.
};

var SvgBarchartStrategy = (function (SvgAxis$$1) {
  function SvgBarchartStrategy(context) {
    SvgAxis$$1.call(this, context);

    this.axes = new XYAxes('categorical', 'linear', this.config);
    this.bars = new Barset(this.axes.x.xAxis, this.axes.y.yAxis);

    this.legend = new Legend();

    this.svgContainer
      .add(this.axes)
      .add(this.bars)
      .add(this.legend);

  }

  if ( SvgAxis$$1 ) SvgBarchartStrategy.__proto__ = SvgAxis$$1;
  SvgBarchartStrategy.prototype = Object.create( SvgAxis$$1 && SvgAxis$$1.prototype );
  SvgBarchartStrategy.prototype.constructor = SvgBarchartStrategy;


	/**
	 * Renders a barchart based on data object
	 * @param  {Object} data Data Object. Contains an array with x and y properties.
	 * 
	 */
  SvgBarchartStrategy.prototype.draw = function draw (data) {
    if ( data === void 0 ) data = this.data;
 
    var svg = this.svgContainer.svg,
      config = this.config,
      keys = d3$1.map(data, function (d) { return d.key; }).keys(),
      data4stack = simple2stacked(data),
      data4render = null,
      isStacked = this.config.stacked,
      stack$$1 = d3$1.stack().keys(keys)
        .value(function (d, k) { return d.value[k]; })
        .order(d3$1.stackOrderNone),
      yMin = 0,
      yMax = 0,
      method = isStacked ? 'stacked' : 'grouped',
      dataSeries = stack$$1(data4stack),
      needRescaling = this.config.needRescaling;

    //rescale, if needed.
    if (needRescaling) {
      this.rescale();
    }


    yMax = isStacked ?
      d3$1.max(dataSeries, function (serie) { return d3$1.max(serie, function (d) { return d[1]; }); }) :
      d3$1.max(data, function (d) { return d.y; });

    this.axes.updateDomainByKeysAndBBox(d3$1.map(data, function (d) { return d.x; }).keys(), [yMin, yMax]);
    this.axes.transition(svg, 200);

    data4render = isStacked ? dataSeries : data;

    this.bars.update(svg, config, data4render, method);

    this.legend.update(svg, config, data);

    this.data = data; // TODO: ? 

  };


  SvgBarchartStrategy.prototype.transition2Stacked = function transition2Stacked () {
    this.config.stacked = true;
  };

  SvgBarchartStrategy.prototype.transition2Grouped = function transition2Grouped () {
    this.config.stacked = false;
  };

	/**
	 * This method adds config options to the chart context.
	 * @param  {Object} config Config object
	 */
  SvgBarchartStrategy.prototype._loadConfig = function _loadConfig (config) {
    SvgAxis$$1.prototype._loadConfig.call(this, config, defaults$1);
    //Stacked
    this.config.stacked = typeof (config.stacked) === 'undefined' ? defaults$1.stacked : config.stacked;    return this;
  };

  return SvgBarchartStrategy;
}(SvgAxis));

var defaults$2 =  {
    selector: '#chart',
    colorScale: category4(),
    //Axes
    xAxisType: 'time',
    xAxisFormat: '%y/%m/%d',
    xAxisLabel: null,
    yAxisType: 'categorical',
    yAxisFormat: '',
    yAxisLabel: null,
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    //Width & height
    width: '100%', // %, auto, or numeric 
    height: 250,
    //Events
    onDown: function onDown(d) {
    },
    onHover: function onHover(d) {
    },
    onLeave: function onLeave(d) {
    },
    onClick: function onClick(d) {
    },

    maxNumberOfElements: 100, // used by keepDrawing method to reduce the number of elements in the current chart
};

var Streamset = function Streamset(xAxis, yAxis) {
  var this$1 = this;

  this.xAxis = xAxis;
  this.yAxis = yAxis;

  this.areaGenerator = d3$1.area()
    .curve(d3$1.curveCardinal)
    .x(function (d) { return this$1.xAxis.scale()((d3$1.timeParse(this$1.xDataFormat)(d.data.key))); }) // TODO: It seems d3.nest() transform Date object in
    .y0(function (d) { return this$1.yAxis.scale()(d[0]); })
    .y1(function (d) { return this$1.yAxis.scale()(d[1]); });
};


Streamset.prototype.update = function update (svg, config, data) {
  var series = null;
    
  //Update date format, used by areaGenerator function due to a problem when nesting with d3.
  this.xDataFormat = config.xAxisFormat;
    
  svg.selectAll('.serie').remove();

  series = svg.selectAll('.serie')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'serie')
    .style('stroke', function (d, i) { return config.colorScale(i); });

  series
    .append('path')
    .attr('class', 'layer')
    .attr('d', this.areaGenerator)
    .style('fill', function (d, i) { return config.colorScale(i); });


  series.exit().remove();
    
  series
    .attr('opacity', 1)
    .on('mousedown.user', config.onDown)
    .on('mouseup.user', config.onUp)
    .on('mouseleave.user', config.onLeave)
    .on('mouseover.user', config.onHover)
    .on('click.user', config.onClick);
};

Streamset.prototype.render = function render (svg, config) {
  //Do nothing, since lines render only when new data is received.
};

var SvgStreamgraphStrategy = (function (SvgAxis$$1) {
  function SvgStreamgraphStrategy(context) {
        SvgAxis$$1.call(this, context);

        this.x = new XAxis('time', this.config);
        this.y = new YAxis('linear', this.config);

        this.streams = new Streamset(this.x.xAxis, this.y.yAxis);

        this.legend = new Legend();

        //Include components in the chart container
        this.svgContainer
            .add(this.x)
            .add(this.y, false) //No render y Axis
            .add(this.legend)
            .add(this.streams);
    }

  if ( SvgAxis$$1 ) SvgStreamgraphStrategy.__proto__ = SvgAxis$$1;
  SvgStreamgraphStrategy.prototype = Object.create( SvgAxis$$1 && SvgAxis$$1.prototype );
  SvgStreamgraphStrategy.prototype.constructor = SvgStreamgraphStrategy;
    SvgStreamgraphStrategy.prototype.draw = function draw (data) {
        var svg = this.svgContainer.svg,
            config = this.config,
            bbox = null,
            keys = d3$1.map(data, function (d) { return d.key; }).keys(),
            xDataFormat = this.config.xAxisFormat,
            data4stack = simple2stacked(data),
            stack$$1 = d3$1.stack()
                .keys(keys)
                .value(function (d, k) { return d.value[k]; })
                .order(d3$1.stackOrderInsideOut)
                .offset(d3$1.stackOffsetWiggle),
            dataSeries = stack$$1(data4stack),
            needRescaling = this.config.needRescaling;
       
       convertPropretiesToTimeFormat(data, ['x'], xDataFormat);
        
        //Sort data
        sortByField(data, 'x');
        
        //rescale, if needed.
        if (needRescaling) {
           this.rescale();
        }
        
        bbox = this._getDomainBBox(data, dataSeries);

        this.x.updateDomainByBBox([bbox[0], bbox[1]]);
        this.y.updateDomainByBBox([bbox[2], bbox[3]]);
        this.x.transition(svg, 200);
        this.y.transition(svg, 200);

        // Update legend
        this.legend.update(svg, config, data);

        // Update streams
        this.streams.update(svg, config, dataSeries);
    };
  
    SvgStreamgraphStrategy.prototype._getDomainBBox = function _getDomainBBox (data, dataSeries) {
        var minX = d3$1.min(data, function (d) { return new Date(d.x); }),
            maxX = d3$1.max(data, function (d) { return new Date(d.x); }),
            minY = d3$1.min(dataSeries, function (serie) { return d3$1.min(serie, function (d) { return d[0]; }); }),
            maxY = d3$1.max(dataSeries, function (serie) { return d3$1.max(serie, function (d) { return d[1]; }); });

        return [minX, maxX, minY, maxY];
    };

	/**
	 * This method adds config options to the chart context.
	 * @param  {Object} config Config object
	 */
    SvgStreamgraphStrategy.prototype._loadConfig = function _loadConfig (config) {
        SvgAxis$$1.prototype._loadConfig.call(this, config,defaults$2);
        return this;
    };

  return SvgStreamgraphStrategy;
}(SvgAxis));

var defaults$3 = {
    selector: '#chart',
    colorScale: category2(),
    //Axes
    xAxisType: 'time',
    xAxisFormat: '%y/%m/%d',
    xAxisLabel: null,
    yAxisType: 'categorical',
    yAxisFormat: '',
    yAxisLabel: null,
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    //Width & height
    width: '100%', // %, auto, or numeric 
    height: 250,
    //Events
    onDown: function onDown(d) {
    },
    onHover: function onHover(d) {
    },
    onLeave: function onLeave(d) {
    },
    onClick: function onClick(d) {
    },
    maxNumberOfElements: 100, // used by keepDrawing method to reduce the number of elements in the current chart
};

var SvgStackedAreaStrategy = (function (SvgAxis$$1) {
    function SvgStackedAreaStrategy(context) {
        SvgAxis$$1.call(this, context);

        this.axes = new XYAxes('time', 'linear', this.config);

        this.streams = new Streamset(this.axes.x.xAxis, this.axes.y.yAxis);

        this.legend = new Legend();

        //Include components in the chart container
        this.svgContainer
            .add(this.axes)
            .add(this.legend)
            .add(this.streams);
    }

    if ( SvgAxis$$1 ) SvgStackedAreaStrategy.__proto__ = SvgAxis$$1;
    SvgStackedAreaStrategy.prototype = Object.create( SvgAxis$$1 && SvgAxis$$1.prototype );
    SvgStackedAreaStrategy.prototype.constructor = SvgStackedAreaStrategy;


    SvgStackedAreaStrategy.prototype.draw = function draw (data) {
        var svg = this.svgContainer.svg,
            config = this.config,
            bbox = null,
            keys = d3$1.map(data, function (d) { return d.key; }).keys(),
            data4stack = simple2stacked(data),
            xDataFormat = this.config.xAxisFormat,
            stack$$1 = d3$1.stack()
                .keys(keys)
                .value(function (d, k) { return d.value[k]; })
                .order(d3$1.stackOrderInsideOut)
                .offset(d3$1.stackOffNone),
            dataSeries = stack$$1(data4stack),
            needRescaling = this.config.needRescaling;

        //rescale, if needed.
        if (needRescaling) {
            this.rescale();
        }

        convertPropretiesToTimeFormat(data, ['x'], xDataFormat);

        //Sort data
        sortByField(data, 'x');

        bbox = this._getDomainBBox(data, dataSeries);

        this.axes.updateDomainByBBox(bbox);
        this.axes.transition(svg, 200);

        // Update legend
        this.legend.update(svg, config, data);

        // Update streams
        this.streams.update(svg, config, dataSeries);
    };


    SvgStackedAreaStrategy.prototype._getDomainBBox = function _getDomainBBox (data, dataSeries) {
        var minX = d3$1.min(data, function (d) { return (d.x); }),
            maxX = d3$1.max(data, function (d) { return (d.x); }),
            minY = d3$1.min(dataSeries, function (serie) { return d3$1.min(serie, function (d) { return d[0]; }); }),
            maxY = d3$1.max(dataSeries, function (serie) { return d3$1.max(serie, function (d) { return d[1]; }); });

        return [minX, maxX, minY, maxY];
    };

	/**
	 * This method adds config options to the chart context.
	 * @param  {Object} config Config object
	 */
    SvgStackedAreaStrategy.prototype._loadConfig = function _loadConfig (config) {
        SvgAxis$$1.prototype._loadConfig.call(this, config,defaults$3);
    };

    return SvgStackedAreaStrategy;
}(SvgAxis));

var defaults$4 = {
    selector: '#chart',
    colorScale: category3(),
    //Axes
    xAxisType: 'time',
    xAxisFormat: '%y/%m/%d',
    xAxisLabel: null,
    yAxisType: 'categorical',
    yAxisFormat: '%s',
    yAxisLabel: null,
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 30,
    marginLeft: 50,
    //Width & height
    width: '100%', // %, auto, or numeric 
    height: 250,
    //Events
    onDown: function onDown(d) {
    },
    onHover: function onHover(d) {
    },
    onLeave: function onLeave(d) {
    },
    onClick: function onClick(d) {
    }
};

var TimeBoxset = function TimeBoxset(xAxis, yAxis) {
  this.xAxis = xAxis;
  this.yAxis = yAxis;

};
TimeBoxset.prototype.update = function update (svg, config, data) {
  var colorScale = config.colorScale,
    keys = d3$1.map(data, function (d) { return d.key; }).keys(),
    layer = svg.selectAll('.serie').data(data),
    layerEnter = null,
    layerMerge = null,
    box = null,
    boxEnter = null,
    boxMerge = null,
    extLanes = null,
    yLanes = null,
    yLanesBand = d3$1.scaleBand().range([0, keys.length + 1]).domain(keys),
    x = this.xAxis.scale(),
    y = this.yAxis.scale();

  data = simple2nested(data);
  extLanes = d3$1.extent(data, function (d, i) { return i; });
  yLanes = d3$1.scaleLinear().domain([extLanes[0], extLanes[1] + 1]).range([0, config.height]);

  layer = svg.selectAll('.serie').data(data);
  layerEnter = layer.enter().append('g');

  layerMerge = layer.merge(layerEnter)
    .attr('class', 'serie');


  box = layerMerge.selectAll('rect')
    .data(function (d) { return d.values; });

  boxEnter = box.enter().append('rect');

  boxMerge = box.merge(boxEnter)
    .attr('width', function (d) { return x(d.end) - x(d.start); })
    .attr('x', function (d) { return x(d.start); })
    .attr('y', function (d) { return y(d.key); })
    .attr('fill', function (d) { return colorScale(parseInt(yLanesBand(d.key))); })
    .attr('height', function () { return 0.8 * yLanes(1); });

  box = svg.selectAll('g.serie rect');
    
  box
    .on('mousedown.user', config.onDown)
    .on('mouseup.user', config.onUp)
    .on('mouseleave.user', config.onLeave)
    .on('mouseover.user', config.onHover)
    .on('click.user', config.onClick);

};

TimeBoxset.prototype.render = function render (svg, config) {
  //Do nothing, since lines render only when new data is received.
};

var SvgSwimlaneStrategy = (function (SvgAxis$$1) {
  function SvgSwimlaneStrategy(context) {
    SvgAxis$$1.call(this, context);
    this.axes = new XYAxes('time', 'categorical', this.config);
    this.boxs = new TimeBoxset(this.axes.x.xAxis, this.axes.y.yAxis);
    this.legend = new Legend();

    this.svgContainer
      .add(this.axes)
      .add(this.boxs)
      .add(this.legend);
  }

  if ( SvgAxis$$1 ) SvgSwimlaneStrategy.__proto__ = SvgAxis$$1;
  SvgSwimlaneStrategy.prototype = Object.create( SvgAxis$$1 && SvgAxis$$1.prototype );
  SvgSwimlaneStrategy.prototype.constructor = SvgSwimlaneStrategy;

  SvgSwimlaneStrategy.prototype.draw = function draw (data) {
    var svg = this.svgContainer.svg,
      config = this.config,
      dataFormat = this.config.xAxisFormat,
      keys = d3$1.map(data, function (d) { return d.key; }).keys(),
      bbox = null,
      needRescaling = this.config.needRescaling;

    convertPropretiesToTimeFormat(data, ['start', 'end'], dataFormat);
    
    //rescale, if needed.
    if (needRescaling) {
      this.rescale();
    }
    
    bbox = this._getBBox(data);

    this.axes.updateDomainByBBoxAndKeys(bbox, keys);
    this.axes.transition(svg, 200);

    this.boxs.update(svg, config, data);
    this.legend.update(svg, config, data);

  };
  
  SvgSwimlaneStrategy.prototype._getBBox = function _getBBox (data) {
    return [
      d3$1.min(data, function (d) { return (d.start); }),
      d3$1.max(data, function (d) { return (d.end); })
    ];
  };


  SvgSwimlaneStrategy.prototype._loadConfig = function _loadConfig (config) {
    SvgAxis$$1.prototype._loadConfig.call(this, config, defaults$4);  
    return this;
  };

  return SvgSwimlaneStrategy;
}(SvgAxis));

var defaults$5 =  {
    selector: '#chart',
    colorScale: diverging_spectral2(),
    invertColorScale: true,
    minLevel: 0,
    maxLevel: 100,
    minAngle: -90,
    maxAngle: 90,
    ringWidth: 50,
    ringMargin: 20,
    labelInset: 10,
    needleNutRadius: 25,
    needleLenghtRatio: 0.8,
    numericIndicator: true,
    label: 'km/h',
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 30,
    marginLeft: 50,
    //Width & height
    width: '50%', // %, auto, or numeric
    height: 250,
    ticks: 10, // ticks for y dial.
};

var Dial = function Dial(axisType, config) {
  var this$1 = this;

  if (config === null) {
    throw new Error('No chart context specified for polarAxis');
  }

  this.r = (
    (config.width > config.height) ?
      config.height : config.width
    ) / 2;
  this.translation = (function () { return 'translate(' + this$1.r + ',' + this$1.r + ')'; }
  );
  config.colorScale.domain([0, 1]);

  this.scale = d3$1.scaleLinear()
      .domain([config.minLevel, config.maxLevel])
      .range([0, 1]);

  this.scaleMarks = this.scale.ticks(config.ticks);

  this.range = config.maxAngle - config.minAngle;

  this.arc = d3$1.arc()
    .innerRadius(this.r - config.ringWidth - config.ringMargin)
    .outerRadius(this.r - config.ringMargin)
    .startAngle(function (d, i) {
      var ratio = d * i;
      return deg2rad(config.minAngle + (ratio * this$1.range));
    })
    .endAngle(function (d, i) {
      var ratio = d * (i + 1);
      return deg2rad(config.minAngle + (ratio * this$1.range));
    });

  this.tickData = d3$1.range(config.ticks)
    .map(function () { return 1 / config.ticks; });
};

Dial.prototype.render = function render (svg, config) {
    var this$1 = this;

  var labels = null;

  // Append the ring
  var arcs = svg.append('g')
    .attr('class', 'arc')
    .attr('transform', this.translation);

  // Append the ring sectors
  var arcPaths = arcs.selectAll('path')
    .data(this.tickData)
    .enter().append('path')
    // ID for textPath linking
    .attr('id', function (d, i) { return 'sector-' + i; })
    .attr('d', this.arc);

  // Fill colors
  if (config.invertColorScale) {
    arcPaths.attr('fill', function (d, i) { return config.colorScale(1 - d * i); });
  } else {
    arcPaths.attr('fill', function (d, i) { return config.colorScale(d * i); });
  }

  // Apend the scale labels
  labels = svg.append('g')
    .attr('class', 'labels')
    .attr('transform', this.translation);

  // // Append scale marker labels
  labels.selectAll('text')
    .data(this.scaleMarks)
    .enter().append('text')
    .attr('transform', function (d) {
      var ratio = this$1.scale(d);
      var newAngle = config.minAngle + (ratio * this$1.range);
      return 'rotate(' + newAngle + ') translate(0,' + (config.labelInset - this$1.r) + ')';
    })
    .text(function (d) { return d; })
    .style('text-anchor', 'middle')
    .style('font', '18px Montserrat, sans-serif');
};

var DialNeedle = function DialNeedle(axisType, config) {
  var this$1 = this;

  if (config === null) {
    throw new Error('No chart context specified for polarAxis');
  }

  this.r = (
    (config.width > config.height) ?
      config.height : config.width
    ) / 2;

  this.needleLen = config.needleLenghtRatio * (this.r);

  this.translation = (function () { return 'translate(' + this$1.r + ',' + this$1.r + ')'; }
  );
  config.colorScale.domain([0, 1]);

  this.scale = d3$1.scaleLinear()
      .domain([config.minLevel, config.maxLevel])
      .range([0, 1]);

  this.angleScale = d3$1.scaleLinear()
    .domain([config.minLevel, config.maxLevel])
    .range([90 + config.minAngle, 90 + config.maxAngle]);

  this.scaleMarks = this.scale.ticks(config.ticks);

  this.range = config.maxAngle - config.minAngle;

  this.arc = d3$1.arc()
    .innerRadius(this.r - config.ringWidth - config.ringMargin)
    .outerRadius(this.r - config.ringMargin)
    .startAngle(function (d, i) {
      var ratio = d * i;
      return deg2rad(config.minAngle + (ratio * this$1.range));
    })
    .endAngle(function (d, i) {
      var ratio = d * (i + 1);
      return deg2rad(config.minAngle + (ratio * this$1.range));
    });

  this.tickData = d3$1.range(config.ticks)
    .map(function () { return 1 / config.ticks; });
};

DialNeedle.prototype.update = function update (svg, config, data, method) {
    var this$1 = this;

  var datum = data[data.length - 1];

  this.needle
    .transition()
    .attr('transform', function (d) { return ("translate(" + (this$1.r) + ", " + (this$1.r) + ") rotate(" + (this$1.angleScale(datum.value) - 90) + ")"); })
    .attr('d', ("M " + (0 - config.needleNutRadius) + " " + (0) + " L " + (0) + " " + (0 - this.needleLen) + " L " + (config.needleNutRadius) + " " + (0)));
};

DialNeedle.prototype.render = function render (svg, config) {
    var this$1 = this;

  // Update the needle
  this.needle = svg.append('path')
    .attr('class', 'needle')
    .datum(0)
    .attr('transform', function (d) { return ("translate(" + (this$1.r) + ", " + (this$1.r) + ") rotate(" + (this$1.angleScale(d) - 90) + ")"); })
    .attr('d', ("M " + (0 - config.needleNutRadius) + " " + (0) + " L " + (0) + " " + (0 - this.needleLen) + " L " + (config.needleNutRadius) + " " + (0)))
    .style('fill', '#666666');

  // Append needle nut
  svg.append('circle')
    .attr('class', 'needle')
    .attr('transform', this.translation)
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', config.needleNutRadius)
    .style('fill', '#666666');
};

var TextIndicator = function TextIndicator(config) {
  if (config === null) {
    throw new Error('No chart context specified for polarAxis');
  }

  this.translation = config.textIndicatorTranslation;
};

TextIndicator.prototype.update = function update (svg, value, label) {
  svg.select('.value')
    .text(value);
  svg.select('.label')
    .text(label);
};

TextIndicator.prototype.render = function render (svg, config) {
  var indicator = svg.append('g')
    .attr('class', 'text-indicator')
    .attr('pointer-events', 'none')
    .style('text-anchor', 'middle')
    .style('alignment-baseline', 'central');

  if (this.translation) {
    indicator.attr('transform', this.translation);
  }

  indicator.append('text')
    .attr('class', 'value')
    .attr('x', 0)
    .attr('y', 0)
    .attr('pointer-events', 'none')
    .text('0')
    .style('font', '48px Montserrat, sans-serif')
    .style('text-anchor', 'middle');

  indicator.append('text')
    .attr('class', 'label')
    .attr('x', 0)
    .attr('y', 0)
    .attr('pointer-events', 'none')
    .text('')
    .style('font', '24px Montserrat, sans-serif')
    .style('transform', 'translate(0, 1.5em')
    .style('text-anchor', 'middle');
};

var SvgGaugeStrategy = function SvgGaugeStrategy(context) {
  this._loadConfig(context.config);
  this.svgContainer = new SvgContainer(this.config);
  var config = this.config;

  this.dial = new Dial('linear', config);
  this.needle = new DialNeedle('linear', config);

  this.svgContainer
    .add(this.dial)
    .add(this.needle);

  if (config.numericIndicator) {
    var r = (
      (config.width > config.height) ?
        config.height : config.width
    ) / 2;
    var indicatorOffset = r + 75;
    config.textIndicatorTranslation = 'translate(' + r + ',' + indicatorOffset + ')';
    this.textIndicator = new TextIndicator(config);
    this.svgContainer.add(this.textIndicator);
  }
};

	/**
	 * Renders a gauge chart based on data object
	 * @param{Object} data Data Object. Contains a numeric value.
	 *
	 */
SvgGaugeStrategy.prototype.draw = function draw (data) {
  var datum = data[data.length - 1],
    svg = this.svgContainer.svg,
    config = this.config;

  this.needle.update(svg, config, data);
  if (config.numericIndicator) {
    this.textIndicator.update(svg, datum.value, config.label);
  }
};

	/**
	 * This method adds config options to the chart context.
	 * @param{Object} config Config object
	 */
SvgGaugeStrategy.prototype._loadConfig = function _loadConfig (config) {
  this.config = {};
  //Selector
  this.config.selector = config.selector || defaults$5.selector;
  //Margins 
  this.config.marginTop = config.marginTop || defaults$5.marginTop;
  this.config.marginLeft = config.marginLeft || defaults$5.marginLeft;
  this.config.marginRight = config.marginRight || defaults$5.marginRight;
  this.config.marginBottom = config.marginBottom || defaults$5.marginBottom;
  //Width & height
  this.config.width = config.width ?
    calculateWidth(config.width, this.config.selector) - this.config.marginLeft - this.config.marginRight
    : calculateWidth(defaults$5.width, this.config.selector) - this.config.marginLeft - this.config.marginRight;
  this.config.height = config.height || defaults$5.height;

  this.config.colorScale = config.colorScale || defaults$5.colorScale;
  this.config.minLevel = config.minLevel || defaults$5.minLevel;
  this.config.maxLevel = config.maxLevel || defaults$5.maxLevel;
  this.config.minAngle = config.minAngle || defaults$5.minAngle;
  this.config.maxAngle = config.maxAngle || defaults$5.maxAngle;
  this.config.ticks = config.ticks || defaults$5.ticks;
  this.config.ringWidth = config.ringWidth || defaults$5.ringWidth;
  this.config.ringMargin = config.ringMargin || defaults$5.ringMargin;
  this.config.labelInset = config.labelInset || defaults$5.labelInset;
  this.config.needleNutRadius = config.needleNutRadius || defaults$5.needleNutRadius;
  this.config.needleLenghtRatio = config.needleLenghtRatio || defaults$5.needleLenghtRatio;
  this.config.invertColorScale = typeof (config.invertColorScale) === 'undefined' ? defaults$5.invertColorScale : config.invertColorScale;
  this.config.numericIndicator = typeof (config.numericIndicator) === 'undefined' ? defaults$5.numericIndicator : config.numericIndicator;
  this.config.label = config.label || defaults$5.label;


  return this;
};

var defaults$6 = {
  selector: '#chart',
  width: '100%', // %, auto, or numeric 
  height: 250,
  yAxisLabel: null,
  //margins
  marginTop: 20,
  marginRight: 250,
  marginBottom: 30,
  marginLeft: 50,
};

var Nodeset = function Nodeset(config) {
  var this$1 = this;

  this.config = config;
  var width = config.width,
    height = config.height;

  this.simulation = d3$1.forceSimulation()
    .force("link", d3$1.forceLink().id(function (d) { return d.id; }))
    .force("charge", d3$1.forceManyBody())
    .force("center", d3$1.forceCenter(width / 2, height / 2));


  this.dragstarted = function (d) {
    if (!d3$1.event.active) { this$1.simulation.alphaTarget(0.3).restart(); }
    d.fx = d.x;
    d.fy = d.y;
  };

  this.dragged = function (d) {
    d.fx = d3$1.event.x;
    d.fy = d3$1.event.y;
  };

  this.dragended = function (d) {
    if (!d3$1.event.active) { this$1.simulation.alphaTarget(0); }
    d.fx = null;
    d.fy = null;
  };

};

Nodeset.prototype.update = function update (svg, config, data) {
    var this$1 = this;

  data = simple2Linked(data);

  var link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(data.links)
    .enter().append("line")
    .attr("stroke-width", 2)
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6);

  var node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(data.nodes)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", function (d) { return "#23436f"; })
    .call(d3$1.drag()
      .on("start", this.dragstarted)
      .on("drag", this.dragged)
      .on("end", this.dragended));

  node.append("title")
    .text(function (d) { return d.id; });

  this.simulation.nodes(data.nodes).on("tick", function (e) { return this$1.ticked(link, node); });

  this.simulation.force("link").links(data.links);
};

Nodeset.prototype.ticked = function ticked (link, node) {
  link
    .attr("x1", function (d) { return d.source.x; })
    .attr("y1", function (d) { return d.source.y; })
    .attr("x2", function (d) { return d.target.x; })
    .attr("y2", function (d) { return d.target.y; });

  node
    .attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) { return d.y; });
};

Nodeset.prototype.render = function render (svg, config) {
  //Do nothing, since lines render only when new data is received.
};

var SvgNetworkgraphStrategy = function SvgNetworkgraphStrategy(context) {
  this._loadConfig(context.config);

  this.svgContainer = new SvgContainer(this.config);

  this.nodeset = new Nodeset(this.config);

  //Include components in the chart container
  this.svgContainer
    .add(this.nodeset);
};

	/**
	 * Renders a linechart based on data object
	 * @param{Object} data Data Object. Contains an array with x and y properties.
	 * 
	 */
SvgNetworkgraphStrategy.prototype.draw = function draw (data) {
  var svg = this.svgContainer.svg,
    config = this.config;

  this.nodeset.update(svg, config, data);
};

/**
 * This method adds config options to the chart context.
 * @param{Object} config Config object
 */
SvgNetworkgraphStrategy.prototype._loadConfig = function _loadConfig (config) {
  this.config = {};
  this.config.selector = config.selector || defaults$6.selector;
  //Margins 
  this.config.marginTop = config.marginTop || defaults$6.marginTop;
  this.config.marginLeft = config.marginLeft || defaults$6.marginLeft;
  this.config.marginRight = config.marginRight || defaults$6.marginRight;
  this.config.marginBottom = config.marginBottom || defaults$6.marginBottom;
  this.config.width = config.width ? calculateWidth(config.width, this.config.selector) - this.config.marginLeft - this.config.marginRight
    : calculateWidth(defaults$6.width, this.config.selector) - this.config.marginLeft - this.config.marginRight;
  this.config.height = config.height || defaults$6.height;

  return this;
};

var defaults$7 = {
    selector: '#chart',
    colorScale: category8(),
    marginTop: 20,
    marginRight: 20,
    marginBottom: 30,
    marginLeft: 50,
    width: '50%', // %, auto, or numeric
    height: 450,
    tickLabel: '',
    transitionDuration: 300,
    maxNumberOfElements: 5, // used by keepDrawing to reduce the number of elements in the current chart
    sortData: {
        descending: false,
        prop: 'x'
    },
    //Events
    onDown: function onDown(d) {
    },
    onHover: function onHover(d) {
    },
    onLeave: function onLeave(d) {
    },
    onClick: function onClick(d) {
    }
};

var XRadialAxis = function XRadialAxis(config) {
  if (config === null) {
    throw new Error('No chart context specified for XRadialAxis');
  }

  this.xRadialAxis = d3$1.scaleLinear().range([0, 2 * Math.PI]);
};

var YRadialAxis = function YRadialAxis(config) {
  if (config === null) {
    throw new Error('No chart context specified for XRadialAxis');
  }

  var radius = (Math.min(config.width, config.height) / 2) - 10;

  this.yRadialAxis = d3$1.scaleSqrt()
    .range([0, radius]);
};

//
var RadialAxes = function RadialAxes(config) {
  if (config === null) {
    throw new Error('No chart context specified for RadialAxis');
  }

  this.x = new XRadialAxis(config);
  this.y = new YRadialAxis(config);
};

var SunburstDisk = function SunburstDisk(xRadialAxis, yRadialAxis) {
  var this$1 = this;

  this.x = xRadialAxis;
  this.y = yRadialAxis;
  this.arcGen = d3$1.arc()
    .startAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, this$1.x(d.x0))); })
    .endAngle(function (d) { return Math.max(0, Math.min(2 * Math.PI, this$1.x(d.x1))); })
    .innerRadius(function (d) { return Math.max(0, this$1.y(d.y0)); })
    .outerRadius(function (d) { return Math.max(0, this$1.y(d.y1)); });
};

SunburstDisk.prototype.update = function update (svg, config, data) {
    var this$1 = this;


  // Remove all the paths before redrawing
  this._removePaths(svg);

  // Create layout partition
  var root = d3$1.stratify()
    .id(function (d) { return d.id; })
    .parentId(function (d) { return d.parent; })
    (data);

  root.sum(function (d) { return d.value; });
  d3$1.partition()(root);

  // Draw the paths (arcs)
  var paths = svg.selectAll('path')
    .data(root.descendants())
    .enter().append('path')
    .attr('d', this.arcGen)
    .style('fill', function (d) {
      if (!d.parent) {
        return 'white';
      } else {
        return config.colorScale(d.data.label);
      }
    })
    .style('stroke', '#fff')
    .style('stroke-width', '2')
    .style('shape-rendering', 'crispEdge');

    paths // TODO extract events to config?
      .on('mouseover.default', function (d) {
        var ancestors = this$1._getAncestors(d);
        // Fade all the arcs
        if (ancestors.length > 0) {
          svg.selectAll('path')
              .style('opacity', 0.3);
        }
        svg.selectAll('path')
          .filter(function (node) { return ancestors.indexOf(node) >= 0; })
          .style('opacity', 1);
        // Hightlight the hovered arc
          svg.select('.text-indicator .label').text(d.data.label);
          svg.select('.text-indicator .value').text(d.value);
      })
      .on('mouseout.default', function (d) {
        svg.selectAll('path').style('opacity', 1);
        svg.select('.text-indicator .label').style('font-weight', 'normal');
        svg.select('.text-indicator .label').text('');
        svg.select('.text-indicator .value').text('');
      })
    ;

  paths
    .on('mousedown.user', config.onDown)
    .on('mouseup.user', config.onUp)
    .on('mouseleave.user', config.onLeave)
    .on('mouseover.user', config.onHover)
    .on('click.user', config.onClick);

  // ???
  svg.select(self.frameElement).style('height', this.height + 'px');
};

/**
 * Removes all the paths (arcs). Doing this before each redraw prevents the
 * transition to mess up the arcs.
 * @private
 */
SunburstDisk.prototype._removePaths = function _removePaths (svg) {
  svg.selectAll('path').remove();
};

/**
 * From: http://bl.ocks.org/kerryrodden/7090426
 * @param node
 * @returns {Array}
 * @private
 */
SunburstDisk.prototype._getAncestors = function _getAncestors (node) {
  var path = [];
  var current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
};

SunburstDisk.prototype.render = function render (svg, config) {
  //Do nothing, since disk render only when new data is received.
};

var SvgSunburstStrategy = function SvgSunburstStrategy(context) {
  this._loadConfig(context.config);

  this.svgContainer = new SvgContainer(this.config);
  var config =
    this.config,
    translation = 'translate(' + config.width / 2 + ',' + (config.height / 2) + ')';

  this.svgContainer.transform(translation);

  this.axes = new RadialAxes(config);

  this.disk = new SunburstDisk(
    this.axes.x.xRadialAxis,
    this.axes.y.yRadialAxis,
    config
  );

  this.textIndicator = new TextIndicator(config);

  this.svgContainer
    .add(this.disk)
    .add(this.textIndicator);
};

SvgSunburstStrategy.prototype.draw = function draw (data) {
  var svg = this.svgContainer.svg,
    config = this.config;

  this.disk.update(svg, config, data);
};

/**
 * This method adds config options to the chart context.
 * @param{Object} config Config object
 */
SvgSunburstStrategy.prototype._loadConfig = function _loadConfig (config) {
  this.config = {};
  //Selector
  this.config.selector = config.selector || defaults$7.selector;
  //Margins 
  this.config.marginTop = config.marginTop || defaults$7.marginTop;
  this.config.marginLeft = config.marginLeft || defaults$7.marginLeft;
  this.config.marginRight = config.marginRight || defaults$7.marginRight;
  this.config.marginBottom = config.marginBottom || defaults$7.marginBottom;
  //Width & height
  this.config.width = config.width ?
    calculateWidth(config.width, this.config.selector) - this.config.marginLeft - this.config.marginRight
    : calculateWidth(defaults$7.width, this.config.selector) - this.config.marginLeft - this.config.marginRight;
  this.config.height = config.height || defaults$7.height;
    
  this.config.colorScale = config.colorScale || defaults$7.colorScale;

  //Events
  this.config.onDown = config.onDown || defaults$7.onDown;
  this.config.onUp = config.onUp || defaults$7.onUp;
  this.config.onHover = config.onHover || defaults$7.onHover;
  this.config.onClick = config.onClick || defaults$7.onClick;
  this.config.onLeave = config.onLeave || defaults$7.onLeave;

  return this;
};

var defaults$8 = {
    selector: '#chart',
    colorScale: category7(),

    //Axes
    xAxisType: 'linear',
    xAxisFormat: '.1f',
    xAxisLabel: 'Sepal length (cm)',
    yAxisType: 'linear',
    yAxisFormat: '.1f',
    yAxisLabel: 'Sepal width (cm)',
    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 130,
    marginLeft: 150,
    //markers
    markerShape: 'dot',
    markerSize: 3,
    //Width & height
    width: '100%', // %, auto, or numeric
    height: 250,
    //Events
    onDown: function onDown(d) {
    },
    onHover: function onHover(d) {
    },
    onLeave: function onLeave(d) {
    },
    onClick: function onClick(d) {
    },

    maxNumberOfElements: 100, // used by keepDrawing method to reduce the number of elements in the current chart
};

var SvgScatterplotStrategy = (function (SvgAxis$$1) {
  function SvgScatterplotStrategy(context) {
    SvgAxis$$1.call(this, context);
    this.axes = new XYAxes(this.config.xAxisType, 'linear', this.config);
    this.points = new Pointset(this.axes.x, this.axes.y);
    this.legend = new Legend();
    //Include components in the chart container
    this.svgContainer
      .add(this.axes)
      .add(this.legend)
      .add(this.points);
  }

  if ( SvgAxis$$1 ) SvgScatterplotStrategy.__proto__ = SvgAxis$$1;
  SvgScatterplotStrategy.prototype = Object.create( SvgAxis$$1 && SvgAxis$$1.prototype );
  SvgScatterplotStrategy.prototype.constructor = SvgScatterplotStrategy;

	/**
	 * Renders a scatterplot based on data object
	 * @param  {Object} data Data Object. Contains an array with x and y properties.
	 * 
	 */
  SvgScatterplotStrategy.prototype.draw = function draw (data) {
    var svg = this.svgContainer.svg,
      config = this.config,
      needRescaling = this.config.needRescaling,
      bbox = null;

    // //Transform data, if needed
    convertByXYFormat(data, config);

    //Sort data
    sortByField(data, 'x');

    //rescale, if needed.
    if (needRescaling) {
      this.rescale();
    }

    bbox = this._getDomainBBox(data);

    this.axes.updateDomainByBBox(bbox);

    //Create a transition effect for dial rescaling
    this.axes.transition(svg, 200);

    // Update legend
    this.legend.update(svg, config, data);

    // Update points
    this.points.update(svg, config, data);
  };

  SvgScatterplotStrategy.prototype._getDomainBBox = function _getDomainBBox (data) {
    var minX = d3$1.min(data, function (d) { return d.x; }),
      maxX = d3$1.max(data, function (d) { return d.x; }),
      minY = d3$1.min(data, function (d) { return d.y; }),
      maxY = d3$1.max(data, function (d) { return d.y; });
    return [minX, maxX, minY, maxY];
  };

  SvgScatterplotStrategy.prototype._checkMarkers = function _checkMarkers (config) {
    return config.markerSize > 0;
  };
  SvgScatterplotStrategy.prototype._checkArea = function _checkArea (config) {
    return config.areaOpacity > 0;
  };

  /**
   * This method adds config options to the chart context.
   * @param  {Object} config Config object
   */
  SvgScatterplotStrategy.prototype._loadConfig = function _loadConfig (config) {
    SvgAxis$$1.prototype._loadConfig.call(this, config, defaults$8);
    //Markers
    this.config.markerOutlineWidth = config.markerOutlineWidth || defaults$8.markerOutlineWidth;
    this.config.markerShape = config.markerShape || defaults$8.markerShape;
    this.config.markerSize = (typeof config.markerSize === 'undefined' || config.markerSize < 0) ? defaults$8.markerSize : config.markerSize;
    //Area
    this.config.areaOpacity = (typeof config.areaOpacity === 'undefined' || config.markerSize < 0) ? defaults$8.areaOpacity : config.areaOpacity;
    return this;
  };

  return SvgScatterplotStrategy;
}(SvgAxis));

/**
 * SvgStrategy wrapper class
 */
var SvgStrategy = function SvgStrategy(strategy) {
      this.strategy = strategy;
  };
  SvgStrategy.prototype.draw = function draw (data) {
      this.strategy.draw(data);
  };
  SvgStrategy.prototype.on = function on (events){
      this.strategy.on(events);
  };

var strategies = {
  Barchart: function Barchart(chartContext) {
    return new SvgBarchartStrategy(chartContext);
  },
  Linechart: function Linechart(chartContext) {
    return new SvgLinechartStrategy(chartContext);
  },
  Streamgraph: function Streamgraph(chartContext) {
    return new SvgStreamgraphStrategy(chartContext);
  },
  Gauge: function Gauge(chartContext) {
    return new SvgGaugeStrategy(chartContext);
  },
  Scatterplot: function Scatterplot(chartContext) {
    return new SvgScatterplotStrategy(chartContext);
  },
  Sunburst: function Sunburst(chartContext) {
    return new SvgSunburstStrategy(chartContext);
  },
  Swimlane: function Swimlane(chartContext) {
    return new SvgSwimlaneStrategy(chartContext);
  },
  StackedArea: function StackedArea(chartContext) {
    return new SvgStackedAreaStrategy(chartContext);
  },
  Networkgraph: function Networkgraph(chartContext) {
    return new SvgNetworkgraphStrategy(chartContext);
  }
};

var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';

function isExternal(url) {
  return url && url.lastIndexOf('http', 0) === 0 && url.lastIndexOf(window.location.host) === -1;
}

function inlineImages(el, callback) {
  var images = el.querySelectorAll('image');
  var left = images.length;
  if (left === 0) {
    callback();
  }
  for (var i = 0; i < images.length; i++) {
    (function (image) {
      var href = image.getAttribute('xlink:href');
      if (href) {
        if (isExternal(href.value)) {
          window.console.warn('Cannot render embedded images linking to external hosts: ' + href.value);
          return;
        }
      }
      var canvas = window.document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var img = new window.Image();
      href = href || image.getAttribute('href');
      img.src = href;
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        image.setAttribute('xlink:href', canvas.toDataURL('image/png'));
        left--;
        if (left === 0) {
          callback();
        }
      };
      img.onerror = function () {
        window.console.error('Could not load ' + href);
        left--;
        if (left === 0) {
          callback();
        }
      };
    })(images[i]);
  }
}

function styles(el, selectorRemap) {
  var css = '';
  var sheets = document.styleSheets;
  for (var i = 0; i < sheets.length; i++) {
    if (isExternal(sheets[i].href)) {
      window.console.warn('Cannot include styles from other hosts: ' + sheets[i].href);
      continue;
    }
    var rules = sheets[i].cssRules;
    if (rules !== null) {
      for (var j = 0; j < rules.length; j++) {
        var rule = rules[j];
        if (typeof (rule.style) !== 'undefined') {
          var match = null;
          try {
            match = el.querySelector(rule.selectorText);
          } catch (err) {
            window.console.warn('Invalid CSS selector "' + rule.selectorText + '"', err);
          }
          if (match) {
            var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
            css += selector + ' { ' + rule.style.cssText + ' }\n';
          } else if (rule.cssText.match(/^@font-face/)) {
            css += rule.cssText + '\n';
          }
        }
      }
    }
  }
  return css;
}

function svgAsDataUri(el, options, cb) {
  options = options || {};
  options.scale = options.scale || 1;
  var xmlns = 'http://www.w3.org/2000/xmlns/';

  inlineImages(el, function () {
    var outer = document.createElement('div');
    var clone = el.cloneNode(true);
    var width, height;
    if (el.tagName === 'svg') {
      width = parseInt(clone.getAttribute('width') || clone.style.width || getComputedStyle(el).getPropertyValue('width'));
      height = parseInt(clone.getAttribute('height') || clone.style.height || getComputedStyle(el).getPropertyValue('height'));
    } else {
      var box = el.getBBox();
      width = box.x + box.width;
      height = box.y + box.height;
      clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));

      var svg$1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg$1.appendChild(clone);
      clone = svg$1;
    }

    clone.setAttribute('version', '1.1');
    clone.setAttributeNS(xmlns, 'xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttributeNS(xmlns, 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
    clone.setAttribute('width', width * options.scale);
    clone.setAttribute('height', height * options.scale);
    clone.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
    outer.appendChild(clone);

    var css = styles(el, options.selectorRemap);
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.innerHTML = '<![CDATA[\n' + css + '\n]]>';
    var defs = document.createElement('defs');
    defs.appendChild(s);
    clone.insertBefore(defs, clone.firstChild);

    var svg = doctype + outer.innerHTML;
    var uri = 'data:image/svg+xml;base64,' + window.btoa(window.unescape(encodeURIComponent(svg)));
    if (cb) {
      cb(uri);
    }
  });
}

/**
 * Base class, which includes common methods for all the charts
 * @export Chart
 * @class Chart
 */
var Chart = function Chart(d, config) {
    var clazz = this.constructor.name;
    if (clazz === 'Chart') {
        throw new Error(clazz + ' is non-instanciable');
    }

    this.events = {};

    if (!d && !config) {
        throw new Error('Missing constructor parameters');
    }

    var dataFormat = d.constructor.name;
    var nArguments = (d && config) ? 2 : 1;

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
};

/**
 * Private method. Initialize the API by dinamically creating methods. It creates N method, one per configuration option
 * 
 * @param {any} properties An array that contains the name of the methods
 * 
 * @memberOf Chart
 */
Chart.prototype._initializeAPI = function _initializeAPI (properties) {
    var clazz = this.constructor;
    properties.forEach(function (method) {
        clazz.prototype[method] = function (value) {
            return this.change(method, value);
        };
    });
};

/**
 * Return the chart context: data, configuration and type
 * 
 * @returns chart Chart context
 * 
 * @memberOf Chart
 */
Chart.prototype._getChartContext = function _getChartContext () {
    return {
        data: this.data,
        config: this.config,
        cType: this.constructor.name
    };
};

/**
 * Initialize the SVG context, by dinamically creating an <svg> tag in the specified selector. It is automatically invoked
 * by the chart constructor and should not be used outside of this instance.
 * 
 * @memberOf Chart
 */
Chart.prototype._initializeSVGContext = function _initializeSVGContext () {
    this._svg = new SvgStrategy(strategies[this.constructor.name](this._getChartContext()));
};

/**
 * Paint data into the chart. If no data is specified, it takes by default the last dataset (very useful when repaintng charts )
 * 
 * @param {any} data Data to be painted
 * 
 * @memberOf Chart
 */
Chart.prototype.draw = function draw (data) {
        if ( data === void 0 ) data = this.data;

    this._svg.draw(data);
};

/**
 * Make and download an image of the current state of the chart.
 * 
 * @memberOf Chart
 */
Chart.prototype.download = function download () {
        var this$1 = this;

    var selector = this._svg.strategy.config.selector + ' ' + 'svg';
    svgAsDataUri(d3.select(selector).node(), {}, function (uri, err) {
        if (err) {
            throw Error('Error converting to image ' + err);
        }
        else {
            var link = document.createElement('a');
            link.style = 'position: fixed; left -10000px;'; // making it invisible
            link.href = uri;
            link.download = this$1.constructor.name + '.svg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });
};

Chart.prototype._keepDrawingByAdding = function _keepDrawingByAdding (datum) {
    var datumType = datum.constructor;

    if (datumType === Array) {
        this.data = this.data.concat(datum);
    }
    else {
        this.data.push(datum);
    }
    this.draw(JSON.parse(JSON.stringify(this.data)));
};


/**
 * 
 * This method add a data record / array of data into the current data. 
 * @param {any} datum
 * @param {any} method
 * 
 * @memberOf Chart
    
 */
Chart.prototype.keepDrawing = function keepDrawing (datum, method) {
    if (method === 'add') {
        this._keepDrawingByAdding(datum);
    }
    else {
        this._keepDrawingByReplacing(datum);
    }
};

Chart.prototype._configureDatasource = function _configureDatasource () {
        var this$1 = this;

    this.dispatcher = d3$1.dispatch('onmessage', 'onopen', 'onerror');

    this.datasource.configure(this.dispatcher);

    this.dispatcher.on('onmessage', function (data) { return this$1.keepDrawing(data); });
    //this.dispatcher.on('onmessage', (data) => console.log(data));


    this.dispatcher.on('onopen', function (event$$1) {
        console.log('onopen', event$$1);
    });

    this.dispatcher.on('onerror', function (error) {
        console.log('onerror', error);
    });
};

/**
 * Change a configuration property. They all are also available through a method with the same name of the property.
 * 
 * @param {any} property property name
 * @param {any} value the new property value
 * @returns the instance of the current chart
 * 
 * @memberOf Chart
 */
Chart.prototype.change = function change (property, value) {
    this._svg.strategy.changeConfigProperty(property, value);
    return this;
};

/**
 * Linechart implementation. This charts belongs to 'Basic' family.
 * It is inherited on 'Basic'.
 */
var Linechart$1 = (function (Chart$$1) {
  function Linechart(data, config) {
    Chart$$1.call(this, data, config);
    var keys = Object.keys(defaults);
    this._initializeAPI(keys);
  }

  if ( Chart$$1 ) Linechart.__proto__ = Chart$$1;
  Linechart.prototype = Object.create( Chart$$1 && Chart$$1.prototype );
  Linechart.prototype.constructor = Linechart;

  /**
   * Renders a data object on the chart.
   * @param  {Object} data This object contains the data that will be rendered on chart. If you do not
   * specify this param, this.data will be used instead.
   */
  Linechart.prototype.draw = function draw (data) {
    if ( data === void 0 ) data = this.data;

    Chart$$1.prototype.draw.call(this, data);
  };

  /**
   * Add new data to the current graph. If it is empty, this creates a new one.
   * @param  {Object} datum data to be rendered
   */
  Linechart.prototype.keepDrawing = function keepDrawing (datum) {
    Chart$$1.prototype.keepDrawing.call(this, datum, 'add');
  };

  return Linechart;
}(Chart));

/**
 * Barchart implementation. This charts belongs to 'Basic' family.
 * It is inherited on 'Basic'.
 */
var Barchart$1 = (function (Chart$$1) {
  function Barchart(data, config) {
    Chart$$1.call(this, data, config);
    var keys = Object.keys(defaults);
    this._initializeAPI(keys);
  }

  if ( Chart$$1 ) Barchart.__proto__ = Chart$$1;
  Barchart.prototype = Object.create( Chart$$1 && Chart$$1.prototype );
  Barchart.prototype.constructor = Barchart;

  /**
   * Renders a data object on the chart.
   * @param  {Object} data - This object contains the data that will be rendered on chart. If you do not
   * specify this param, this.data will be used instead.
   */
  Barchart.prototype.draw = function draw (data) {
    if ( data === void 0 ) data = this.data;

    Chart$$1.prototype.draw.call(this, data);
  };

  Barchart.prototype.fire = function fire (event$$1, data) {//TODO: improve this section
    if (event$$1 === 'transition') {
      if (data === 'grouped') {
        this._svg.strategy.transition2Grouped();
      }
      else if (data === 'stacked') {
        this._svg.strategy.transition2Stacked();
      }

      this._svg.strategy.draw();
    }
  };

  /**
   * Add new data to the current graph. If it is empty, this creates a new one.
   * @param  {Object} datum - data to be rendered
   */
  Barchart.prototype.keepDrawing = function keepDrawing (datum) {
    Chart$$1.prototype.keepDrawing.call(this, datum, 'replace');
  };
  
  Barchart.prototype._keepDrawingByReplacing = function _keepDrawingByReplacing (datum) {
    var this$1 = this;

    var datumType = datum.constructor;
    if (datumType === Array) {
      this.data = datum;
    }
    else {
      for (var i = 0; i < this.data.length; i++) {
        var d = this$1.data[i];
        if (d.x === datum.x) {
          this$1.data[i] = datum;
          break;
        }
      }
    }

    this.draw(JSON.parse(JSON.stringify(this.data)));
  };

  return Barchart;
}(Chart));

/**
 * Streamgraph implementation. This charts belongs to 'Flow' family.
 * It is inherited on 'Flow'.
 */
var Streamgraph$1 = (function (Chart$$1) {
  function Streamgraph(data, config) {
    Chart$$1.call(this, data, config);
    var keys = Object.keys(defaults$2);
    this._initializeAPI(keys);
  }

  if ( Chart$$1 ) Streamgraph.__proto__ = Chart$$1;
  Streamgraph.prototype = Object.create( Chart$$1 && Chart$$1.prototype );
  Streamgraph.prototype.constructor = Streamgraph;

  /**
   * Renders a data object on the chart.
   * @param  {Object} data This object contains the data that will be rendered on chart. If you do not
   * specify this param, this.data will be used instead.
   */
  Streamgraph.prototype.draw = function draw (data) {
    if ( data === void 0 ) data = this.data;

    Chart$$1.prototype.draw.call(this, data);
  };

  /**
   * Add new data to the current graph. If it is empty, this creates a new one.
   * @param  {Object} datum data to be rendered
   */
  Streamgraph.prototype.keepDrawing = function keepDrawing (datum) {
    Chart$$1.prototype.keepDrawing.call(this, datum, 'add');
  };

  return Streamgraph;
}(Chart));

/**
 * StackedArea implementation. This charts belongs to 'Flow' family.
 * It is inherited on 'Flow'.
 */
var StackedArea$1 = (function (Chart$$1) {
  function StackedArea(data, config) {
    Chart$$1.call(this, data, config);
    var keys = Object.keys(defaults$3);
    this._initializeAPI(keys);
  }

  if ( Chart$$1 ) StackedArea.__proto__ = Chart$$1;
  StackedArea.prototype = Object.create( Chart$$1 && Chart$$1.prototype );
  StackedArea.prototype.constructor = StackedArea;

  /**
   * Renders a data object on the chart.
   * @param  {Object} data This object contains the data that will be rendered on chart. If you do not
   * specify this param, this.data will be used instead.
   */
  StackedArea.prototype.draw = function draw (data) {
    if ( data === void 0 ) data = this.data;

    Chart$$1.prototype.draw.call(this, data);
  };

  /**
   * Add new data to the current graph. If it is empty, this creates a new one.
   * @param  {Object} datum data to be rendered
   */
  StackedArea.prototype.keepDrawing = function keepDrawing (datum) {
    if (!this.datum) {
      this.datum = [];
    }
    this.datum = this.datum.concat(datum);
    Chart$$1.prototype.draw.call(this, this.datum);
  };

  return StackedArea;
}(Chart));

/**
 * Linechart implementation. This charts belongs to 'Basic' family.
 * It is inherited on 'Basic'.
 */
var Swimlane$1 = (function (Chart$$1) {
  function Swimlane(data, config) {
    Chart$$1.call(this, data, config);
    var keys = Object.keys(defaults$4);
    this._initializeAPI(keys);
  }

  if ( Chart$$1 ) Swimlane.__proto__ = Chart$$1;
  Swimlane.prototype = Object.create( Chart$$1 && Chart$$1.prototype );
  Swimlane.prototype.constructor = Swimlane;

  /**
   * Renders a data object on the chart.
   * @param  {Object} data This object contains the data that will be rendered on chart. If you do not
   * specify this param, this.data will be used instead.
   */
  Swimlane.prototype.draw = function draw (data) {
    if ( data === void 0 ) data = this.data;

    Chart$$1.prototype.draw.call(this, data);
  };

  /**
   * Add new data to the current graph. If it is empty, this creates a new one.
   * @param  {Object} datum data to be rendered
   */
  Swimlane.prototype.keepDrawing = function keepDrawing (datum) {
    Chart$$1.prototype.keepDrawing.call(this, datum, 'add');
  };

  return Swimlane;
}(Chart));

/**
 * Gauge implementation. This charts belongs to 'Basic' family.
 * It is inherited on 'Basic'.
 */
var Gauge$1 = (function (Chart$$1) {
  function Gauge(data, config) {
    Chart$$1.call(this, data, config);
  }

  if ( Chart$$1 ) Gauge.__proto__ = Chart$$1;
  Gauge.prototype = Object.create( Chart$$1 && Chart$$1.prototype );
  Gauge.prototype.constructor = Gauge;

  /**
   * Renders a data object on the chart.
   * @param  {Object} data This object contains the data that will be rendered on chart. If you do not
   * specify this param, this.data will be used instead.
   */
  Gauge.prototype.draw = function draw (data) {
    if ( data === void 0 ) data = this.data;

    Chart$$1.prototype.draw.call(this, data);
  };


  /**
   * Add new data to the current graph. If it is empty, this creates a new one.
   * @param  {Object} datum data to be rendered
   */
  Gauge.prototype.keepDrawing = function keepDrawing (datum) {
    this.data = [datum[0]];
    Chart$$1.prototype.draw.call(this);
  };

  return Gauge;
}(Chart));

/**
 * Scatterplot implementation. This charts belongs to 'Basic' family.
 * It is inherited on 'Basic'.
 */
var Scatterplot$1 = (function (Chart$$1) {
  function Scatterplot(data, config) {
    Chart$$1.call(this, data, config);
    var keys = Object.keys(defaults$8);
    this._initializeAPI(keys);
  }

  if ( Chart$$1 ) Scatterplot.__proto__ = Chart$$1;
  Scatterplot.prototype = Object.create( Chart$$1 && Chart$$1.prototype );
  Scatterplot.prototype.constructor = Scatterplot;

  /**
   * Renders a data object on the chart.
   * @param  {Object} data This object contains the data that will be rendered on chart. If you do not
   * specify this param, this.data will be used instead.
   */
  Scatterplot.prototype.draw = function draw (data) {
    if ( data === void 0 ) data = this.data;

    Chart$$1.prototype.draw.call(this, data);
  };

  /**
   * Add new data to the current graph. If it is empty, this creates a new one.
   * @param  {Object} datum data to be rendered
   */
  Scatterplot.prototype.keepDrawing = function keepDrawing (datum) {
    Chart$$1.prototype.keepDrawing.call(this, datum, 'add');
  };

  return Scatterplot;
}(Chart));

/**
 * Sunburst implementation. This charts belongs to 'Hierarchical' family.
 */
var Sunburst$1 = (function (Chart$$1) {
  function Sunburst(data, config) {
    Chart$$1.call(this, data, config);
  }

  if ( Chart$$1 ) Sunburst.__proto__ = Chart$$1;
  Sunburst.prototype = Object.create( Chart$$1 && Chart$$1.prototype );
  Sunburst.prototype.constructor = Sunburst;

  /**
   * Renders a data object on the chart.
   * @param  {Object} data This object contains the data that will be rendered on chart. If you do not
   * specify this param, this.data will be used instead.
   */
  Sunburst.prototype.draw = function draw (data) {
    if ( data === void 0 ) data = this.data;

    Chart$$1.prototype.draw.call(this, data);
  };

  /**
   * Add new data to the current graph. If it is empty, this creates a new one.
   * @param  {Object} datum data to be rendered
   */
  Sunburst.prototype.keepDrawing = function keepDrawing (datum) {
    Chart$$1.prototype.keepDrawing.call(this, datum, 'add');
  };

  // /**
  //  * Add new data to the current graph. If it is empty, this creates a new one.
  //  * @param  {Object} datum data to be rendered
  //  */
  // keepDrawing(datum) {
  //   if (this.data.constructor === Array) { this.data = {}; }
  //   let config = this.config;
  //   if (!datum) {
  //     console.warn('attemp to draw null datum');
  //     return;
  //   }
  //
  //   this._buildTree(datum[datum.length - 1].path, datum[datum.length - 1].value, this.data);
  //
  //   this.draw();
  //
  //   return this.data;
  // }

  /**
   * Inserts the new nodes into the existing tree.
   * From: http://bl.ocks.org/kerryrodden/7090426
   *
   * @param pathString
   * @param value
   * @param data
   * @private
   */
  Sunburst.prototype._buildTree = function _buildTree (pathString, value, data) {
    var path = pathString.split('/');
    var current = data;
    for (var i = 1; i < path.length; i++) {
      var children = current.children;
      var name = path[i];
      var child;
      if (i + 1 < path.length) {
        var foundChild = false;
        for (var j = 0; children !== undefined && j < children.length; j++) {
          if (children[j].name === name) {
            child = children[j];
            foundChild = true;
            break;
          }
        }
        if (!foundChild) {
          child = {
            'name': name,
            'children': []
          };
          if (children === undefined) {
            current.children = [];
          }
          delete current.value;
          current.children.push(child);
        }
        current = child;
      } else {
        child = {
          'name': name,
          'value': value
        };
        if (children === undefined) {
          current.children = [];
        }
        delete current.value;
        current.children.push(child);
      }
    }
  };

  return Sunburst;
}(Chart));

/**
 * Linechart implementation. This charts belongs to 'Basic' family.
 * It is inherited on 'Basic'.
 */
var Networkgraph$1 = (function (Chart$$1) {
  function Networkgraph(data, config) {
    Chart$$1.call(this, data, config);
    var keys = Object.keys(defaults$6);
    this._initializeAPI(keys);
  }

  if ( Chart$$1 ) Networkgraph.__proto__ = Chart$$1;
  Networkgraph.prototype = Object.create( Chart$$1 && Chart$$1.prototype );
  Networkgraph.prototype.constructor = Networkgraph;

  /**
   * Renders a data object on the chart.
   * @param  {Object} data This object contains the data that will be rendered on chart. If you do not
   * specify this param, this.data will be used instead.
   */
  Networkgraph.prototype.draw = function draw (data) {
    if ( data === void 0 ) data = this.data;

    Chart$$1.prototype.draw.call(this, data);
  };

  /**
   * Add new data to the current graph. If it is empty, this creates a new one.
   * @param  {Object} datum data to be rendered
   */
  Networkgraph.prototype.keepDrawing = function keepDrawing (datum) {
    Chart$$1.prototype.keepDrawing.call(this, datum, 'add');
  };

  return Networkgraph;
}(Chart));

exports.Datasource = Datasource;
exports.HTTPDatasource = HTTPDatasource;
exports.WebsocketDatasource = WebsocketDatasource;
exports.Linechart = Linechart$1;
exports.Barchart = Barchart$1;
exports.Streamgraph = Streamgraph$1;
exports.StackedArea = StackedArea$1;
exports.Swimlane = Swimlane$1;
exports.Gauge = Gauge$1;
exports.Scatterplot = Scatterplot$1;
exports.Sunburst = Sunburst$1;
exports.Networkgraph = Networkgraph$1;
exports.category1 = category1;
exports.category2 = category2;
exports.category3 = category3;
exports.category4 = category4;
exports.category5 = category5;
exports.category6 = category6;
exports.category7 = category7;
exports.category8 = category8;
exports.sequentialYellow = sequentialYellow;
exports.sequentialRedOrange = sequentialRedOrange;
exports.sequentialRed = sequentialRed;
exports.sequentialPink = sequentialPink;
exports.sequentialPurplePink = sequentialPurplePink;
exports.sequentialPurple = sequentialPurple;
exports.sequentialBlue = sequentialBlue;
exports.sequentialLightBlue = sequentialLightBlue;
exports.sequentialBlueViolet = sequentialBlueViolet;
exports.sequentialTurquoise = sequentialTurquoise;
exports.sequentialLightGreen = sequentialLightGreen;
exports.sequentialDarkGreen = sequentialDarkGreen;
exports.sequentialGreenBrown = sequentialGreenBrown;
exports.sequentialBrown = sequentialBrown;
exports.sequentialGrey = sequentialGrey;
exports.sequentialVioletCb = sequentialVioletCb;
exports.sequentialPinkCb = sequentialPinkCb;
exports.sequentialBlueCb = sequentialBlueCb;
exports.sequentialGreenCb = sequentialGreenCb;
exports.sequentialGreenBrownCb = sequentialGreenBrownCb;
exports.diverging_spectral1 = diverging_spectral1;
exports.diverging_spectral2 = diverging_spectral2;
exports.diverging_spectral3 = diverging_spectral3;
exports.diverging_brown_turquoise = diverging_brown_turquoise;
exports.diverging_orange_pink = diverging_orange_pink;
exports.diverging_red_blue = diverging_red_blue;
exports.diverging_red_grey = diverging_red_grey;
exports.diverging_orange_violet = diverging_orange_violet;
exports.diverging_purple_green = diverging_purple_green;
exports.diverging_violet_green = diverging_violet_green;
exports.diverging_red_green = diverging_red_green;
exports.diverging_brown_green = diverging_brown_green;
exports.diverging_lightBrown_turquoise = diverging_lightBrown_turquoise;
