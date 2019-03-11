import {isAbsolute, convertToAbsolute} from './pathAndFs.js';
/**
 * Función donde se arma condicionales para la lectura de ruta y aplicar primeras funciones 
 * @param {Ruta a la que se le aplicará las funciones isAbsolute y convertToAbsolute} ruta
 * @returns string: ruta absoluta 
 */
export const readRoute = ruta => {
  let rutaAbs;
  if (isAbsolute(ruta)) {
    rutaAbs = ruta;
  } else {
    rutaAbs = convertToAbsolute(ruta);
  }
  return rutaAbs;
};
/**
 * Función que crea templates a partir del array pasado como parametro
 * @param {Array de objetos} data
 * @returns template con propiedades del parametro pasado 
 */
export const crearTemplateDeArray = (data) => {
  let templateListOfLinks = '';
  let obj;
  data.forEach((link) => {
    if (link.status === undefined && link.statusText === undefined) {
      obj = `
        ${link.file}, ${link.href}, ${link.text}
        `;
    } else { 
      obj = `
        ${link.file}, ${link.href}, ${link.text}, ${link.status}, ${link.statusText}
        `;
    }
    templateListOfLinks += obj;
  });
  return templateListOfLinks;
};