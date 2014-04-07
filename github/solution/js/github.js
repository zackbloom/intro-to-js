var input = document.querySelector('.search');
var results = document.querySelector('.results');

input.addEventListener('keyup', function(){
  // This code runs when the user hits a key
  results.classList.add('loading');

  search(input.value, function(data){
    // This code runs when we have the results
    results.classList.remove('loading');
    
    show(data); 
  });
});
