export const visualOptions = {
  width: {
    type: 'number',
    label: 'Width',
    default: 600,
    group: 'artboard',
  },

  height: {
    type: 'number',
    label: 'Height',
    default: 400,
    group: 'artboard',
  },

  // padYScale: {
  //   type: 'boolean',
  //   label: 'Upper & lower padding',
  //   default: true,
  //   group: 'artboard',
  // },

  marginTop: {
    type: 'number',
    label: 'Margin Top',
    default: 60,
    group: 'artboard'
  },

  marginBottom: {
    type: 'number',
    label: 'Margin Bottom',
    default: 50,
    group: 'artboard'
  },

  marginLeft: {
    type: 'number',
    label: 'Margin Left',
    default: 60,
    group: 'artboard'
  },

  marginRight: {
    type: 'number',
    label: 'Margin Right',
    default: 50,
    group: 'artboard'
  },

  paddingTop: {
    type: 'number',
    label: 'Padding Top',
    default: 0,
    group: 'artboard'
  },

  paddingBottom: {
    type: 'number',
    label: 'Padding Bottom',
    default: 0,
    group: 'artboard'
  },

  paddingLeft: {
    type: 'number',
    label: 'Padding Left',
    default: 0,
    group: 'artboard'
  },

  paddingRight: {
    type: 'number',
    label: 'Padding Right',
    default: 0,
    group: 'artboard'
  },


  /* Chart section */
  titleText: {
    type: 'text',
    label: 'Chart Title',
    default: 'User Title',
    group: 'chart',
  },

  titlePosition: {
    type: 'text',
    label: 'Title Position',
    options: ['center', 'left', 'right'],
    default: 'center',
    group: 'chart',
  },

  chartType: {
    type: 'text',
    label: 'Chart Type',
    options: ['line', 'step', 'bump'],
    default: 'line',
    group: 'chart',
  },

  showMarker: {
    type: 'boolean',
    label: 'Show Marker',
    default: false,
    group: 'chart',
  },

  markerShape: {
    type: 'text',
    label: 'Marker Shape',
    options: ['circle', 'square', 'triangle', 'diamond', 'star'],
    default: 'circle',
    group: 'chart',
    disabled: {
      showMarker: false,
    },
  },

  markerSize: {
    type: 'number',
    label: 'Marker Size',
    default: 2,
    group: 'chart',
    disabled: {
      showMarker: false,
    },
  },

  graphLineWidth: {
    type: 'number',
    label: 'Line Width',
    default: 2,
    group: 'chart',
  },

  lineStyle: {
    type: 'text',
    label: 'Line Style',
    options: ['solid', 'dashed', 'dotted'],
    default: 'solid',
    group: 'chart',
  },

  /* Artistic section */
  showSketchy: {
    type: 'boolean',
    label: 'Hand-Drawn Style',
    default: false,
    group: 'artistic',
  },

  roughness: {
    type: 'number',
    label: 'Roughness',
    default: 1,
    group: 'artistic',
    disabled: {
      showSketchy: false,
    },
  },

  /* Axes section */
  showXAxis: {
    type: 'boolean',
    label: 'Show X-Axis',
    default: true,
    group: 'axes',
  },

  showXAxisLine: {
    type: 'boolean',
    label: 'Show X-Axis Line',
    default: true,
    group: 'axes',
    disabled: {
      showXAxis: false,
    },
  },

  xAxisTitleText: {
    type: 'text',
    label: 'X-Axis Title',
    default: '',
    group: 'axes',
    disabled: {
      showXAxis: false,
    },
  },

  xAxisTitlePosition: {
    type: 'text',
    label: 'X-Axis Title Position',
    options: ['inline in chart', 'horizontal centered'],
    default: 'inline in chart',
    group: 'axes',
    disabled: {
      showXAxis: false,
    },
  },

  showXTicks: {
    type: 'boolean',
    label: 'Show X-Axis Ticks',
    default: true,
    group: 'axes',
    disabled: {
      showXAxis: false,
    },
  },

  showXLabels: {
    type: 'boolean',
    label: 'Show X-Axis Labels',
    default: true,
    group: 'axes',
    disabled: {
      showXAxis: false,
    },
  },

  showYAxis: {
    type: 'boolean',
    label: 'Show Y-Axis',
    default: true,
    group: 'axes',
  },

  showYAxisLine: {
    type: 'boolean',
    label: 'Show Y-Axis Line',
    default: false,
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },

  yAxisTitleText: {
    type: 'text',
    label: 'Y-Axis Title',
    default: '',
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },

  showYTicks: {
    type: 'boolean',
    label: 'Show Y-Axis Ticks',
    default: false,
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },

  showYLabels: {
    type: 'boolean',
    label: 'Show Y-Axis Labels',
    default: true,
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },

  yAxisStart: {
    type: 'number',
    label: 'Y-Axis Start',
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },

  yAxisEnd: {
    type: 'number',
    label: 'Y-Axis End',
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },

  yAxisStep: {
    type: 'number',
    label: 'Y-Axis Step',
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },




  /* Grid section */

  gridX: {
    type: 'boolean',
    label: 'Show X-Axis Grid',
    default: false,
    group: 'grid',
  },

  gridY: {
    type: 'boolean',
    label: 'Show Y-Axis Grid',
    default: true,
    group: 'grid',
  },

  gridColorX: {
    type: 'color',
    label: 'X-Axis Grid line colour',
    default: '#e0e0e0',
    group: 'grid',
    disabled: {
      gridX: false,
    },
  },

  gridTypeX: {
    type: 'text',
    label: 'X-Axis Grid line type',
    options: ['solid', 'dashed', 'dotted'],
    default: 'solid',
    group: 'grid',
    disabled: {
      gridX: false,
    },
  },

  gridColorY: {
    type: 'color',
    label: 'Y-Axis Grid line colour',
    default: '#e0e0e0',
    group: 'grid',
    disabled: {
      gridY: false,
    },
  },

  gridTypeY: {
    type: 'text',
    label: 'Y-Axis Grid line type',
    options: ['solid', 'dashed', 'dotted'],
    default: 'solid',
    group: 'grid',
    disabled: {
      gridY: false,
    },
  },

  gridLineWidth: {
    type: 'number',
    label: 'Grid Line Width',
    default: 1,
    group: 'grid',
  },

  showLegend: {
    type: 'boolean',
    label: 'Show Legend',
    default: false,
    group: 'legend',
  },

  // legendPosition: {
  //   type: 'text',
  //   label: 'Legend Position',
  //   options: ['right', 'bottom', 'top', 'left'],
  //   default: 'right',
  //   group: 'legend',
  //   disabled: {
  //     showLegend: false,
  //   },
  // },

  legendWidth: {
    type: 'number',
    label: 'Legend Width',
    default: 200,
    group: 'legend',
    disabled: {
      showLegend: false,
    },
  },
}
