var last = +new Date;
var time = null;

var running = true;

var tick = function(){
  var diff = new Date - last;
  last = +new Date;

  if (time){
    time += diff;

    $('output').text(new Date(time).toString());
  }

  if (running)
    requestAnimationFrame(tick);
}

var sync = function(){
  $.get('http://time.hate.io', function(serverTime){
      time = Date.parse(serverTime);

      setTimeout(sync, 10000);
  });
}

var start = function(){
  running = true;

  tick();
}
var stop = function(){
  running = false;
}

$('.start').click(start);
$('.stop').click(stop);

start();
sync();
