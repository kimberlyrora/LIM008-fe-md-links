"use strict";

var _viewController = require("./view-controller.js");

var _stats = require("./stats.js");

const mdLinks = require('./mdLinks');

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
});

module.exports = cliJs;