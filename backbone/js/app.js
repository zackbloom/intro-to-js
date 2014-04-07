(function(){

  var list = new ListItems();
  list.fetch();

  var appView = new PageView({
    collection: list,
    el: document.querySelector('.todo-list')
  });

  appView.render();

})()
