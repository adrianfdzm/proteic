import {isEven} from '../../utils/functions';
import {select, scaleLinear, scaleBand, axisLeft, format as d3Format} from 'd3';

export class YAxis {
  constructor(yAxisType, config) {
    if (config === null) {
      throw new Error('No chart context specified for XAxis');
    }

    this.yAxis = this._initializeYAxis(yAxisType, config);
  }

  rescale(width, height) {
    this.yAxis.tickSizeInner(-width);
  }

  _initializeYAxis(yAxisType = 'linear', config) {
    let y = null,
      axis = null;
    switch (yAxisType) {
      case 'linear':
        y = scaleLinear().range([config.height, 0]);
        axis = axisLeft(y).tickFormat(d3Format(config.yAxisFormat));
        break;
      case 'categorical':
        y = scaleBand().rangeRound([config.height, 0])
          .padding(0.1)
          .align(0.5);
        axis = axisLeft(y);
        break;
      default:
        throw new Error('Not allowed type for YAxis. Only allowed "time",  "linear" or "categorical". Got: ' + yAxisType);
    }

    return axis.tickSizeInner(-config.width)
      .tickSizeOuter(0)
      .tickPadding(20);
  }

  // _initializeYAxis(yAxisType = 'linear', config) {
  //   let y = null,
  //     yAxis = null;
  //
  //   switch (yAxisType) {
  //     case 'linear':
  //       y = scaleLinear().range([config.height, 0]);
  //       break;
  //     case 'categorical':
  //       y = scaleBand().rangeRound([config.height, 0])
  //         .padding(0.1)
  //         .align(0.5);
  //       break;
  //     default:
  //       throw new Error('Not allowed type for YAxis. Only allowed "time",  "linear" or "categorical". Got: ' + yAxisType);
  //   }
  //   return axisLeft(y)
  //     .tickSizeInner(-config.width)
  //     .tickSizeOuter(0)
  //     .tickPadding(20)
  //     .tickFormat((d) => d)
  //     .ticks(config.yticks, config.tickLabel);
  // }

  transition(svg, time = 200) {
    svg.selectAll('.y.axis').transition().duration(time).call(this.yAxis).on('end', this.yStyle);
  }

  yStyle() {
    select(this).selectAll('g.tick text')
      .style('font', '1.4em Montserrat, sans-serif')
      .style('fill', (d, i) => !isEven(i) || i === 0 ? '#5e6b70' : '#1a2127');
    select(this).selectAll('g.tick line')
      .style('stroke', (d, i) => isEven(i) && i !== 0 ? '#5e6b70' : '#dbdad8');
  }

  updateDomainByBBox(b) {
    let y = this.yAxis.scale();
    y.domain(b);
  }

  updateDomainByKeys(keys) {
    let y = this.yAxis.scale();
    y.domain(keys);
  }

  render(svg, config) {
    let yAxis = this.yAxis,
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

  }
}