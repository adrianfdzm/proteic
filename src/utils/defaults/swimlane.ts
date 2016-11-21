import * as Colors from '../colors';

export const defaults = {
    selector: '#chart',
    colorScale: Colors.category3(),
    //Axes
    xAxisType: 'time',
    xAxisFormat: '%y/%m/%d',
    xAxisLabel: null,
    yAxisType: 'categorical',
    yAxisFormat: 's',
    yAxisLabel: null,
    yAxisShow: true,

    //margins
    marginTop: 20,
    marginRight: 250,
    marginBottom: 30,
    marginLeft: 150,
    //Width & height
    width: '100%', // %, auto, or numeric 
    height: 250,
    legend: true,
    //Events
    onDown(d) {
    },
    onHover(d) {
    },
    onLeave(d) {
    },
    onClick(d) {
    },
    onUp(d) {

    }
};