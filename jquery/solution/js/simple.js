var updateTime = function(){
  $.get('http://time.hate.io', function(time){
    $('output').text(time);
  });
}

// This is an example of the concessions we have to make
// to scope.  If we didn't define interval out here,
// it would only exist inside the `start` function, `stop`
// wouldn't have a reference to it.

var interval = null;
var start = function(){
  interval = setInterval(updateTime, 1000);
}
var stop = function(){
  clearInterval(interval);
}

$('.start').click(start);
$('.stop').click(stop);

start()
