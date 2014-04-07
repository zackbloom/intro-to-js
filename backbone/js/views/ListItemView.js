(function(){

  var ListItemView = Backbone.View.extend({
    tagName: 'li',

    initialize: function(){
      this.model.on('change', this.render, this);
    },

    render: function(){
      this.el.innerHTML = this.model.get('title');
    }
  });

  window.ListItemView = ListItemView;

})();
