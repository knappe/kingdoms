app.views.Viewport = Ext.extend(Ext.Panel, {
  style: { 'background-color': '#EEE' },
  id: 'mainPanel',
  fullscreen: true,
  layout: 'card',
  cardSwitchAnimation: 'slide',
  ui: 'action',
  initComponent: function() {
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
  }
});
