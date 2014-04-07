(function(){

  var ListView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function(){
      this.collection.on('add remove reset', this.render, this);
    },

    render: function(){
      this.el.innerHTML = '';

      this.collection.each(this.add.bind(this));
    },

    add: function(model){
      var item = new ListItemView({
        model: model
      });

      this.el.appendChild(item.el);

      item.render();
    }
  });

  window.ListView = ListView;

})();
