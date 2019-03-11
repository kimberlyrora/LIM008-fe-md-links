"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _obtainingLinks = require("./obtainingLinks.js");

var _recursion = require("./recursion.js");

var _stats = require("./stats.js");

var _validate = require("./validate.js");

var _viewController = require("./view-controller.js");

/**
 * Función que entrega resultados varaiando según el parametro obj
 * @param {Ruta de la cual se extraeran todos los links de los archivos .md que se encuentren} route 
 * @param {validate&&stats||validate||stats||undefined} obj
 * @returns undefined: string de cada link con sus propiedades file, text y href
 *          validate: string de cada link con sus propiedades file, text, href, status y statusText
 *          stats: string con calculo de links totales y únicos
 *          validate&&stats:  string con calculo de links totales, únicos y rotos
 */
const mdLinks = (route, objeto) => new Promise((resolve, reject) => {
  const absoluteRoute = (0, _viewController.readRoute)(route);
  const arrayArchivosMd = (0, _recursion.readDirectorySync)(absoluteRoute);
  let arrayLink = (0, _obtainingLinks.getLinks)(arrayArchivosMd);

  if (objeto.validate && objeto.stats) {
    (0, _validate.validLinks)(arrayLink).then(response => {
      const resultStats = (0, _stats.stats)(response, 'validate');
      return resultStats;
    }).then(answer => resolve(answer));
  } else if (objeto.stats) {
    resolve((0, _stats.stats)(arrayLink));
  } else if (objeto.validate) {
    (0, _validate.validLinks)(arrayLink).then(objeto => {
      const resultValidate = (0, _viewController.crearTemplateDeArray)(objeto);
      return resultValidate;
    }).then(response => resolve(response));
  } else {
    resolve((0, _viewController.crearTemplateDeArray)(arrayLink));
  }
});

exports.mdLinks = mdLinks;