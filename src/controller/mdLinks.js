import { getLinks } from './obtainingLinks.js';
import { readDirectorySync } from './recursion.js';
import { validLinks} from './validate.js';
import { readRoute } from './view-controller.js';
/**
 * Función que entrega resultados varaiando según el parametro obj
 * @param {Ruta de la cual se extraeran todos los links de los archivos .md que se encuentren} route 
 * @param {validate&&stats||validate||stats||undefined} obj
 * @returns undefined: string de cada link con sus propiedades file, text y href
 *          validate: string de cada link con sus propiedades file, text, href, status y statusText
 *          stats: string con calculo de links totales y únicos
 *          validate&&stats:  string con calculo de links totales, únicos y rotos
 */

const mdLinks = (route, objeto) =>
  new Promise((resolve) => {
    const absoluteRoute = readRoute(route);
    const arrayArchivosMd = readDirectorySync(absoluteRoute);
    let arrayLink = getLinks(arrayArchivosMd);
    if (objeto === undefined) {
      resolve(arrayLink);
    } else if (objeto.validate) {
      validLinks(arrayLink).then((objeto) => resolve(objeto));
    } else {
      resolve(arrayLink);
    };
  });

module.exports = mdLinks;

