const path = require('path');
const fs = require('fs');
const myMarked = require('marked');
const renderer = new myMarked.Renderer();
const fetch = require('node-fetch');

/**
 * @param {ruta a verificar} route
 * @returns boolean: true si es absoluta
 *                   false si es relativa
 */
export const isAbsolute = (route) => {
    const routeAbsolute = path.isAbsolute(route);
    return routeAbsolute;
}
/**
 * 
 * @param {ruta relativa a convertir a absoluta} route 
 * @returns string: ruta absoluta
 */
export const convertToAbsolute = (route) => {
    const routeAbsolute = path.resolve(route);
    return routeAbsolute;
}
/**
 * Función isDirectory Sincrona
 * @param {ruta a verificar si es directorio} route
 * @returns boolean: true si es directorio
 *                   false si no es directorio
 */
export const isDirectorySync = (route) => {
    const routeDirectory = fs.statSync(route).isDirectory();
    return routeDirectory;
};
/**
 * Función isDirectory Asincrona
 * @param {ruta a verificar si es directorio} route
 * @param {callback que indica que se termino de realizar el proceso} cb
 * @returns boolean: true si es directorio
 *                   false si no es directorio
 */
// export const isDirectoryAsync = (route, cb) => {
//     fs.stat(route, (err, stats) => {
//         const result = stats.isDirectory();
//     cb(null,result);
// });
// };
export const isFileSync = (route) => {
    const routeFile = fs.statSync(route).isFile();
    return routeFile;
}
/**
 * Funcion Recursiva
 * @param {Ruta a leer} route
 * @return  array de rutas de archivos .md
 */
export const readDirectorySync = (route) => {
    let arrayReadDir = [];
    if (isFileSync(route)) {
        arrayReadDir.push(route);
    } else {
        const hadReadDir = fs.readdirSync(route);
        hadReadDir.forEach((complement) => {
            let afterFile = path.join(route, complement);
            if (isFileSync(afterFile) && path.extname(afterFile) === '.md') {
                arrayReadDir.push(afterFile);
            } else if (isDirectorySync(afterFile)) {
                arrayReadDir = arrayReadDir.concat(readDirectorySync(afterFile));
            }
        })
    }
    return arrayReadDir;
};
// console.log(readDirectorySync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest'));
/**
 * 
 * @param {Ruta a leer archivo} route
 * @returns string: contenido de la ruta
 */
export const readFileSync = (route) => {
    const routeFile = fs.readFileSync(route);
    return routeFile;
}
/**
 * 
 * @param {estructura Html} markCont
 * @returns array de links 
 */
export const getLinks = (arrRoutes) => {
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
/**  
 * 
 * @param {link a validar} href
 * @returns string ok or fail 
//  */
// async function returnTrue(data) {
//     let promise = new Promise((resolve,reject) =>{
//         resolve(fetch(data).then(res => res.status))});
//         let result= await promise;
//         console.log(result);
//     };
//     returnTrue('https://es.wikipedia.org/wiki/Markdown');


export const validLinks = (arrayLink) => {
    const arrObj = arrayLink
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
        }))
    return Promise.all(arrLinks)
}

const data =
    [{
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
    },
    {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
    },
    {
        href: 'https://www.w3schools.com/jsref/jsref_reduce.asp',
        text: 'Markdown',
        file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
    },
    {
        href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce2',
        text: 'Markdown',
        file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
    },
    {
        href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjs',
        text: 'Pruebita',
        file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
    },
    {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Refere',
        text: 'Prueba',
        file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
    }];
//   console.log(validLinks(data));
//validLinks(data).then((result) => console.log(result));



export const readRoute = (ruta) => {
    let rutaAbs;
    if (isAbsolute(ruta)) {
        rutaAbs = ruta;
    } else {
        rutaAbs = convertToAbsolute(ruta);
    }
    return rutaAbs;
}
