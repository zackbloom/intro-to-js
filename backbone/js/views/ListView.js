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

      var _this = this;

      item.on('edit', function(){
        editView = new ListItemEditView({
          model: model,
          el: item.el
        });

        editView.render();

        editView.on('doneEditing', _this.render, _this);
      });

      this.el.appendChild(item.el);

      item.render();
    }
  });

  window.ListView = ListView;

})();
