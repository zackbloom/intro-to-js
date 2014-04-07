(function(){

  var ItemCountView = Backbone.View.extend({
    initialize: function(){
      this.collection.on('add remove reset', this.render, this);
    },

    render: function(){
      this.el.innerHTML = this.collection.models.length;
    }
  });

  window.ItemCountView = ItemCountView;

})();
