import { crearTemplateDeArray } from './view-controller.js';
import { stats } from './stats.js';
const mdLinks = require('./mdLinks');
export const cliJs = (args) => new Promise((resolve) => {
  if (args[1] === '--validate' && args[2] === '--stats') {
    mdLinks(args[0], { validate: true }).then(resp => resolve(stats(resp, 'validate')));
  } else if (args[1] === '--validate') {
    mdLinks(args[0], { validate: true }).then(resp => resolve(crearTemplateDeArray(resp)));
  } else if (args[1] === '--stats') {
    mdLinks(args[0], { validate: false }).then(resp => resolve(stats(resp)));
  } else if (args[0] === undefined || '') {
    resolve('Ingrese una ruta válida.');
  } else {
    mdLinks(args[0], { validate: false }).then(resp => resolve(crearTemplateDeArray(resp)));
  }
});