export const dimensions = [
  {
    id: 'x',
    name: 'X Axis',
    validTypes: ['number', 'date', 'string'],
    required: true,
  },

  {
    id: 'y',
    name: 'Y Axis',
    validTypes: ['number'],
    required: true,
    aggregation: true,
    aggregationDefault: 'sum',
  },

  {
    id: 'lines',
    name: 'Lines',
    validTypes: ['number', 'string', 'date'],
    required: false,
  },

  {
    id: 'color',
    name: 'Color',
    validTypes: ['number', 'string', 'date'],
    required: false,
    aggregation: true,
    aggregationDefault: {
      number: 'sum',
      string: 'csvDistinct',
      date: 'csvDistinct',
    },
  },

  // {
  //   id: 'series',
  //   name: 'Series',
  //   validTypes: ['number', 'string', 'date'],
  //   required: false,
  // },
]
