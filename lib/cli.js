#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cliJs = void 0;

var _viewController = require("./controller/view-controller.js");

var _stats = require("./controller/stats.js");

// import {mdLinks} from './controller/mdLinks.js';
const mdLinks = require('./controller/mdLinks');

const [,, ...args] = process.argv;

const cliJs = args => new Promise(resolve => {
  if (args[1] === '--validate' && args[2] === '--stats') {
    mdLinks(args[0], {
      validate: true
    }).then(resp => resolve((0, _stats.stats)(resp, 'validate')));
  } else if (args[1] === '--validate') {
    mdLinks(args[0], {
      validate: true
    }).then(resp => resolve((0, _viewController.crearTemplateDeArray)(resp)));
  } else if (args[1] === '--stats') {
    mdLinks(args[0], {
      validate: false
    }).then(resp => resolve((0, _stats.stats)(resp)));
  } else if (args[0] === undefined || '') {
    resolve('Ingrese una ruta válida.');
  } else {
    mdLinks(args[0], {
      validate: false
    }).then(resp => resolve((0, _viewController.crearTemplateDeArray)(resp)));
  }
}); // cliJs(args).then(resp => console.log(resp));


exports.cliJs = cliJs;