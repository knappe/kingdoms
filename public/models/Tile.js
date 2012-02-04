app.models.Tile = Ext.regModel('Tile', {
  fields: [
    { name: 'id',     type: 'int' },
    { name: 'text',   type: 'string' },
    { name: 'value',  type: 'int' },
    { name: 'random', type: 'int' },
    { name: 'status', type: 'string' }
  ]
});