var data = {
  "items": [
    {
      "text": "Active Jobs",
      "leaf": true
    },
    {
      'text': 'Completed Jobs',
      "leaf": true
    },
    {
      'text': 'Settings',
      "leaf": true
    }
  ]
};

app.stores.LeftNavigation = new Ext.data.TreeStore({
  model: 'LeftNavigation',
  autoLoad: true,
  root: data,
  proxy: {
    type: 'ajax',
    reader: {
      type: 'tree',
      root: 'items'
    }
  }
});


