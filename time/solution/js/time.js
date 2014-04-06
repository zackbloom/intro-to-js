(function(){

  var updateTime = function(){
    document.querySelector('output').textContent = (new Date).toString();
  }

  setInterval(updateTime, 1000);
})();
