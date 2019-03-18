#!/usr/bin/env node
import { crearTemplateDeArray } from './controller/view-controller.js';
import { stats } from './controller/stats.js';
import {mdLinks} from './controller/mdLinks.js';
const [,, ...args] = process.argv;

export const cliJsFunc = (args) => {
  if (args[1] === '--validate' && args[2] === '--stats') {
    mdLinks(args[0], { validate: true }).then(resp => console.log(stats(resp, 'validate')));
  } else if (args[1] === '--validate') {
    mdLinks(args[0], { validate: true }).then(resp => console.log(crearTemplateDeArray(resp)));
  } else if (args[1] === '--stats') {
    mdLinks(args[0], { validate: false }).then(resp => console.log(stats(resp)));
  } else {
    mdLinks(args[0], { validate: false }).then(resp => console.log(crearTemplateDeArray(resp)));
  }
};