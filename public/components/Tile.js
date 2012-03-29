Ext.ns('app.components');

app.components.Tile = Ext.extend(Ext.Panel,{
  cls: 'tile',
  i: undefined,
  j: undefined,
  listeners: {
    click: {
      element: 'el',
      fn: function() {
        alert('i was clicked');
      }
    }
  },
  initComponent  : function() {
      app.components.Tile.superclass.initComponent.call(this);
  }

});
Ext.reg('tile', app.components.Tile);