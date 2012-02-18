app.stores.Tiles = new Ext.data.Store({
  model : 'Tile',
  id    : 'tile',
  data  : [
    {
      id     : 0,
      name   : 'positiveSix',
      icon   : 'images/6.png',
      value  : '6',
      text   : '+6',
      random : 1,
      status : 'store'
    },
    {
      id     : 1,
      name   : 'positiveSix_1',
      icon   : 'images/6.png',
      value  : '6',
      text   : '+6',
      random : 1,
      status : 'store'
    },
    {
      id     : 2,
      name   : 'positiveFive',
      icon   : 'images/5.jpg',
      value  : '5',
      text   : '+5',
      random : 1,
      status : 'store'
    },
    {
      id     : 3,
      name   : 'positiveFive_1',
      icon   : 'images/5.jpg',
      value  : '5',
      text   : '+5',
      random : 1,
      status : 'store'
    },
    {
      id     : 4,
      name   : 'positiveFour',
      icon   : 'images/4.jpg',
      value  : '4',
      text   : '+4',
      random : 1,
      status : 'store'
    },
    {
      id     : 5,
      name   : 'positiveFour_1',
      icon   : 'images/4.jpg',
      value  : '4',
      text   : '+4',
      random : 1,
      status : 'store'
    },
    {
      id     : 6,
      name   : 'positiveThree',
      icon   : 'images/3.jpg',
      value  : '3',
      text   : '+3',
      random : 1,
      status : 'store'
    },
    {
      id     : 7,
      name   : 'positiveThree_1',
      icon   : 'images/3.jpg',
      value  : '3',
      text   : '+3',
      random : 1,
      status : 'store'
    },
    {
      id     : 8,
      name   : 'positiveTwo',
      icon   : 'images/2.jpg',
      value  : '2',
      text   : '+2',
      random : 1,
      status : 'store'
    },
    {
      id     : 9,
      name   : 'positiveTwo_1',
      icon   : 'images/2.jpg',
      value  : '2',
      text   : '+2',
      random : 1,
      status : 'store'
    },
    {
      id     : 10,
      name   : 'positiveOne',
      icon   : 'images/1.jpg',
      value  : '1',
      text   : '+1',
      random : 1,
      status : 'store'
    },
    {
      id     : 11,
      name   : 'positiveOne_1',
      icon   : 'images/1.jpg',
      value  : 1,
      text   : '+1',
      random : 1,
      status : 'store'
    },
    {
      id     : 12,
      name   : 'negativeOne',
      icon   : 'images/1.jpg',
      value  : -1,
      text   : '-1',
      random : 1,
      status : 'store'
    },
    {
      id     : 13,
      name   : 'negativeTwo',
      icon   : 'images/2.jpg',
      value  : -2,
      text   : '-2',
      random : 1,
      status : 'store'
    },
    {
      id     : 14,
      name   : 'negativeThree',
      icon   : 'images/3.jpg',
      value  : -3,
      text   : '-3',
      random : 1,
      status : 'store'
    },
    {
      id     : 15,
      name   : 'negativeFour',
      icon   : 'images/4.jpg',
      value  : -4,
      text   : '-4',
      random : 1,
      status : 'store'
    },
    {
      id     : 16,
      name   : 'negativeFive',
      icon   : 'images/5.jpg',
      value  : -5,
      text   : '-5',
      random : 1,
      status : 'store'
    },
    {
      id     : 17,
      name   : 'negativeSix',
      icon   : 'images/6.png',
      value  : -6,
      text   : '-6',
      random : 1,
      status : 'store'
    },
    {
      id     : 18,
      name   : 'dragon',
      icon   : 'images/dragon.png',
      value  : 0,
      text   : 'Dragon',
      random : 1,
      status : 'store'
    },
    {
      id     : 19,
      name   : 'goldMine',
      icon   : 'images/goldmine.png',
      value  : 0,
      text   : 'Gold<br/>Mine',
      random : 1,
      status : 'store'
    },
    {
      id     : 20,
      name   : 'mountain',
      icon   : 'images/mountain.svg',
      value  : 0,
      text   : 'Mountain',
      random : 1,
      status : 'store'
    },
    {
      id     : 21,
      name   : 'mountain_1',
      icon   : 'images/mountain.svg',
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
