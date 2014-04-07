(function(){

  var ListItem = Backbone.Model.extend({
    urlRoot: "http://time.hate.io/todo/",

    defaults: function(){
      // We need a somewhat unique id, so we can refer to this item when deleting it
      return {
        id: Math.floor(Math.random() * 10000000000)
      }
    }
  });

  window.ListItem = ListItem;

})()
