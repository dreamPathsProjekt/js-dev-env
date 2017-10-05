//transpile build script: change to es6 imports

//var express = require('express'); //load express
import express from 'express';
//var path = require('path');
import path from 'path';
//var open = require('open'); //open site in browser
import open from 'open';
import compression from 'compression';

// Remove any calls and imports to webpack in production
// import webpack from 'webpack';
// import config from '../webpack.config.dev';

//transpile build script: change var to const
const port = 3000;
const app = express(); //create instance of express

/*========= Production Changes ========*/
// enable gzip compression in production
app.use(compression());
// serve static file in dist dir
app.use(express.static('dist'));



//set webpack compiler
// const compiler = webpack(config);

//webpack setup in express
//express use webpack-dev-middleware ,pass compiler, define noInfo and public path
// app.use(require('webpack-dev-middleware')(compiler,{
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));

//join base dir with dist src directory
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../dist/index.html'));
});

// create single endpoint - obsolete for deployment on heroku
/* app.get('/users', function(request, response) {
    // Hard coded
    response.json([
        {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
        {"id": 2, "firstName": "Foo", "lastName": "Bar", "email": "foobar@gmail.com"},
        {"id": 3, "firstName": "Dream", "lastName": "Paths", "email":"dream.paths.projekt@gmail.com"}
    ]);
});
 */
//set express to listen to :3000 and attach error handling
/* eslint-disable no-console */
app.listen(port, function(err){
    if(err) {
        console.log(err); //temporary
    }
    else {
        open('http://localhost:' + port); //hardcoded
    }
});
