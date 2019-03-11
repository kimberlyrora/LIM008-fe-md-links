"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFileSync = exports.extFile = exports.isFileSync = exports.isDirectorySync = exports.convertToAbsolute = exports.isAbsolute = void 0;

const path = require('path');

const fs = require('fs');
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
 * Función que lee el archivo
 * @param {Ruta a leer archivo} route
 * @returns string: contenido de la ruta
 */


exports.extFile = extFile;

const readFileSync = route => fs.readFileSync(route);

exports.readFileSync = readFileSync;