(function(){

  var ListItems = Backbone.Collection.extend({
    model: ListItem,
    url: "http://time.hate.io/todos/"
  });

  window.ListItems = ListItems;

})()
