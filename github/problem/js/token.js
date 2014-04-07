// This is all just for the auth-token-in-url bit
var AUTH_TOKEN = document.location.hash.substr(1);

if (!AUTH_TOKEN)
    document.location = document.location + '#AUTH_TOKEN_HERE'

window.addEventListener('hashchange', function(){
    document.location.reload();
})
