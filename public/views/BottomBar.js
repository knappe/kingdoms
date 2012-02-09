app.views.BottomBar = Ext.extend(Ext.Panel, {
  id: 'bottomBar',
  dock: 'bottom',
  initComponent: function() {
    var me = this;
    me.dockedItems = [
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
        scroll: 'horizontal',
        hidden: true,
        title: 'Tiles',
        items: [
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            itemId: 'randomTileButton',
            text: 'Random Tile',
            handler : function() {
              var tile = me.generateRandomTile();
              console.log(tile);
              me.updateTile(tile);
            }
          }
        ]
      }
    ],
    app.views.BottomBar.superclass.initComponent.apply(me, arguments);
  },
  generateRandomTile: function() {
    var tile = app.stores.Tiles.first();
    tile.set('status', 'hand');
    app.stores.Tiles.filter('status', 'store');
    app.totalTiles--;
    console.log('app.totalTiles', app.totalTiles);
    if (app.totalTiles <= 0)
    {
      console.log('no more tiles');

      var button = app.views.BottomBar.getDockedComponent('bottomTileBar').getComponent('randomTileButton');
      if (button)
        button.disable();
      else
        console.log('cant find button');
    }
    return tile;
  },
  updateTile: function(tile) {
    app.views.BottomBar.getDockedComponent('bottomTileBar').insert(0, {
      ui      : 'action',
      itemId  : tile.get('name'),
      cls     : 'x-btn-text-icon',
      icon    : tile.get('icon'),
      text    : tile.get('text')
    });
    app.views.BottomBar.getDockedComponent('bottomTileBar').doLayout();
  }
});

