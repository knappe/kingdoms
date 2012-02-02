app.views.BottomBar = Ext.extend(Ext.Panel, {
  id: 'bottomBar',
  dock: 'bottom',
  initComponent: function() {
    this.dockedItems = [
      {
        xtype: 'toolbar',
        hidden: false,
        id   : 'castleBar',
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
        id   : 'tileBar',
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
            disabled: true
          }
        ]
      }
    ],
    app.views.BottomBar.superclass.initComponent.apply(this, arguments);
  }
});

