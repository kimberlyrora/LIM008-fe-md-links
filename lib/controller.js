"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validLinks = exports.getLinks = exports.markedLinks = exports.readFileSync = exports.readDirectoryAsync = exports.readDirectorySync = exports.isFileSync = exports.isDirectoryAsync = exports.isDirectorySync = exports.convertToAbsolute = exports.isAbsolute = void 0;

const path = require('path');

const fs = require('fs');

const myMarked = require('marked');

const renderer = new myMarked.Renderer();

const fetch = require('node-fetch');
/**
 * @param {ruta a verificar} route
 * @returns boolean: true si es absoluta
 *                   false si es relativa
 */


const isAbsolute = route => {
  const routeAbsolute = path.isAbsolute(route);
  return routeAbsolute;
};
/**
 * 
 * @param {ruta relativa a convertir a absoluta} route 
 * @returns string: ruta absoluta
 */


exports.isAbsolute = isAbsolute;

const convertToAbsolute = route => {
  const routeAbsolute = path.resolve(route);
  return routeAbsolute;
};
/**
 * Función isDirectory Sincrona
 * @param {ruta a verificar si es directorio} route
 * @returns boolean: true si es directorio
 *                   false si no es directorio
 */


exports.convertToAbsolute = convertToAbsolute;

const isDirectorySync = route => {
  const routeDirectory = fs.statSync(route).isDirectory();
  return routeDirectory;
};
/**
 * Función isDirectory Asincrona
 * @param {ruta a verificar si es directorio} route
 * @param {callback que indica que se termino de realizar el proceso} cb
 * @returns boolean: true si es directorio
 *                   false si no es directorio
 */


exports.isDirectorySync = isDirectorySync;

const isDirectoryAsync = (route, cb) => {
  fs.stat(route, (err, stats) => {
    const result = stats.isDirectory();
    cb(null, result);
  });
};

exports.isDirectoryAsync = isDirectoryAsync;

const isFileSync = route => {
  const routeFile = fs.statSync(route).isFile();
  return routeFile;
};
/**
 * Funcion Recursiva
 * @param {Ruta a leer} route
 * @return  array de rutas de archivos .md
 */


exports.isFileSync = isFileSync;

const readDirectorySync = route => {
  let arrayReadDir = [];
  const hadReadDir = fs.readdirSync(route);
  hadReadDir.forEach(complement => {
    let afterFile = path.join(route, complement);

    if (isFileSync(afterFile) && path.extname(afterFile) === '.md') {
      arrayReadDir.push(afterFile);
    } else if (isDirectorySync(afterFile)) {
      arrayReadDir = arrayReadDir.concat(readDirectorySync(afterFile));
    }
  });
  return arrayReadDir;
}; // /**
//  * Función asincrona recursiva readDirectory
//  * @param {Directorio a leer y del cual se va obtener el array de archivos .md} route 
//  * @param {array con archivos markdown} callback 
//  * @returns callback
//  */
// export const readDirectoryAsync = (route, callback) => {
//   fs.stat(route, (err, files) => {
//       const result = files.readdir();
//       console.log(result);
//       callback(null, result);
//   })}

/**
 * 
 * @param {Array con rutas de archivos .md} arr
 * @returns  
 */


exports.readDirectorySync = readDirectorySync;

const readDirectoryAsync = (route, callback) => {
  fs.stat(route, (err, files) => {
    const result = files.readdir(); //   console.log(result);

    callback(null, result);
  });
};
/**
 * 
 * @param {Ruta a leer archivo} route
 * @returns string: contenido de la ruta
 */


exports.readDirectoryAsync = readDirectoryAsync;

const readFileSync = route => {
  const routeFile = fs.readFileSync(route);
  return routeFile;
};
/**
 * 
 * @param {contenido de archivo .md} content 
 * @returns 
 */


exports.readFileSync = readFileSync;

const markedLinks = content => {
  const markdown = md.render(content);
  return markdown;
};
/**
 * 
 * @param {estructura Html} markCont
 * @returns array de links 
 */


exports.markedLinks = markedLinks;

const getLinks = route => {
  let arrayLink = [];
  route.forEach(file => {
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
/**
 * 
 * @param {link a validar} href
 * @returns string ok or fail 
//  */
// async function returnTrue(data) {
//     let promise = new Promise((resolve,reject) =>{
//         resolve(fetch(data).then(res => res.status))});
//         let result= await promise;
//         console.log(result);
//     };
//     returnTrue('https://es.wikipedia.org/wiki/Markdown');
//    export  async function returnTrue() {
//         // create a new promise inside of the async function
//         let promise = new Promise((resolve, reject) => {
//           setTimeout(() => resolve(true), 1000) // resolve
//         });
//         // wait for the promise to resolve
//         let result = await promise;
//         // console log the result (true)
//         console.log(result);
//     };
// console.log(returnTrue());
// function hello(link) {
//     return new Promise(resolve => {
//         resolve(fetch(link.ok));
//     });
//   }
//   async function validLinks() {
//     var result = await hello();
//     console.log(result);
//     // expected output: 'resolved'
//   }
//   validLinks();

/*   function resolveAfter2Seconds(link) {
    return new Promise(resolve => {
        resolve(fetch(link));
    });
  }
  
  
  async function validLinks(x) {
    const a = await resolveAfter2Seconds(x);
    return a;
  }
  
  validLinks('https://es.wikipedia.org/wiki/Markdown').then(v => v.ok);
 */

/* async function returnTrue(data) {
  let promise = new Promise((resolve,reject) =>{
      resolve(fetch(data))});
      let result= await promise;
      console.log(result.status);
  }; */
//console.log(returnTrue('https://es.wikipedia.org/wiki/Markdown'));


exports.getLinks = getLinks;

const validLinks = link => fetch(link).then(response => {
  console.log(response.status);
  return response;
});

exports.validLinks = validLinks;
console.log(validLinks('https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asin'));
/* export const estadoLink = (link) => {
//  return  fetch(link)/*.then((response) => console.log(response.status));
}

console.log(validLinks('https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asin'));
 */