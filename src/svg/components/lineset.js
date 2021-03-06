import {line, nest} from 'd3';

export class Lineset {
  constructor(x, y) {
    this.xAxis = x.xAxis;
    this.yAxis = y.yAxis;
    this.lineGenerator = line()
      .x((d) => this.xAxis.scale()(d.x))
      .y((d) => this.yAxis.scale()(d.y));
  }

  update(svg, config, data) {
    let dataSeries = nest().key((d) => d.key).entries(data),
      series = null,
      lines = null,
      colorScale = config.colorScale;

    svg.selectAll('g.serie').remove();

    series = svg.selectAll('g.serie');
    lines = series
      .data(dataSeries, (d) => d.key)
      .enter()
      .append('g')
      .attr('class', 'serie')
      .attr('stroke', (d, i) => colorScale(i))
      .append('svg:path')
      .style('stroke', (d, i) => colorScale(i))
      .style('stroke-width', 1.3)
      .style('fill', 'none')
      .attr('d', (d) => this.lineGenerator(d.values))
      .attr('class', 'line');

    this.svg = svg;
  }

  render(svg, config) {
    //Do nothing, since lines render only when new data is received.
  }
}