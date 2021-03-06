"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearTemplateDeArray = exports.template = exports.stats = exports.brokenLinks = exports.uniqueLinks = void 0;

var _mdLinks = require("./controller/mdLinks");

const data = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://www.w3schools.com/jsref/jsref_reduce.asp',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce2',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjs',
  text: 'Pruebita',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Refere',
  text: 'Prueba',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 404,
  statusText: 'fail'
}];

const uniqueLinks = arrObj => {
  const arrUniques = arrObj.reduce((acum, ele) => {
    if (acum.indexOf(ele.href) === -1) {
      acum.push(ele.href);
    }

    return acum;
  }, []); // console.log(arrUniques);

  return arrUniques.length;
}; // console.log(uniqueLinks(data));


exports.uniqueLinks = uniqueLinks;

const brokenLinks = arrObj => {
  const arrBroken = arrObj.reduce((acum, ele) => {
    if (ele.statusText === 'fail') {
      acum.push(ele.href);
    }

    return acum;
  }, []);
  return arrBroken.length;
}; // console.log(brokenLinks(data));


exports.brokenLinks = brokenLinks;

const stats = (arrObj, condition) => {
  const valid = condition;
  let result;

  if (valid === 'validate') {
    result = `
       Total: ${arrObj.length}
       Unicos: ${uniqueLinks(arrObj)}
       Rotos: ${brokenLinks(arrObj)}
        `;
  } else {
    result = `
        Total: ${arrObj.length}
        Unicos: ${uniqueLinks(arrObj)}
     `;
  }

  return result;
}; // console.log(stats(data));
// console.log(stats(data, 'validate'));


exports.stats = stats;

const template = obj => {};

exports.template = template;

const crearTemplateDeArray = data => {
  let templateListOfLinks = '';
  data.forEach(link => {
    const obj = `
      ${link.file}, ${link.href}, ${link.text}, ${link.status}, ${link.statusText}
      `;
    templateListOfLinks += obj;
  });
  return templateListOfLinks;
}; //    console.log(crearTemplateDeArray(getLinks(['C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'])));


exports.crearTemplateDeArray = crearTemplateDeArray;