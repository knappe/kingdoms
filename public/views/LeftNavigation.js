app.views.LeftNavigation = Ext.extend(Ext.NestedList, {
  id: 'leftNav',
  dock: 'left',
  height: '100%',
  width: 200,
  layout: 'card',
  hidden: false,
  displayField: 'text',
  updateTitleText: false,
  store: app.stores.LeftNavigation,
  getDetailCard: function(item, parent) {
    var itemData = item.attributes.record.data;
    if (!parent.isRoot)
    {
      var parentData = parent.attributes.record.data;
      this.backButton.setText(parentData.text);
    }
    // update title
    Ext.select('#TopNav .x-toolbar-title').elements[0].innerHTML='<div id="TopNav">' + itemData.text + '</div>';
    // update panel
    app.views.viewport.remove('displayPanel');
    app.views.viewport.add(new app.views[itemData.text.replace(/ /g, '')]);
    app.views.viewport.doLayout();
  },

  initComponent: function() {
      app.views.LeftNavigation.superclass.initComponent.apply(this, arguments);
  }
});
