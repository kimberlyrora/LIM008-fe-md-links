#!/usr/bin/env node
import {mdLinks} from './controller/mdLinks.js';
const [,, ...args] = process.argv;
if (args[1] === '--validate' && args[2] === '--stats') {
  mdLinks(args[0], { validate: true, stats: true }).then(resp => console.log(resp));
} else if (args[1] === '--validate') {
  mdLinks(args[0], { validate: true, stats: false }).then(resp => console.log(resp));
} else if (args[1] === '--stats') {
  mdLinks(args[0], { validate: false, stats: true }).then(resp => console.log(resp));
} else {
  mdLinks(args[0], { validate: false, stats: false }).then(resp => console.log(resp));
}