const fetch = require('node-fetch');
/**
 * Función que valida los links (status(number), statusText(fail,ok))
 * @param {Array de links (cada objeto es un link y sus propiedades)} arrayLink 
 * @returns Array de links con sus propiedades agragando el status y statusText (array de objetos)
 */
export const validLinks = (arrayLink) => {
  const arrObj = [...arrayLink];
  const arrLinks = arrObj.map(link => fetch(link.href)
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        link.status = response.status;
        link.statusText = response.statusText;
      } else {
        link.status = response.status;
        link.statusText = 'fail';
      }
      return link;
    }));
  return Promise.all(arrLinks);
};