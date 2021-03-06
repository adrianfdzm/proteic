import * as Colors from '../colors';

export const defaults = {
    selector: '#chart',
    colorScale: Colors.category7(),

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
    onDown(d) {
    },
    onHover(d) {
    },
    onLeave(d) {
    },
    onClick(d) {
    },

    maxNumberOfElements: 100, // used by keepDrawing method to reduce the number of elements in the current chart
};