import Container from '../components/Container';
import Config from '../../Config';
import { select } from 'd3';
import Globals from '../../Globals';

abstract class SvgChart {

    protected container: Container;
    protected config: Config;

    constructor() {


    }

    initialize() {
        this.container = new Container(this.config);
        this.registerResizeListener();
    }

    setConfig(config: Config) {
        this.config = config;
    }

    abstract draw(data: [{}]): void;


    public addLoading() {
        this.container.addLoadingIcon();
    }

    public removeLoading() {
        this.container.removeLoadingIcon();
    }

    private registerResizeListener() {
        window.addEventListener('resize', () => {

            this.detectDecreasing();
            this.detectIncreasing();

        });
    }


    private detectIncreasing() {
        let width = this.config.get('width');

        console.log('original width', width);

    }

    private detectDecreasing() {
        //Get margins
        let mLeft = this.config.get('marginLeft');
        let mRight = this.config.get('marginRight');
        let mTop = this.config.get('marginTop');
        let mBottom = this.config.get('marginBottom');
        let computedWidth = this.config.get('computedWidth') + mRight + mLeft,
            windowWidth = window.innerWidth;

        console.log('DECREASING: computed Width', computedWidth, 'window width', windowWidth);

        if (computedWidth > windowWidth) return;

        this.config.put('computedWidth', (window.innerWidth - mLeft - mRight));
        //this.config.put('width', window.innerWidth - mLeft - mRight);
        this.config.put('height', Globals.ASPECT_RATIO * this.config.get('computedWidth'));

        select(this.config.get('selector') + ' svg')
            .attr('width', this.config.get('computedWidth') + mRight + mLeft)
            .attr('height', this.config.get('height') + mTop + mBottom);

        this.container.getSvg()
            .attr('transform', 'translate(' + mLeft + ',' + mTop + ')');

        this.container.responsive();
    }

}

export default SvgChart;