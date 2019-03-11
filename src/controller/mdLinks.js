import { getLinks } from './obtainingLinks.js';
import { readDirectorySync } from './recursion.js';
import { stats } from './stats.js';
import {validLinks} from './validate.js';
import {readRoute, crearTemplateDeArray } from './view-controller.js';
/**
 * Función que entrega resultados varaiando según el parametro obj
 * @param {Ruta de la cual se extraeran todos los links de los archivos .md que se encuentren} route 
 * @param {validate&&stats||validate||stats||undefined} obj
 * @returns undefined: string de cada link con sus propiedades file, text y href
 *          validate: string de cada link con sus propiedades file, text, href, status y statusText
 *          stats: string con calculo de links totales y únicos
 *          validate&&stats:  string con calculo de links totales, únicos y rotos
 */

export const mdLinks = (route, objeto) =>
  new Promise((resolve, reject) => {
    const absoluteRoute = readRoute(route);
    const arrayArchivosMd = readDirectorySync(absoluteRoute);
    let arrayLink = getLinks(arrayArchivosMd);
    if (objeto.validate && objeto.stats) {
      validLinks(arrayLink)
        .then(response => {
          const resultStats = stats(response, 'validate'); 
          return resultStats;
        }).then(answer => resolve(answer));
    } else if (objeto.stats) {
      resolve(stats(arrayLink));
    } else if (objeto.validate) {
      validLinks(arrayLink).then((objeto) => {
        const resultValidate = crearTemplateDeArray(objeto);
        return resultValidate;
      }).then(response => resolve(response));
    } else {
      resolve(crearTemplateDeArray(arrayLink));
    }
  });


