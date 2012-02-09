app.stores.Tiles = new Ext.data.Store({
  model : 'Tile',
  id    : 'tile',
  data  : [
    {
      id     : 0,
      name   : 'positiveSix',
      value  : '6',
      text   : '+6',
      random : 1,
      status : 'store'
    },
    {
      id     : 1,
      name   : 'positiveSix_1',
      value  : '6',
      text   : '+6',
      random : 1,
      status : 'store'
    },
    {
      id     : 2,
      name   : 'positiveFive',
      value  : '5',
      text   : '+5',
      random : 1,
      status : 'store'
    },
    {
      id     : 3,
      name   : 'positiveFive_1',
      value  : '5',
      text   : '+5',
      random : 1,
      status : 'store'
    },
    {
      id     : 4,
      name   : 'positiveFour',
      value  : '4',
      text   : '+4',
      random : 1,
      status : 'store'
    },
    {
      id     : 5,
      name   : 'positiveFour_1',
      value  : '4',
      text   : '+4',
      random : 1,
      status : 'store'
    },
    {
      id     : 6,
      name   : 'positiveThree',
      value  : '3',
      text   : '+3',
      random : 1,
      status : 'store'
    },
    {
      id     : 7,
      name   : 'positiveThree_1',
      value  : '3',
      text   : '+3',
      random : 1,
      status : 'store'
    },
    {
      id     : 8,
      name   : 'positiveTwo',
      value  : '2',
      text   : '+2',
      random : 1,
      status : 'store'
    },
    {
      id     : 9,
      name   : 'positiveTwo_1',
      value  : '2',
      text   : '+2',
      random : 1,
      status : 'store'
    },
    {
      id     : 10,
      name   : 'positiveOne',
      value  : '1',
      text   : '+1',
      random : 1,
      status : 'store'
    },
    {
      id     : 11,
      name   : 'positiveOne_1',
      value  : 1,
      text   : '+1',
      random : 1,
      status : 'store'
    },
    {
      id     : 12,
      name   : 'negativeOne',
      value  : -1,
      text   : '-1',
      random : 1,
      status : 'store'
    },
    {
      id     : 13,
      name   : 'negativeTwo',
      value  : -2,
      text   : '-2',
      random : 1,
      status : 'store'
    },
    {
      id     : 14,
      name   : 'negativeThree',
      value  : -3,
      text   : '-3',
      random : 1,
      status : 'store'
    },
    {
      id     : 15,
      name   : 'negativeFour',
      value  : -4,
      text   : '-4',
      random : 1,
      status : 'store'
    },
    {
      id     : 16,
      name   : 'negativeFive',
      value  : -5,
      text   : '-5',
      random : 1,
      status : 'store'
    },
    {
      id     : 17,
      name   : 'negativeSix',
      value  : -6,
      text   : '-6',
      random : 1,
      status : 'store'
    },
    {
      id     : 18,
      name   : 'dragon',
      value  : 0,
      text   : 'Dragon',
      random : 1,
      status : 'store'
    },
    {
      id     : 19,
      name   : 'goldMine',
      value  : 0,
      text   : 'Gold Mine',
      random : 1,
      status : 'store'
    },
//    {
//      id     : 20,
//      name   : 'goldMine',
//      value  : 0,
//      text   : 'Gold Mine',
//      random : 1,
//      status : 'store'
//    },
    {
      id     : 21,
      name   : 'mountain',
      value  : 0,
      text   : 'Mountain',
      random : 1,
      status : 'store'
    },
    {
      id     : 22,
      name   : 'mountain_1',
      value  : 0,
      text   : 'Mountain',
      random : 1,
      status : 'store'
    }
  ],
  proxy: {
      type: 'localstorage',
      id: 'tiles'
  },
  autoLoad: true
});
