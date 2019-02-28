const path = require('path');
const fs = require('fs');

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
/**
 * Funcion Recursiva
 * @param {Ruta a leer} route
 * @return  array de rutas de archivos .md
 */
let arrayReadDir = [];
export const readDirectorySync = (route) => {
const hadReadDir = fs.readdirSync(route);
hadReadDir.forEach((complement) => {
    let afterFile =  path.join(route, complement);
if(fs.statSync(afterFile).isFile() === true && path.extname(afterFile) === '.md'){
arrayReadDir.push(afterFile);
} else if (fs.statSync(afterFile).isDirectory() === true){
    readDirectorySync(afterFile);
} 
console.log(arrayReadDir);
})
return arrayReadDir;
};

// export const readDirectoryAsync = (route, callback) => {
//     const hadReadDirAsync
// }