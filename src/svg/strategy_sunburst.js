import { defaults } from '../utils/defaults/sunburst';
import { SvgContainer } from './components/svgContainer';
import { RadialAxes } from './components/radialAxes';
import { SunburstDisk } from './components/sunburstDisk';
import { TextIndicator } from './components/textIndicator';
import { calculateWidth } from '../utils/screen';

export class SvgSunburstStrategy {

  constructor(context) {
    this._loadConfig(context.config);

    this.svgContainer = new SvgContainer(this.config);
    let config =
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
  }

  draw(data) {
    let svg = this.svgContainer.svg,
      config = this.config;

    this.disk.update(svg, config, data);
  }

  /**
   * This method adds config options to the chart context.
   * @param  {Object} config Config object
   */
  _loadConfig(config) {
    this.config = {};
    //Selector
    this.config.selector = config.selector || defaults.selector;
    //Margins 
    this.config.marginTop = config.marginTop || defaults.marginTop;
    this.config.marginLeft = config.marginLeft || defaults.marginLeft;
    this.config.marginRight = config.marginRight || defaults.marginRight;
    this.config.marginBottom = config.marginBottom || defaults.marginBottom;
    //Width & height
    this.config.width = config.width ?
      calculateWidth(config.width, this.config.selector) - this.config.marginLeft - this.config.marginRight
      : calculateWidth(defaults.width, this.config.selector) - this.config.marginLeft - this.config.marginRight;
    this.config.height = config.height || defaults.height;
    
    this.config.colorScale = config.colorScale || defaults.colorScale;

    //Events
    this.config.onDown = config.onDown || defaults.onDown;
    this.config.onUp = config.onUp || defaults.onUp;
    this.config.onHover = config.onHover || defaults.onHover;
    this.config.onClick = config.onClick || defaults.onClick;
    this.config.onLeave = config.onLeave || defaults.onLeave;

    return this;
  }
}
