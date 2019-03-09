import {
    readDirectorySync,
    getLinks,
    readRoute,
    validLinks
} from './controller.js'
import { stats, crearTemplateDeArray } from './controller-options.js'
const options = {
    validate: false,
    status: false
}

export const mdLinks = (route, obj) =>
    new Promise((resolve, reject) => {
        const absRoute = readRoute(route);
        const arrArchivosMd = readDirectorySync(absRoute);
        let arrLink = getLinks(arrArchivosMd);
        let answer;
        if (obj.validate && obj.status) {
             validLinks(arrLink)
             .then(res => {
                 const resuSts = stats(res, 'validate'); 
                 //console.log('los2', resuSts);
                 return resuSts;
            }).then(res=> resolve(res));
        } else if (obj.status) {
            resolve(stats(arrLink));
        } else if (obj.validate) {
            validLinks(arrLink).then((obj) => {
                const resValid = crearTemplateDeArray(obj)
                //console.log('valid', resValid);
                return resValid;
            }).then(res=>resolve(res));
        }
        else {
            resolve(crearTemplateDeArray(arrLink));
        }
    });
mdLinks('..\\directoryForTest', options).then(resp => console.log('soloyo', resp));

