"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readDirectorySync = void 0;

var _pathAndFs = require("./pathAndFs.js");

const path = require('path');

const fs = require('fs');
/**
 * Función que lee la ruta del directorio hasta encontrar todas la rutas de archivos markdown y guardarlos en un array
 * @param {Ruta de directorio a leer} route
 * @return  array de rutas de archivos .md
 */


const readDirectorySync = route => {
  let arrayReadDir = [];

  if ((0, _pathAndFs.isFileSync)(route) && (0, _pathAndFs.extFile)(route) === '.md') {
    arrayReadDir.push(route);
  } else {
    let hadReadDir = fs.readdirSync(route);
    hadReadDir.forEach(complement => {
      let afterFile = path.join(route, complement);
      arrayReadDir = arrayReadDir.concat(readDirectorySync(afterFile));
    });
  }

  return arrayReadDir;
};

exports.readDirectorySync = readDirectorySync;