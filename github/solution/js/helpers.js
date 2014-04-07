// This is the function which makes the actual request.
var search = function(query, success){
    req = new XMLHttpRequest();
    req.open('GET', 'https://api.github.com/search/repositories?access_token=' + AUTH_TOKEN + '&q=' + encodeURIComponent(query), true);

    req.addEventListener('load', function(){
        success(JSON.parse(req.response).items);
    });

    req.send();
}

var show = function(repos){
    var results = document.querySelector('.results');

    // Clear out any old results
    results.innerHTML = '';

    for (var i=0; i < repos.length; i++){
        // Add each result
        results.innerHTML += "<li><img src='" + repos[i].owner.avatar_url + "'><span>" + repos[i].full_name + "</span>"
    }
}
