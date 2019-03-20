"use strict";

var _obtainingLinks = require("./obtainingLinks.js");

var _recursion = require("./recursion.js");

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
const mdLinks = (route, objeto) => {
  console.log(objeto);
  new Promise(resolve => {
    const absoluteRoute = (0, _viewController.readRoute)(route);
    const arrayArchivosMd = (0, _recursion.readDirectorySync)(absoluteRoute);
    let arrayLink = (0, _obtainingLinks.getLinks)(arrayArchivosMd);

    if (objeto.validate && objeto) {
      (0, _validate.validLinks)(arrayLink).then(objeto => resolve(objeto));
    } else {
      if (objeto) {
        resolve(arrayLink);
      }
    }
  });
};

mdLinks('C:\Users\Laboratoria\Desktop\Markdown\LIM008-fe-md-links\directoryForTest\FILEMD.md', {
  validate: false
}).then(resp => console.log(resp));
module.exports = mdLinks;