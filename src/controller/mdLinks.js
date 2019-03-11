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
export const mdLinks = (route, obj) =>
  new Promise((resolve, reject) => {
    const absRoute = readRoute(route);
    const arrArchivosMd = readDirectorySync(absRoute);
    let arrLink = getLinks(arrArchivosMd);
    if (obj.validate && obj.status) {
      validLinks(arrLink)
        .then(res => {
          const resuSts = stats(res, 'validate'); 
          return resuSts;
        }).then(res => resolve(res));
    } else if (obj.status) {
      resolve(stats(arrLink));
    } else if (obj.validate) {
      validLinks(arrLink).then((obj) => {
        const resValid = crearTemplateDeArray(obj);
        return resValid;
      }).then(res => resolve(res));
    } else {
      resolve(crearTemplateDeArray(arrLink));
    }
  });
// mdLinks('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md', options).then(resp => console.log(resp));

