"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearTemplateDeArray = exports.readRoute = void 0;

var _pathAndFs = require("./pathAndFs.js");

/**
 * Función donde se arma condicionales para la lectura de ruta y aplicar primeras funciones 
 * @param {Ruta a la que se le aplicará las funciones isAbsolute y convertToAbsolute} ruta
 * @returns string: ruta absoluta 
 */
const readRoute = ruta => {
  let rutaAbs;

  if ((0, _pathAndFs.isAbsolute)(ruta)) {
    rutaAbs = ruta;
  } else {
    rutaAbs = (0, _pathAndFs.convertToAbsolute)(ruta);
  }

  return rutaAbs;
};
/**
 * Función que crea templates a partir del array pasado como parametro
 * @param {Array de objetos} data
 * @returns template con propiedades del parametro pasado 
 */


exports.readRoute = readRoute;

const crearTemplateDeArray = data => {
  let templateListOfLinks = '';
  let obj;
  data.forEach(link => {
    if (link.status === undefined && link.statusText === undefined) {
      obj = `
        ${link.file}, ${link.href}, ${link.text}
        `;
    } else {
      obj = `
        ${link.file}, ${link.href}, ${link.text}, ${link.status}, ${link.statusText}
        `;
    }

    templateListOfLinks += obj;
  });
  return templateListOfLinks;
};

exports.crearTemplateDeArray = crearTemplateDeArray;