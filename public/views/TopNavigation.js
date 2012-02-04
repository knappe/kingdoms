app.views.TopNavigation = Ext.extend(Ext.Panel, {
  id: 'topNav',
  dock: 'top',
  isDroppable: false,
  initComponent: function() {
    var pressed = true;
    this.dockedItems = [
      {
        xtype: 'toolbar',
        title: 'Kingdoms',
        items: [
          {
            xtype: 'segmentedbutton',
            ui: 'dark',
            items: [
              {
                text: 'Pick Castle',
                id: 'pickCastle',
                ui: 'action',
                pressed: pressed,
                listeners: {
                  click: {
                    element: 'el',
                    fn: function() {
                      this.pressed = false;
                      Ext.getCmp('bottomCastleBar').show();
                      Ext.getCmp('bottomTileBar').hide();
                      Ext.getCmp('bottomCastleBar').doComponentLayout();
                    }
                  }
                }
              },
              {
                text: 'Pick Tile',
                id: 'pickTile',
                ui: 'action',
                pressed: !pressed,
                listeners: {
                  click: {
                    element: 'el',
                    fn: function() {
                      this.pressed = true;
                      Ext.getCmp('bottomCastleBar').hide();
                      Ext.getCmp('bottomTileBar').show();
                      Ext.getCmp('bottomTileBar').doComponentLayout();
                    }
                  }
                }
              }
            ]
          },
//          {
//            ui   : 'action',
//            text : 'Pick tile',
//            listeners: {
//              click:
//              {
//                element: 'el',
//                fn: function() {
//
//                }
//              }
//            }
//          },
//          {
//            ui        : 'action',
//            text      : 'Place Castle',
//            listeners : {
//              click : {
//                element: 'el',
//                fn: function() {
//                  var popup = new Ext.form.FormPanel({
//                    id: 'placeCastle',
//                    floating: true,
//                    hideOnMaskTap: false,
//                    modal: true,
//                    centered: true,
//                    width: 450,
//                    height: 375,
//                    styleHtmlContent: true,
//                    scroll: 'vertical',
//                    dockedItems: [
//                      {
//                        dock: 'top',
//                        xtype: 'toolbar',
//                        title: 'Select Castle'
//                      },
//                      {
//                        dock: 'bottom',
//                        xtype: 'toolbar',
//                        items: [
//                          {
//                            xtype: 'button',
//                            text: 'Cancel',
//                            listeners: {
//                              tap: {
//                                element: 'el',
//                                fn: function(){
//                                  // we destroy to avoid duplicate ids
//                                  popup.destroy();
//                                }
//                              }
//                            }
//                          }
//                        ]
//                      }
//                    ]
//                  });
//                  popup.show();
//                }
//              }
//            }
//          },
          {
            xtype: 'spacer'
          },
          {
            ui: 'action',
            text: 'New Game',
            listeners: {
              click:
              {
                element: 'el',
                fn: function(){
                  var popup = new Ext.form.FormPanel({
                    id: 'newGame',
                    floating: true,
                    hideOnMaskTap: false,
                    modal: true,
                    centered: true,
                    width: 450,
                    height: 375,
                    styleHtmlContent: true,
                    scroll: 'vertical',
                    dockedItems: [
                      {
                        dock: 'bottom',
                        xtype: 'toolbar',
                        items: [
                          {
                            xtype: 'button',
                            text: 'Cancel',
                            listeners: {
                              tap: {
                                element: 'el',
                                fn: function(){
                                  // we destroy to avoid duplicate ids
                                  popup.destroy();
                                }
                              }
                            }
                          },
                          {
                            xtype: 'spacer'
                          },
                          {
                            xtype: 'button',
                            text: 'Create',
                            listeners: {
                              tap: {
                                element: 'el',
                                fn: function() {
                                  console.log('started a new game');
                                  popup.destroy();
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        dock: 'top',
                        xtype: 'toolbar',
                        title: 'Start a New Game'
                      }
                    ],
                    items: [
                      {
                        xtype: 'fieldset',
                        items: [
                          {
                            xtype: 'selectfield',
                            name : 'numberPlayers',
                            label: 'Number of Players',
                            options: [
                              { text: '2', value: '2' },
                              { text: '3', value: '3' },
                              { text: '4', value: '4' }
                            ]
                          },
  /*                        {
                            xtype: 'selectfield',
                            name : 'playerColor',
                            label: 'Color',
                            options: [
                              { text: 'red',    value: 'red'  },
                              { text: 'green',  value: 'green'},
                              { text: 'blue',   value: 'blue' },
                              { text: 'white',  value: 'white'},
                            ]
                          },
  */
                          {
                            xtype: 'hiddenfield',
                            name: 'active',
                            value: true
                          }
                        ]
                      }
                    ],
                    listeners: {
                      beforedestroy: function() {
                      }
                    }
                  });
                  popup.show();
                }
              }
            }
          }
        ]
      }
    ];
    app.views.TopNavigation.superclass.initComponent.apply(this, arguments);
  }
});

var showLoginPanel = function() {

  app.checkLogin = new Ext.util.DelayedTask(function(){
    if(app.stores.Offline_Companies.getCount() <= 0)
    {
      app.checkLogin.delay(100);
    }
    else
    {
      console.log('showloginpanel');
      var users = [];
      // patch up data to pass in as an options
      Ext.each(app.stores.Offline_Companies.getById(app.stores.Offline_Companies.first().data.id).data.users, function(record) {
        users.push({text: record.username, value: record.username})
      });

      var login_panel = new Ext.form.FormPanel({
        id: 'login_panel',
        floating: true,
        hideOnMaskTap: false,
        centered: true,
        items: [
          {
            xtype: 'fieldset',
            title: 'Log in',
            html:' <div class="hidden red auth_text" style="padding-top: 5px;"> Unable to log in.  Please check your pin and try again. </div>',
            defaults: { labelWidth: '30%' },
            items: [
              {
                xtype: 'selectfield',
                options: users,
                id: 'users_list',
                label: 'User',
                name: 'username'
              },
              {
                xtype: 'passwordfield',
                id: 'password',
                label: 'Pin',
                name: 'pin'
              },
              {
                xtype: 'button',
                ui: 'action',
                text: 'Submit',
                width: 100,
                height: 40,
                listeners: {
                  tap: {
                    element: 'el',
                    fn: function() {
                      Ext.each(app.stores.Offline_Companies.getById(app.stores.Offline_Companies.first().data.id).data.users, function(record) {
                        var values = Ext.getCmp('login_panel').getValues();
                        if (record.username.toLowerCase() == values.username)
                        {
                          if (values.pin == record.pin)
                          {
                            Ext.getCmp('login_panel').destroy();
                            setUser(record);
                            return false; // Extjs break
                          }
                          else
                          {
                            Ext.select('.auth_text').removeCls('hidden');
                            Ext.getCmp('password').reset();
                          }
                        }
                      });
                    }
                  },
                  beforedestroy: function() {
                    Ext.getBody().unmask();
                  }
                }
              }
            ]
          }
        ]
      });
      login_panel.show();
      Ext.getBody().mask().addCls('black-background');
    }
  });
};
