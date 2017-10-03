import './index.css';
import numeral from 'numeral';

const value = numeral(1000).format('$0,0.00');
//use es6 backticks ` to parse variable placeholders inside script
//debugger;
console.log(`A handy library to display prices like ${value} `); //eslint-disable-line no-console
