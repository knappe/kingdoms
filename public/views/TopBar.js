app.views.TopBar = Ext.extend(Ext.Panel, {
  id: 'topBar',
  dock: 'top',
  layout: { type: 'hbox', align: 'stretch'},
  initComponent: function() {
    this.items = [
      {
        xtype: 'toolbar',
        id   : 'topCastleBar',
        isDroppable: false,
        ui : 'orange',  // not orange but removes styling
        draggable: true,
        items: [
          {
            ui  : 'action',
            draggable: true,
            cls : 'x-btn-text-icon green',
            icon: 'images/castle-32.gif',
            text: '1x',
            badgeText: '4'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon green',
            icon: 'images/castle-32.gif',
            text: '2x',
            badgeText: '3'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon green',
            icon: 'images/castle-32.gif',
            text: '3x',
            badgeText: '2'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon green',
            icon: 'images/castle-32.gif',
            text: '4x',
            badgeText: '1'
          }
        ]
      },
      {
        xtype: 'spacer'
      },
      {
        xtype: 'toolbar',
        draggable: true,
        ui : 'orange',  // not orange but removes styling
        id   : 'rightCastleBar',
        items: [
          {
            ui  : 'action',
            cls : 'x-btn-text-icon blue',
            icon: 'images/castle-32.gif',
            text: '1x',
            badgeText: '4'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon blue',
            icon: 'images/castle-32.gif',
            text: '2x',
            badgeText: '3'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon blue',
            icon: 'images/castle-32.gif',
            text: '3x',
            badgeText: '2'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon blue',
            icon: 'images/castle-32.gif',
            text: '4x',
            badgeText: '1'
          }
        ]
      },
      {
        xtype: 'spacer'
      },
      {
        xtype: 'toolbar',
        draggable: true,
        ui : 'orange',  // not orange but removes styling
        id   : 'leftCastleBar',
        items: [
          {
            ui  : 'action',
            cls : 'x-btn-text-icon red',
            icon: 'images/castle-32.gif',
            text: '1x',
            badgeText: '4'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon red',
            icon: 'images/castle-32.gif',
            text: '2x',
            badgeText: '3'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon red',
            icon: 'images/castle-32.gif',
            text: '3x',
            badgeText: '2'
          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            cls : 'x-btn-text-icon red',
            icon: 'images/castle-32.gif',
            text: '4x',
            badgeText: '1'
          }
        ]
      }
    ],
    app.views.TopBar.superclass.initComponent.apply(this, arguments);
  }
});