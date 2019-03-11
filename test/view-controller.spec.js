import { readRoute, crearTemplateDeArray } from '../src/view-controller.js';
describe('readRoute', () => {
  it('Debería ser una función', () => {
    expect(typeof readRoute).toBe('function');
  });
  it('Debería devolver una ruta relativa convertida en absoluta', () => {
    expect(readRoute('.\\..\\LIM008-fe-md-links')).toBe(`${process.cwd()}`);
  });
  it('Debería devolver la misma ruta absoluta que se ingresó', () => {
    expect(readRoute(`${process.cwd()}\\directoryForTest`)).toBe(`${process.cwd()}\\directoryForTest`);
  });
});
const input1 = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}, {
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}, {
  href: 'https://www.w3schools.com/jsref/jsref_reduce.asp',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}, {
  href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce2',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}, {
  href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjs',
  text: 'Pruebita',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}, {
  href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Refere',
  text: 'Prueba',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}];
const output1 = '\n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://es.wikipedia.org/wiki/Markdown, Markdown' 
+ '\n' + '        \n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://es.wikipedia.org/wiki/Markdown, Markdown' 
+ '\n' + '        \n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://www.w3schools.com/jsref/jsref_reduce.asp, Markdown' 
+ '\n' + '        \n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce2, Markdown' 
+ '\n' + '        \n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://www.w3schools.com/jsref/tryit.asp?filename=tryjs, Pruebita' 
+ '\n' + '        \n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://developer.mozilla.org/es/docs/Web/JavaScript/Refere, Prueba' + '\n        ';

const input2 = [{
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
const output2 = '\n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://es.wikipedia.org/wiki/Markdown, Markdown, 200, OK' 
+ '\n' + '        \n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://es.wikipedia.org/wiki/Markdown, Markdown, 200, OK' 
+ '\n' + '        \n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://www.w3schools.com/jsref/jsref_reduce.asp, Markdown, 200, OK' 
+ '\n' + '        \n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce2, Markdown, 200, OK' 
+ '\n' + '        \n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://www.w3schools.com/jsref/tryit.asp?filename=tryjs, Pruebita, 200, OK' 
+ '\n' + '        \n' + '        C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://developer.mozilla.org/es/docs/Web/JavaScript/Refere, Prueba, 404, fail' + '\n        ';

describe('crearTemplateDeArray', () => {
  it('Debería ser una función', () => {
    expect(typeof crearTemplateDeArray).toBe('function');
  });
  it('Debería devolver un template de los links con propiedades href, text y file', () => {
    expect(crearTemplateDeArray(input1)).toBe(output1);
  });
  it('Debería devolver un template de los links con propiedades href, test, file, status y statusText', () => {
    expect(crearTemplateDeArray(input2)).toBe(output2);
  });
});