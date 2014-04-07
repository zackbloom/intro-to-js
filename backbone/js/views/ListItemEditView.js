(function(){

  var ListItemEditView = ListItemView.extend({

    events: {
      'change input[type=text]': 'handleChange',
      'submit form': 'handleSubmit'
    },

    render: function(){
      this.el.innerHTML = "<input type=checkbox>" + 
        "<button>Delete</button>" +
        "<form><input value='" + this.model.get('title') + "' type=text></form>";

      if (this.model.get('done'))
        this.el.querySelector('input[type=checkbox]').checked = true;
    },

    handleChange: function(){
      var val = this.el.querySelector('input[type=text]').value;

      this.model.set({
        title: val
      })

      this.model.save()
    },

    handleSubmit: function(e){
      e.preventDefault();

      this.trigger('doneEditing');
    }
  });

  window.ListItemEditView = ListItemEditView;

})();
