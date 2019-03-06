const path = require('path');
const fs = require('fs');
const myMarked =  require('marked');
const renderer = new myMarked.Renderer();
const fetch = require('node-fetch');

/**
 * @param {ruta a verificar} route
 * @returns boolean: true si es absoluta
 *                   false si es relativa
 */
export const isAbsolute = (route) => {
    const routeAbsolute = path.isAbsolute(route);
    return routeAbsolute;
}
/**
 * 
 * @param {ruta relativa a convertir a absoluta} route 
 * @returns string: ruta absoluta
 */
export const convertToAbsolute = (route) => {
    const routeAbsolute = path.resolve(route);
    return routeAbsolute;
}
/**
 * Función isDirectory Sincrona
 * @param {ruta a verificar si es directorio} route
 * @returns boolean: true si es directorio
 *                   false si no es directorio
 */
export const isDirectorySync = (route) => {
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
export const isDirectoryAsync = (route, cb) => {
    fs.stat(route, (err, stats) => {
        const result = stats.isDirectory();
    cb(null,result);
});
};
export const isFileSync = (route) =>{
const routeFile  = fs.statSync(route).isFile();
return routeFile;
}
/**
 * Funcion Recursiva
 * @param {Ruta a leer} route
 * @return  array de rutas de archivos .md
 */
export const readDirectorySync = (route) => {
let arrayReadDir = [];
const hadReadDir = fs.readdirSync(route);
hadReadDir.forEach((complement) => {
    let afterFile =  path.join(route, complement);
if( isFileSync(afterFile) && path.extname(afterFile) === '.md'){
arrayReadDir.push(afterFile);
} else if (isDirectorySync(afterFile)){
    arrayReadDir = arrayReadDir.concat(readDirectorySync(afterFile));
} 
})
return arrayReadDir;
};
// /**
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
export const readDirectoryAsync = (route, callback) => {
  fs.stat(route, (err, files) => {
      const result = files.readdir();
      console.log(result);
      callback(null, result);
  })}
  /**
   * 
   * @param {Ruta a leer archivo} route
   * @returns string: contenido de la ruta
   */
  export const readFileSync = (route) => {
      const routeFile = fs.readFileSync(route);
      return routeFile;
  }
  /**
   * 
   * @param {contenido de archivo .md} content 
   * @returns 
   */
  export const markedLinks = (content) => {
    const markdown = md.render(content);
    return markdown;
    
  }
  /**
   * 
   * @param {estructura Html} markCont
   * @returns array de links 
   */
  export const getLinks = (route) => {
      let arrayLink = [];
      route.forEach((file) => {
          const readMd = readFileSync(file).toString();
          renderer.link = (href,title,text) => {
              arrayLink.push({href,text: text.substring(0,50),file:file});
          };
         myMarked(readMd, {renderer});    
        });
        return arrayLink;
    };
/**
 * 
 * @param {link a validar} href
 * @returns string ok or fail 
 */

export const validLinks = async(link) => {
 const prom = await fetch(link.ok);
   return prom
//    .then(res => console.log(res.status))
//    .catch(err => console.log(err));
}
console.log(validLinks('https://es.wikipedia.org/wiki/Markdown'));
