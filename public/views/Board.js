app.views.Board = Ext.extend(Ext.Panel, {
  id: 'board',
  initComponent: function() {
    this.items = [
      {
        xtype: 'panel',
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