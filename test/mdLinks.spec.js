const mdLinks = require('../src/controller/mdLinks.js');
// TEST PARA MDLINKS

const output1 = 
[ { href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjs',
  text: 'Pruebita',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md' },
{ href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Refere',
  text: 'Prueba',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md' },
{ href: 'https://www.w3schools.com/jsref/jsref_reduce.asp',
  text: 'Pruebita',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md' },
{ href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md' } ];
const output2 =
[ { href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjs',
  text: 'Pruebita',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md',
  status: 200,
  statusText: 'OK' },
{ href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Refere',
  text: 'Prueba',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md',
  status: 404,
  statusText: 'fail' },
{ href: 'https://www.w3schools.com/jsref/jsref_reduce.asp',
  text: 'Pruebita',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md',
  status: 200,
  statusText: 'OK' },
{ href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK' } ];
describe('mdLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Debería devolver los links con sus propiedades href, text y file', (done) => {
    return mdLinks(`${process.cwd()}\\directoryForTest`)
      .then(resp => {
        expect(resp).toEqual(output1);
        done();
      });
  });
  it('Debería devolver los links con sus propiedades href, text, file, status y statusText', (done) => {
    return mdLinks(`${process.cwd()}\\directoryForTest`, {validate: true})
      .then(resp => {
        expect(resp).toEqual(output2);
        done();
      });
  });
});