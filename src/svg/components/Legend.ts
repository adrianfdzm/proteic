import Component from './Component';
import Config from '../../Config';

import {
  selection,
  nest
} from 'd3';


class Legend extends Component {


  constructor() {
    super();
  }

  public render() {
    //Do nothing, since points render only when new data is received.

  }

  public update(data: [any]) {
    let dataSeries = nest()
      .key((d) => d.key)
      .entries(data),
      legend = null,
      entries = null,
      colorScale = this.config.get('colorScale'),
      height = this.config.get('height'),
      width = this.config.get('width');

    if (dataSeries.length === 1 && dataSeries[0].key === 'undefined') {
      console.warn('Not showing legend, since there is a valid key');
      return;
    }

    this.svg.selectAll('g.legend').remove();

    legend = this.svg.append('g').attr('class', 'legend');
    entries = legend.selectAll('.legend-entry')
      .data(dataSeries, (d) => d.key)
      .enter()
      .append('g')
      .attr('class', 'legend-entry');


    entries.append('rect')
      .attr('x', width + 10)
      .attr('y', (d, i) => i * 25)
      .attr('height', 20)
      .attr('width', 20)
      .attr('fill', (d, i) => colorScale(i))
      .attr('data-key', (d) => d.key)
      .style('opacity', 0.8)
      .on('click.default', (d) => this.toggle(d));


    entries.append('text')
      .attr("x", width + 25 + 10)
      .attr("y", (d, i) => i * 25 + 7)
      .attr("dy", "0.55em")
      .attr('data-key', (d) => d.key)
      .text((d) => d.key)
      .style('font', '14px Montserrat, sans-serif')
      .on('click.default', () => this.toggle);
  }


  private toggle(d: any): void {
    let key = d.key,
    element = this.svg.selectAll('g.serie[data-key="'+key+'"]'),
    opacity = element.style('opacity');

    opacity = (opacity == 1) ? 0 : 1;

    element.style('opacity', opacity);
  }

}

export default Legend;