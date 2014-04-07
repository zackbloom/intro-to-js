(function(){

  // Get the current time *
  // Put it on the screen *
  // Make it update

  var update = function(){
    var date = (new Date).toString();
    var output = document.querySelector('output');
    output.textContent = date;
  }

  setInterval(update, 1000);

})();
