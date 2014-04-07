(function(){

  var AddItemView = Backbone.View.extend({
    events: {
      'submit form': 'handleSubmit'
    },

    render: function(){
      this.el.innerHTML = '<form><input placeholder="Add item..."></form>'
    },

    handleSubmit: function(e){
      e.preventDefault();

      var input = this.el.querySelector('input');

      var title = input.value;
      input.value = ''

      var item = new ListItem({title: title});

      this.collection.add(item);

      item.save();
    }
  });

  window.AddItemView = AddItemView;

})();


    
