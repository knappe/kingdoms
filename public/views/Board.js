app.views.Board = Ext.extend(Ext.Panel, {
  id: 'boardPanel',
  scroll: 'vertical',
//  layout: {type: 'hbox', align: 'stretch'},
  initComponent: function() {
    this.items = [
//      {
//        xtype: 'panel',
//        id   : 'notification',
//        html: '<div>spacerbox</div>'
//      },
      {
        xtype: 'panel',
        id: 'board',
        html: '<table>' +
                '<tr>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                '</tr>' +
                '<tr>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                '</tr>' +
                '<tr>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                '</tr>' +
                '<tr>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                '</tr>' +
                '<tr>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                  '<td></td>' +
                '</tr>'
      }
    ],
    app.views.Board.superclass.initComponent.apply(this, arguments);
  }
});