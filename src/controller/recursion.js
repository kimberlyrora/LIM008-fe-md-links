import {isFileSync, extFile, isDirectorySync} from './pathAndFs.js';
const path = require('path');
const fs = require('fs');
/**
 * Función que lee la ruta del directorio hasta encontrar todas la rutas de archivos markdown y guardarlos en un array
 * @param {Ruta de directorio a leer} route
 * @return  array de rutas de archivos .md
 */
export const readDirectorySync = route => {
  let arrayReadDir = [];
  if (isFileSync(route) && extFile(route) === '.md') {
    arrayReadDir.push(route);
  } else if (isDirectorySync(route)) {
    let hadReadDir = fs.readdirSync(route);
    hadReadDir.forEach((complement) => {
      let afterFile = path.join(route, complement);
      arrayReadDir = arrayReadDir.concat(readDirectorySync(afterFile));      
    });
  }
  return arrayReadDir;
};