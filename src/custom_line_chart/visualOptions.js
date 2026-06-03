export const visualOptions = {
  titleText: {
    type: 'text',
    label: 'Title Text',
    default: 'Vienna Population',
    group: 'chart',
  },

  titlePosition: {
    type: 'text',
    label: 'Title Position',
    options: ['left', 'center', 'right'],
    default: 'left',
    group: 'chart',
  },

  chartType: {
    type: 'text',
    label: 'Chart Variation',
    options: ['line', 'step', 'bump'],
    default: 'line',
    group: 'chart',
  },

  dotsRadius: {
    type: 'number',
    label: 'Dots radius',
    default: 0,
    group: 'chart',
  },

  showSketchy: {
    type: 'boolean',
    label: 'Hand-drawn style',
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

  showXAxis: {
    type: 'boolean',
    label: 'Show X Axis',
    default: true,
    group: 'axes',
  },

  showXAxisLine: {
    type: 'boolean',
    label: 'Show Base X Axis Line',
    default: true,
    group: 'axes',
    disabled: {
      showXAxis: false,
    },
  },

  showXTicks: {
    type: 'boolean',
    label: 'Show X Tick Marks',
    default: true,
    group: 'axes',
    disabled: {
      showXAxis: false,
    },
  },

  showYAxis: {
    type: 'boolean',
    label: 'Show Y Axis',
    default: true,
    group: 'axes',
  },

  showYAxisLine: {
    type: 'boolean',
    label: 'Show Base Y Axis Line',
    default: false,
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },

  showYTicks: {
    type: 'boolean',
    label: 'Show Y Tick Marks',
    default: false,
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },

  showLabels: {
    type: 'boolean',
    label: 'Show Axis Labels',
    default: true,
    group: 'axes',
  },

  yAxisStart: {
    type: 'number',
    label: 'Y Axis Start',
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },

  yAxisEnd: {
    type: 'number',
    label: 'Y Axis End',
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },

  yAxisStep: {
    type: 'number',
    label: 'Y Axis Step',
    group: 'axes',
    disabled: {
      showYAxis: false,
    },
  },

  padYScale: {
    type: 'boolean',
    label: 'Upper & lower padding',
    default: true,
    group: 'axes',
  },

  gridX: {
    type: 'boolean',
    label: 'Show X Grid',
    default: false,
    group: 'grid',
  },

  gridY: {
    type: 'boolean',
    label: 'Show Y Grid',
    default: true,
    group: 'grid',
  },

  gridColor: {
    type: 'color',
    label: 'Grid line color',
    default: '#e0e0e0',
    group: 'grid',
  },

  gridOpacity: {
    type: 'number',
    label: 'Grid line opacity',
    default: 0.6,
    group: 'grid',
  },
}
