// greet_xola.js
import chalk from 'chalk';  // You can now use 'import'
import greet from './greet.js';

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage);
