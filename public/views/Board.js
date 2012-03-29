app.views.Board = Ext.extend(Ext.Panel, {
  id: 'boardPanel',
  scroll: 'vertical',
  listeners : {
    afterrender: function() {

    }
  },
  initComponent: function() {
    this.items = [
      {
        xtype: 'panel',
        id: 'board',

//        items: this.generateTileBoard(4,5)
        items: [
          {
            html: this.generateBoard(4, 5)
          }
        ]
      }
    ];
    app.views.Board.superclass.initComponent.apply(this, arguments);
  },
  generateTileBoard : function(length, width) {
    var board = [];
    for(i=0; i<=length; i++) {
      row = [];
      for(j=0; j<=width; j++) {
        row.push(Ext.create({xtype:'tile', i: 0, j: 0}))
      }
      board.push(row)
    }
    console.log(board);
    return board;
  },
  generateBoard : function(length, width) {
    var board = '<table>';
    for(i=0; i<=length; i++) {
      board = board + '<tr>'
      for(j=0; j<=width; j++) {
        board = board + '<td id=' + i + '-' + j + '></td>'
      }
      board = board + '</tr>'
    }
    board = board + '</table>';
    return board
  }
});