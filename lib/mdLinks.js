"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _obtainingLinks = require("./obtainingLinks.js");

var _recursion = require("./recursion");

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
const mdLinks = (route, obj) => new Promise((resolve, reject) => {
  const absRoute = (0, _viewController.readRoute)(route);
  const arrArchivosMd = (0, _recursion.readDirectorySync)(absRoute);
  let arrLink = (0, _obtainingLinks.getLinks)(arrArchivosMd);

  if (obj.validate && obj.status) {
    (0, _validate.validLinks)(arrLink).then(res => {
      const resuSts = (0, _stats.stats)(res, 'validate');
      return resuSts;
    }).then(res => resolve(res));
  } else if (obj.status) {
    resolve((0, _stats.stats)(arrLink));
  } else if (obj.validate) {
    (0, _validate.validLinks)(arrLink).then(obj => {
      const resValid = (0, _viewController.crearTemplateDeArray)(obj);
      return resValid;
    }).then(res => resolve(res));
  } else {
    resolve((0, _viewController.crearTemplateDeArray)(arrLink));
  }
}); // mdLinks('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md', options).then(resp => console.log(resp));


exports.mdLinks = mdLinks;