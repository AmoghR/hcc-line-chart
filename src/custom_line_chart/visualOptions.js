export const visualOptions = {
  // one object for each visual option
  // example option
  // optionID: {                // unique id, used in the render.js
  //   type: 'number',          // type of input. Can be: number, text, boolean, colorScale
  //   label: 'Option label',   // the label displayed in the interface
  //   default: 20,             // default value
  //   group: 'Panel name',        // in which panel of the interface the option will be displayed
  // },

  dotsRadius: {
    type: 'number',
    label: 'Dots radius',
    default: 5,
    group: 'chart',
  },

  showSketchy: {
    type: 'boolean',
    label: 'Hand-drawn / Sketchy Style',
    default: false, 
    group: 'artistic' 
  },

  roughness: {
    type: 'number',
    label: 'Sketchiness (Roughness)',
    default: 1,
    group: 'artistic',
  },

  showXAxis: {
    type: 'boolean',
    label: 'Show X Axis',
    default: true,
    group: 'axes',
  },

  showYAxis: {
    type: 'boolean',
    label: 'Show Y Axis',
    default: true,
    group: 'axes',
  },

  gridMode: {
    type: 'text',
    label: 'Grid Lines',
    group: 'axes',
    options: ['none', 'both', 'x', 'y'],
    default: 'x',
  },

  showAxisLines: {
    type: 'boolean',
    label: 'Show Base Axis Lines',
    default: true,
    group: 'axes',
  },

  showTicks: {
    type: 'boolean',
    label: 'Show Tick Marks',
    default: true,
    group: 'axes',
  },

  showLabels: {
    type: 'boolean',
    label: 'Show Axis Labels',
    default: true,
    group: 'axes',
  },
}
