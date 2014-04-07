var last = +new Date;
var time = null;

tick = function(){
  var diff = new Date - last;
  last = +new Date;

  if (time){
    time += diff;

    $('output').text(new Date(time).toString());
  }

  requestAnimationFrame(tick);
}

sync = function(){
  $.get('http://time.hate.io', function(serverTime){
      time = Date.parse(serverTime);

      setTimeout(sync, 10000);
  });
}

tick();
sync();
