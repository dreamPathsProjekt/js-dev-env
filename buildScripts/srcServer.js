//transpile build script: change to es6 imports

//var express = require('express'); //load express
import express from 'express';
//var path = require('path');
import path from 'path';
//var open = require('open'); //open site in browser
import open from 'open';

import webpack from 'webpack';
import config from '../webpack.config.dev';

//transpile build script: change var to const
const port = 3000;
const app = express(); //create instance of express

//set webpack compiler
const compiler = webpack(config);

//webpack setup in express
//express use webpack-dev-middleware ,pass compiler, define noInfo and public path
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));

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
