import { mdLinks } from '../src/controller/mdLinks.js';
// TEST PARA MDLINKS
const options1 = {
  validate: false,
  status: false
};
const output1 = '\n' + '        C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md, https://www.w3schools.com/jsref/tryit.asp?filename=tryjs, Pruebita' 
+ '\n' + '        \n' + '        C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md, https://developer.mozilla.org/es/docs/Web/JavaScript/Refere, Prueba' 
+ '\n' + '        \n' + '        C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md, https://www.w3schools.com/jsref/jsref_reduce.asp, Pruebita' 
+ '\n' + '        \n' + '        C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://es.wikipedia.org/wiki/Markdown, Markdown' + '\n        ';

const options2 = {
  validate: true,
  status: false
};
const output2 = '\n' + '        C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md, https://www.w3schools.com/jsref/tryit.asp?filename=tryjs, Pruebita, 200, OK' 
+ '\n' + '        \n' + '        C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md, https://developer.mozilla.org/es/docs/Web/JavaScript/Refere, Prueba, 404, fail' 
+ '\n' + '        \n' + '        C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md, https://www.w3schools.com/jsref/jsref_reduce.asp, Pruebita, 200, OK' 
+ '\n' + '        \n' + '        C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://es.wikipedia.org/wiki/Markdown, Markdown, 200, OK' + '\n        ';

const options3 = {
  validate: false,
  status: true
};
const output3 = '\n' + '        Total: 4' + '\n' + '        Unicos: 4' + '\n     ';

const options4 = {
  validate: true,
  status: true
};

const output4 = '\n' + '       Total: 4' + '\n' + '       Unicos: 4' + '\n' + '       Rotos: 1' + '\n        ';
describe('mdLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Debería devolver los links con sus propiedades href, text y file', (done) => {
    return mdLinks('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest', options1)
      .then(resp => {
        expect(resp).toBe(output1);
        done();
      });
  });
  it('Debería devolver los links con sus propiedades href, text, file, status y statusText', (done) => {
    return mdLinks('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest', options2)
      .then(resp => {
        expect(resp).toBe(output2);
        done();
      });
  });
  it('Debería devolver el calculo de los links únicos y totales', (done) => {
    return mdLinks(`${process.cwd()}\\directoryForTest`, options3)
      .then(resp => {
        expect(resp).toBe(output3);
        done();
      });
  });
  it('Debería devolver el calculo de los links únicos, rotos y  totales', (done) => {
    return mdLinks(`${process.cwd()}\\directoryForTest`, options4)
      .then(resp => {
        expect(resp).toBe(output4);
        done();
      });
  });
});