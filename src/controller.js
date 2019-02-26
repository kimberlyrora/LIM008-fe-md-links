const path = require('path');

/**
 * @param {ruta a verificar} route
 * @returns boolean: true si es absoluta
 *                   false si es relativa
 */
export const isAbsolute = (route) =>{
    const routeAbsolute = path.isAbsolute(route);
    return routeAbsolute;
}