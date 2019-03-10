"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readRoute = exports.getLinks = exports.readFileSync = exports.readDirectorySync = exports.extFile = exports.isFileSync = exports.isDirectorySync = exports.convertToAbsolute = exports.isAbsolute = void 0;

const path = require('path');

const fs = require('fs');

const myMarked = require('marked');

const renderer = new myMarked.Renderer();
/**
 * Función que pregunta si la ruta es absoluta
 * @param {ruta a verificar} route
 * @returns boolean: true si es absoluta
 *                   false si es relativa
 */

const isAbsolute = route => path.isAbsolute(route);
/**
 * Función que convierte la ruta relativa a absoluta
 * @param {ruta relativa a convertir a absoluta} route 
 * @returns string: ruta absoluta
 */


exports.isAbsolute = isAbsolute;

const convertToAbsolute = route => path.resolve(route);
/**
 * Función que pregunta si la ruta es un directorio
 * @param {ruta a verificar si es directorio} route
 * @returns boolean: true si es directorio
 *                   false si no es directorio
 */


exports.convertToAbsolute = convertToAbsolute;

const isDirectorySync = route => fs.statSync(route).isDirectory();
/**
 * Función si la ruta es archivo
 * @param {ruta a verificar si es archivo} route
 * @returns boolean : true si es archivo
 *                    false si no es archivo   
 */


exports.isDirectorySync = isDirectorySync;

const isFileSync = route => fs.statSync(route).isFile();
/**
 * Funciòn que obtiene la extensión del archivo
 * @param {Ruta a verificar su extension } route
 * @returns un string con la extensión 
 */


exports.isFileSync = isFileSync;

const extFile = route => path.extname(route);
/**
 * Función que lee la ruta del directorio hasta encontrar todas la rutas de archivos markdown y guardarlos en un array
 * @param {Ruta de directorio a leer} route
 * @return  array de rutas de archivos .md
 */


exports.extFile = extFile;

const readDirectorySync = route => {
  let arrayReadDir = [];

  if (isFileSync(route) && extFile(route) === '.md') {
    arrayReadDir.push(route);
  } else {
    const hadReadDir = fs.readdirSync(route);
    hadReadDir.forEach(complement => {
      let afterFile = path.join(route, complement);

      if (isFileSync(afterFile) && extFile(afterFile) === '.md') {
        arrayReadDir.push(afterFile);
      } else if (isDirectorySync(afterFile)) {
        arrayReadDir = arrayReadDir.concat(readDirectorySync(afterFile));
      }
    });
  }

  return arrayReadDir;
}; // console.log(readDirectorySync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest'));

/**
 * Función que lee el archivo
 * @param {Ruta a leer archivo} route
 * @returns string: contenido de la ruta
 */


exports.readDirectorySync = readDirectorySync;

const readFileSync = route => fs.readFileSync(route);
/**
 * Función que obtiene los links de los archivos .md 
 * @param {Array de rutas de archivos .md} arrRoutes
 * @returns array de objetos (cada objeto es un link y su propiedades) 
 */


exports.readFileSync = readFileSync;

const getLinks = arrRoutes => {
  let arrayLink = [];
  arrRoutes.forEach(file => {
    const readMd = readFileSync(file).toString();

    renderer.link = (href, title, text) => {
      arrayLink.push({
        href,
        text: text.substring(0, 50),
        file: file
      });
    };

    myMarked(readMd, {
      renderer
    });
  });
  return arrayLink;
};

exports.getLinks = getLinks;
const data = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}, {
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}, {
  href: 'https://www.w3schools.com/jsref/jsref_reduce.asp',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}, {
  href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce2',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}, {
  href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjs',
  text: 'Pruebita',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}, {
  href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Refere',
  text: 'Prueba',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}]; // console.log(validLinks(data));
// validLinks(data).then((result) => console.log(result));

/**
 * Función donde se arma condicionales para la lectura de ruta y aplicar primeras funciones 
 * @param {Ruta a la que se le aplicará las funciones isAbsolute y convertToAbsolute} ruta
 * @returns string: ruta absoluta 
 */

const readRoute = ruta => {
  let rutaAbs;

  if (isAbsolute(ruta)) {
    rutaAbs = ruta;
  } else {
    rutaAbs = convertToAbsolute(ruta);
  }

  return rutaAbs;
};

exports.readRoute = readRoute;