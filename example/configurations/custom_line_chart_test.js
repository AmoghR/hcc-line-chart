import custom_line_chart from 'customcharts/custom_line_chart'
import data from '../datasets/vienna-population.csv'

export default {
  chart: custom_line_chart,
  data,

  dataTypes: {
    Year:'number',
    Population: 'number',
  },

  mapping: {
    x: { value: ['Year'] },
    y: { value: ['Population'] },
  },

  visualOptions: {
    width: 800,
    height: 500,
    showXAxis: true,
    showYAxis: true,
    gridMode: 'both', // Default sandbox view to horizontal Y grid lines only
    dotsRadius: 4,
    showSketchy: false,
    background: '#ffffff'
  },
}