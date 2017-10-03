// Not transpiled so use ES5 - CommonJS

// Register Babel to transpile before tests run
require('babel-register')();

// Disable webpack features that cannot be parsed by Mocha
require.extensions['.css'] = function() {};
