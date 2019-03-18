#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cliJs = void 0;

var _viewController = require("./controller/view-controller.js");

var _stats = require("./controller/stats.js");

var _mdLinks = require("./controller/mdLinks.js");

const [,, ...args] = process.argv;

const cliJs = args => new Promise(resolve => {
  if (args[1] === '--validate' && args[2] === '--stats') {
    (0, _mdLinks.mdLinks)(args[0], {
      validate: true
    }).then(resp => resolve((0, _stats.stats)(resp, 'validate')));
  } else if (args[1] === '--validate') {
    (0, _mdLinks.mdLinks)(args[0], {
      validate: true
    }).then(resp => resolve((0, _viewController.crearTemplateDeArray)(resp)));
  } else if (args[1] === '--stats') {
    (0, _mdLinks.mdLinks)(args[0], {
      validate: false
    }).then(resp => resolve((0, _stats.stats)(resp)));
  } else if (args[0] === undefined || '') {
    resolve('Ingrese una ruta válida.');
  } else {
    (0, _mdLinks.mdLinks)(args[0], {
      validate: false
    }).then(resp => resolve((0, _viewController.crearTemplateDeArray)(resp)));
  }
});

exports.cliJs = cliJs;
cliJs(args).then(resp => console.log(resp));