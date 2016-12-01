import {
    map,
    select,
    scaleTime,
    scaleLinear,
    scaleBand,
    format,
    axisBottom,
    timeParse,
    min as d3Min,
    max as d3Max,
    timeMonth
} from 'd3';

import Component from './Component';
import Config from '../../Config';
import Globals from '../../Globals';
import { isEven } from '../../utils/functions';

class XAxis extends Component {

    private _xAxis: any;

    constructor() {
        super();
    }

    public render(): void {
        let computedWidth = this.config.get('computedWidth'),
            height = this.config.get('height'),
            xAxisFormat = this.config.get('xAxisFormat'),
            xAxisType = this.config.get('xAxisType'),
            xAxisLabel = this.config.get('xAxisLabel'),
            xAxisGrid = this.config.get('xAxisGrid');

        this.initializeXAxis(computedWidth, height, xAxisFormat, xAxisType, xAxisGrid);

        this.svg
            .append('g')
            .attr('class', `x axis ${xAxisType}`)
            .attr('transform', 'translate(0,' + height + ')')
            .call(this._xAxis);

        this.svg
            .append('text')
            .attr('class', 'xaxis-title')
            .attr("text-anchor", "middle")
            .attr('x', computedWidth / 2)
            .attr('y', height + 40)
            .text(xAxisLabel)
            .style('font', '0.8em Montserrat, sans-serif');
    }

    public update(data: [any]): void {
        let propertyX = this.config.get('propertyX');
        let xAxisType = this.config.get('xAxisType');

        if (xAxisType === 'linear') {
            //TODO: Optimize it. Currently we are looping data twice.
            let min = d3Min(data, (d) => d[propertyX]),
                max = d3Max(data, (d) => d[propertyX]);
            this.updateDomainByMinMax(min, max);

        } else if (xAxisType === 'time') {
            let min = d3Min(data, (d) => (d[propertyX] || d[this.config.get('propertyStart')])),
                max = d3Max(data, (d) => (d[propertyX] || d[this.config.get('propertyEnd')]));
            this.updateDomainByMinMax(min, max);

        }
        else {
            let keys: [string] = map(data, (d) => d[propertyX]).keys();
            this.updateDomainByKeys(keys);
        }

        this.transition();
    }
    /**
     * 
     * Update x domain by keys
     * @private
     * @param {*} data
     * 
     * @memberOf XAxis
    
     */
    private updateDomainByKeys(keys: [string]) {
        this._xAxis.scale().domain(keys);

    }

    private updateDomainByMinMax(min: number, max: number) {
        this._xAxis.scale().domain([min, max]);
    }

    private transition(time: number = 200) {
        this.svg.selectAll('.x.axis').transition().duration(time).call(this._xAxis);
    }

    /**
     *
     * Initializes a new horizontal axis
     *
     * @private
     * @param {(string | number)} Width Width of the axis
     * @param {string} xAxisFormat Format of the axis. This parameter is only valid when using a time axis.
     * @param {string} xAxisType Type of the axis. It can be: time, linear or categorical.
     *
     * @memberOf XAxis
     */
    private initializeXAxis(width: string | number, height: string | number, xAxisFormat: string, xAxisType: string, xAxisGrid: boolean): void {
        switch (xAxisType) {
            case 'time':
                this._xAxis = axisBottom(scaleTime().range([0, width]));
                break;
            case 'linear':
                this._xAxis = axisBottom(scaleLinear().range([0, width]))
                    .tickFormat(format(xAxisFormat));
                break;
            case 'categorical':
                this._xAxis = axisBottom(scaleBand().rangeRound([0, width])
                    .padding(0.1).align(0.5));
                break;
            default:
                throw new Error('Not allowed type for XAxis. Only allowed "time",  "linear" or "categorical". Got: ' + xAxisType);
        }

        if (xAxisGrid) {
            this._xAxis
                .tickSizeInner(-height)
                .tickPadding(9);
        }
        this._xAxis.ticks(7);
    }

    get xAxis() {
        return this._xAxis;
    }

    public makeItResponsive() {
        console.log('making X responsive', this.config.get('computedWidth'), Globals.BREAKPOINT);
        let xAxisType = this.config.get('xAxisType');

        this._xAxis.scale().range([0, this.config.get('computedWidth')]);
        this._xAxis.scale(this._xAxis.scale());

        this.svg.select('.xaxis-title')
            .attr('x', this.config.get('computedWidth') / 2)
            .attr('y', this.config.get('height') + 40);


        if (this.config.get('computedWidth') < Globals.BREAKPOINT) {
            this._xAxis.ticks(3);
        } else {
            this._xAxis.ticks(7);
        }

        this.svg.select('.x.axis')
            .attr('transform', 'translate(0,' + this.config.get('height') + ')')
            .call(this._xAxis);

    }
}

export default XAxis;