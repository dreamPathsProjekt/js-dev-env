var express = require('express'); //load express
var path = require('path');
var open = require('open'); //open site in browser

var port = 3000;
var app = express(); //create instance of express

//join base dir with static src directory
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../src/index.html'));
});

//set express to listen to :3000 and attach error handling
app.listen(port, function(err){
    if(err) {
        console.log(err); //temporary
    }
    else {
        open('http://localhost:' + port); //hardcoded
    }
});
