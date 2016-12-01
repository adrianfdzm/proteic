import Config from '../../Config';
import Responsible from './Responsible';

abstract class Component implements Responsible {

    protected config: Config;
    protected svg: any;

    constructor() {
    }

    abstract update(data: any): void;
    abstract render(): void;

    abstract makeItResponsive(): void;

    /**
     * 
     * Configure this component to use a given configuration and a SVG selector. This method is automatically by the Container.
     * @param {Config} config A configuration object
     * @param {*} svg A D3 selector object
     * 
     * @memberOf Component
    
     */
    public configure(config: Config, svg: any) {
        this.config = config;
        this.svg = svg;
    }

    /**
     * 
     * Clean the current series.
     */
    public clean() {
    }
};

export default Component;    
