app.views.BottomBar = Ext.extend(Ext.Panel, {
  id: 'bottomBar',
  dock: 'bottom',
  initComponent: function() {
    this.dockedItems = [
      {
        xtype: 'toolbar',
        hidden: false,
        id   : 'bottomCastleBar',
        title: 'Castle',
        items: [
          {
            ui  : 'action',
            cls : 'x-btn-text-icon',
            icon: 'images/castle-32.gif',
            text: '1x',
            badgeText: '4'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon',
            icon: 'images/castle-32.gif',
            text: '2x',
            badgeText: '3'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon',
            icon: 'images/castle-32.gif',
            text: '3x',
            badgeText: '2'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon',
            icon: 'images/castle-32.gif',
            text: '4x',
            badgeText: '1'
          }
        ]
      },
      {
        xtype: 'toolbar',
        id   : 'bottomTileBar',
        hidden: true,
        title: 'Tiles',
        items: [
          {
            ui  : 'action',
            cls : 'x-btn-text-icon',
            icon: 'images/6.png',
            text: '+6'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon',
            icon: 'images/6.png',
            text: '-6'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            text: 'Random Tile',
//            disabled: true,
            handler : function() {
              console.log('handled')
            }
          }
        ]
      }
    ],
    app.views.BottomBar.superclass.initComponent.apply(this, arguments);
  },
  generateRandomTile: function() {
    if (app.totalTiles <= 0)
      this.generateTiles();


  },
  generateTiles: function() {
    var randomNumbers = this.generateRandomNumbers();
    Ext.each(app.stores.Tiles.data.items, function(tile, index) {
      tile.set('random', randomNumbers[index]);
    });
    // sort the tiles by their random number
  },
  generateRandomNumbers: function() {
    var arr = [];
    while(arr.length < 8){
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

