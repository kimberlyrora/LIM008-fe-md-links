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
const readRoute = ruta => (0, _pathAndFs.convertToAbsolute)(ruta);

exports.readRoute = readRoute;
console.log(readRoute('..\\LIM008-fe-md-links\\directoryForTest'));
/**
 * Función que crea templates a partir del array pasado como parametro
 * @param {Array de objetos} data
 * @returns template con propiedades del parametro pasado 
 */

const crearTemplateDeArray = data => {
  let templateListOfLinks = '';
  data.forEach(link => {
    let obj = `${link.file}, ${link.href}, ${link.text}, ${link.status ? link.status : ''}, ${link.statusText ? link.statusText : ''}\n`;
    templateListOfLinks += obj;
  });
  return templateListOfLinks;
};

exports.crearTemplateDeArray = crearTemplateDeArray;