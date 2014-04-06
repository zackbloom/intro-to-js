// This solution uses classList, which is IE10+
// Use jQuery, or take a look at http://youmightnotneedjquery.com/#add_class
// for compatibility options.

(function(){

  var right = document.querySelector('.right');
  var top = document.querySelector('.top');

  var check = function(){
    if (document.body.scrollTop > top.clientHeight)
      right.classList.add('off-screen');
    else
      right.classList.remove('off-screen');
  };

  document.addEventListener('scroll', check);
})();
