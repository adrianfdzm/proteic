
import Config from '../../Config';
import SvgChart from '../base/SvgChart';
import { sortByField } from '../../utils/dataSorting';
import { convertByXYFormat } from '../../utils/dataTransformation';
import Dial from '../components/Dial';
import DialNeedle from '../components/DialNeedle';
import TextIndicator from "../components/TextIndicator";

class SvgStrategyGauge extends SvgChart {

    private dial: Dial;
    private dialNeedle: DialNeedle;
    private textIndicator: TextIndicator;


    constructor() {
        super();
        this.dial = new Dial();
        this.dialNeedle = new DialNeedle();
        this.textIndicator = new TextIndicator();
    }

    public draw(data: [{}]) {
        this.container.updateComponents(data);
    }


    public initialize(): void {
        super.initialize();

        this.container.add(this.dial).add(this.dialNeedle);
        if (this.config.get('numericIndicator')) {
            let width = this.config.get('width'),
                height = this.config.get('height');
            let r = (
                    (width > height) ? height : width
                ) / 2;
            let indicatorOffset = r + 75;
            this.config.put('textIndicatorTranslation', 'translate(' + r + ',' + indicatorOffset + ')');
            this.container.add(this.textIndicator);
        }
    }
}

export default SvgStrategyGauge;