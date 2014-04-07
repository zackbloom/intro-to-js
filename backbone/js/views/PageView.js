(function(){

  var PageView = Backbone.View.extend({

    render: function(){
      var addView = new AddItemView({
        collection: this.collection,
      });

      this.el.appendChild(addView.el);
      addView.render();

      var itemCountView = new ItemCountView({
        collection: this.collection
      });
      this.el.appendChild(itemCountView.el)
      itemCountView.render();

      var listView = new ListView({
        collection: this.collection,
      });

      this.el.appendChild(listView.el);
      listView.render();
    }

  });

  window.PageView = PageView;

})();
