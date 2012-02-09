app.views.Viewport = Ext.extend(Ext.Panel, {
  style: { 'background-color': '#EEE' },
  id: 'mainPanel',
  fullscreen: true,
  layout: 'card',
  cardSwitchAnimation: 'slide',
  ui: 'action',
  initComponent: function() {
    this.generateTiles();
    Ext.apply(app.views, {
      TopNavigation : new app.views.TopNavigation(),
      BottomBar     : new app.views.BottomBar(),
      TopBar        : new app.views.TopBar(),
      RightBar      : new app.views.RightBar(),
      LeftBar       : new app.views.LeftBar(),
      Board         : new app.views.Board()
    });

    Ext.apply(this, {
      dockedItems: [ app.views.TopNavigation, app.views.BottomBar, app.views.TopBar],
      items: [ app.views.Board ]
    });

//    if (app.currentUser == undefined || app.currentUser == null)
//    {
//      showLoginPanel();
//    }
    
    app.views.Viewport.superclass.initComponent.apply(this, arguments);
  },
  generateTiles: function() {
    var randomNumbers = this.generateRandomNumbers();
    Ext.each(app.stores.Tiles.data.items, function(tile, index) {
      tile.set('random', randomNumbers[index]);
      tile.setDirty();
      app.stores.Tiles.sync();
    });

    // sort the tiles by their random number
    app.stores.Tiles.sort('random', 'ASC');
    app.totalTiles = app.stores.Tiles.data.items.length;
    console.log(app.stores.Tiles.data.items);
    console.log('tiles created and sorted');
  },
  generateRandomNumbers: function() {
    var arr = [];
    while(arr.length < 22){
      var randomnumber=Math.ceil(Math.random()*100);
      var found=false;
      for(var i=0;i<arr.length;i++){
        if(arr[i]==randomnumber){found=true;break}
      }
      if(!found)arr[arr.length]=randomnumber;
    }
    return arr;
  }
});
