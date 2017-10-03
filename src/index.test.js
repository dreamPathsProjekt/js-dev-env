//import Chai assertion lib with {expect} style
import {expect} from 'chai';

//import JSDOM
import jsdom from 'jsdom';
//interact with the filesystem with node.js
import fs from 'fs';

//arrow function not mandatory
describe('First Test', () => {
    it('should pass', () => {
        expect(true).to.equal(true); //trivial test to test the test!
    });
});

//use JSDOM to test DOM-elements
describe('index.html', () => {
    // if no argument passed to callback ,async test runs wrong => use done()
    it('should say hello', (done) => {
        //load document
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        //you can pass array of js files in the environment second param, to run with the html file (need to use isomorphic fetch()).
        jsdom.env(index, function(err, window) {
            // window represents browser window
            const h1 = window.document.getElementsByTagName('h1')[0]; //get the first h1 in the page
            expect(h1.innerHTML).to.equal("Hello World");
            done(); // for async error
            window.close(); //free memory
        });
    });
});
