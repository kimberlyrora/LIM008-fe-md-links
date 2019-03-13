#!/usr/bin/env node
"use strict";

var _viewController = require("./controller/view-controller.js");

var _stats = require("./controller/stats.js");

var _mdLinks = require("./controller/mdLinks.js");

const [,, ...args] = process.argv;

if (args[1] === '--validate' && args[2] === '--stats') {
  (0, _mdLinks.mdLinks)(args[0], {
    validate: true
  }).then(resp => console.log((0, _stats.stats)(resp, 'validate')));
} else if (args[1] === '--validate') {
  (0, _mdLinks.mdLinks)(args[0], {
    validate: true
  }).then(resp => console.log((0, _viewController.crearTemplateDeArray)(resp)));
} else if (args[1] === '--stats') {
  (0, _mdLinks.mdLinks)(args[0], {
    validate: false
  }).then(resp => console.log((0, _stats.stats)(resp)));
} else {
  (0, _mdLinks.mdLinks)(args[0], {
    validate: false
  }).then(resp => console.log((0, _viewController.crearTemplateDeArray)(resp)));
}