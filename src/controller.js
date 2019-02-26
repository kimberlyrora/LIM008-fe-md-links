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
 * @param {ruta a verificar si es directorio} route
 * @returns boolean: true si es directorio
 *                   false si no es directorio
 */
export const isDirectory = (route) => {
    const routeDirectory = fs.statSync(route).isDirectory();
    return routeDirectory;
}