(function(){

  window.list = new ListItems(); // Collection of list items
  list.fetch(); // Get from server

  var appView = new PageView({
    collection: list,
    el: document.querySelector('.todo-list')
  });

  appView.render();

})()
