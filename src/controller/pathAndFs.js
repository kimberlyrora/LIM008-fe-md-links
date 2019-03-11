const path = require('path');
const fs = require('fs');
/**
 * Función que pregunta si la ruta es absoluta
 * @param {ruta a verificar} route
 * @returns boolean: true si es absoluta
 *                   false si es relativa
 */
export const isAbsolute = route => path.isAbsolute(route);
/**
 * Función que convierte la ruta relativa a absoluta
 * @param {ruta relativa a convertir a absoluta} route 
 * @returns string: ruta absoluta
 */
export const convertToAbsolute = route => path.resolve(route);
/**
 * Función que pregunta si la ruta es un directorio
 * @param {ruta a verificar si es directorio} route
 * @returns boolean: true si es directorio
 *                   false si no es directorio
 */
export const isDirectorySync = route => fs.statSync(route).isDirectory();
/**
 * Función si la ruta es archivo
 * @param {ruta a verificar si es archivo} route
 * @returns boolean : true si es archivo
 *                    false si no es archivo   
 */
export const isFileSync = route => fs.statSync(route).isFile();
/**
 * Funciòn que obtiene la extensión del archivo
 * @param {Ruta a verificar su extension } route
 * @returns un string con la extensión 
 */
export const extFile = route => path.extname(route);
/**
 * Función que lee el archivo
 * @param {Ruta a leer archivo} route
 * @returns string: contenido de la ruta
 */
export const readFileSync = route => fs.readFileSync(route);

