// Get a reference to the sidebar *
// When scrolls *
//   Figure out how far *
//   Compare to height of navbar *
//   Make fixed if necessary

(function(){

  var sidebar = document.querySelector('.right');
  var i = 5;

  document.addEventListener('scroll', function(){
    // SIDEBAR

    if (document.body.scrollTop > 60){
      sidebar.style.position = 'fixed';
      sidebar.style.top = 0;
    } else {
      sidebar.style.position = '';
    }
  });

  // SIDEBAR
  //
  window.sidebar = sidebar;

})()

// NO SIDEBAR
