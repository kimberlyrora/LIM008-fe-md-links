#!/usr/bin/env node
import {mdLinks} from './controller/mdLinks.js';
const [,, ...args] = process.argv;
const options = {
  validate: false,
  status: false
};
// console.log(`Hello World ${args}`);
const route = args[0];
if (args.length === 1) {
  mdLinks(route, options).then(resp => console.log(resp));
}
