//transpile build script: change to es6 imports

//var express = require('express'); //load express
import express from 'express';
//var path = require('path');
import path from 'path';
//var open = require('open'); //open site in browser
import open from 'open';

//transpile build scrip: change var to const
const port = 3000;
const app = express(); //create instance of express

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
