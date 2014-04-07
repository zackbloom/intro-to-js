(function(){

  // How to edit
  //
  // When they click on the item
  //    Turns into a text field
  //

  var ListItemView = Backbone.View.extend({
    tagName: 'li',

    events: {
      "change input[type=checkbox]": 'handleCheckboxChange',
      "click button": 'handleDeleteClick',
      "click label": 'handleLabelClick'
    },

    initialize: function(){
      this.model.on('change', this.render, this);
    },

    render: function(){
      this.el.innerHTML = "<input type=checkbox>" + 
        "<button>Delete</button>" +
        "<label>" + this.model.get('title') + "</label>";

      if (this.model.get('done'))
        this.el.querySelector('input[type=checkbox]').checked = true;
    },

    handleCheckboxChange: function(){
      var value = this.el.querySelector('input[type=checkbox]') 

      this.model.set({
        done: value.checked
      });

      this.model.save();
    },

    handleDeleteClick: function(){
      this.model.destroy();
    },

    handleLabelClick: function(){
      this.trigger('edit', this);
    }
  });

  window.ListItemView = ListItemView;

})();
