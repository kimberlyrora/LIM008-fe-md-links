import {isFileSync, extFile, isDirectorySync} from './pathAndFs.js';
const path = require('path');
/**
 * Función que lee la ruta del directorio hasta encontrar todas la rutas de archivos markdown y guardarlos en un array
 * @param {Ruta de directorio a leer} route
 * @return  array de rutas de archivos .md
 */
export const readDirectorySync = route => {
  let arrayReadDir = [];
  if (isFileSync(route) && extFile(route) === '.md') {
    arrayReadDir.push(route);
  } else {
    const hadReadDir = fs.readdirSync(route);
    hadReadDir.forEach((complement) => {
      let afterFile = path.join(route, complement);
      if (isFileSync(afterFile) && extFile(afterFile) === '.md') {
        arrayReadDir.push(afterFile);
      } else if (isDirectorySync(afterFile)) {
        arrayReadDir = arrayReadDir.concat(readDirectorySync(afterFile));
      }
    });
  }
  return arrayReadDir;
};