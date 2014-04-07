var updateTime = function(){
  $.get('http://time.hate.io', function(time){
    $('output').text(time);
  });
}

setInterval(updateTime, 1000);
