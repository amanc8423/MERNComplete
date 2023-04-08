//node package manager - write node init in terminal
// package.json file be created , it contains all packages(libraries,projects,dependencies(external module)) installed using npm 
// package.json - it stores code for our dependencies
// we can download chalk module(used to design terminal) using npm i chalk or npm install chalk => check it on npm website
// chalk will get updated in package.json and package-lock.json will also get add it contains more info abt chalk

//const chalk = require('chalk'); // this gave error bec now chalk module has changed // go here and read first answer talking about pure esm(ecma script module)  - https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-module

 import chalk from 'chalk'
 // use "type":"module" inside package.json then delete bec it will cause error in other files

// const red = chalk.red; // another way then below
// console.log(chalk.blue("hello world"));
// console.log(red("hello world"));
// console.log(chalk.blue.underline.inverse("Hello World"));
// console.log(chalk.green.underline.inverse("SUCCESS"));
// console.log(chalk.red.underline.inverse("DANGER"));





// using validator chking form validation

//const validator = require('validator');
import validator from 'validator'
const res = validator.isEmail("aman@gm.co");
console.log(res); // invalid email therefore false
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));







