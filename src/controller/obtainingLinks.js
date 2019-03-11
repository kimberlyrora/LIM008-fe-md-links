import { readFileSync} from './pathAndFs.js';
const myMarked = require('marked');
const renderer = new myMarked.Renderer();
/**
 * Función que obtiene los links de los archivos .md 
 * @param {Array de rutas de archivos .md} arrRoutes
 * @returns array de objetos (cada objeto es un link y su propiedades) 
 */
export const getLinks = arrRoutes => {
  let arrayLink = [];
  arrRoutes.forEach((file) => {
    const readMd = readFileSync(file).toString();
    renderer.link = (href, title, text) => {
      arrayLink.push({ href, text: text.substring(0, 50), file: file });
    };
    myMarked(readMd, { renderer });
  });
  return arrayLink;
};