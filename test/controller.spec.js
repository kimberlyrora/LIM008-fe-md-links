import {
  isAbsolute,
  convertToAbsolute,
  isDirectorySync,
  readDirectorySync,
  isFileSync,
  readFileSync,
  markedLinks,
  getLinks, validLinks, 
} from '../src/controller.js';
import { mdLinks } from '../src/mdLinks.js';

describe.only('isAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof isAbsolute).toBe('function');
  });
  it('Debería devolver true si es ruta absoluta', () => {
    expect(isAbsolute('C:\\My Program\\recursión')).toBe(true);
  });
  it('Debería devolver false si es una función relativa', () => {
    expect(isAbsolute('.\\recursión')).toBe(false);
  });
});
describe.only('convertToAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof convertToAbsolute).toBe('function');
  });
  it('Debería devolver una ruta absoluta a partir de una ruta relativa', () => {
    // console.log(convertToAbsolute('..\\..\\markdown\\LIM008-fe-md-links'));
    expect(convertToAbsolute('.\\..\\LIM008-fe-md-links')).toBe('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links');
  });
});
// Test para isDirectorySync
describe('isDirectorySync', () => {
  it('Debería ser una función', () => {
    expect(typeof isDirectorySync).toBe('function');
  });
  it('Debería devolver true si la ruta es un directorio', () => {
    expect(isDirectorySync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links')).toBe(true);
  });
  it('Debería devolver false si la ruta no es un directorio', () => {
    expect(isDirectorySync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\src\\controller.js')).toBe(false);
  });
});

// Test para isFileSync
describe('isFileSync', () => {
  it('Deberia ser una función', () => {
    expect(typeof isFileSync).toBe('function');
  });
  it('Debería devolver true si es un archivo', () => {
    expect(isFileSync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\src\\controller.js')).toBe(true);
  });
  it('Debería devolver false si no es un archivo', () => {
    expect(isFileSync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\src')).toBe(false);
  });
});
// Test para readDirectorySync
describe('readDirectorySync', () => {
  it('Debería ser una función', () => {
    expect(typeof readDirectorySync).toBe('function');
  });
  it('Debería devolver un array con las rutas absolutas de los archivos .md que se encuentran en el directorio', () => {
    //    console.log(readDirectorySync('C:\\Users\\Laboratoria\\Desktop'));
    expect(readDirectorySync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest')).toEqual(['C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md']);
  });
});
// Test para readFileSync
describe('readFileSync', () => {
  it('Debería ser una función', () => {
    expect(typeof readFileSync).toBe('function');
  });
  it('Debería devolver el contenido del archivo .md', () => {
    //    console.log(readFileSync('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'));
    expect(readFileSync('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md')).toEqual('HOLA Como estas [Markdown](https://es.wikipedia.org/wiki/Markdown)');
  });
});
// Test para markedLinks
describe('markedLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof markedLinks).toBe('function');
  });
  it('Debería devolver el contenido del archivo .md', () => {
    expect(markedLinks('HOLA Como estas [Markdown](https://es.wikipedia.org/wiki/Markdown)')).toBe('<p>HOLA Como estas <a href="https://es.wikipedia.org/wiki/Markdown">Markdown</a></p>' + '\n');
  });
});


// Test para getAttribute
describe('getLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('Debería devolver el contenido del archivo .md', () => {
    console.log(getLinks(['C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md']));
    //  expect(markedLinks('HOLA Como estas [Markdown](https://es.wikipedia.org/wiki/Markdown)')).toEqual('<p>HOLA Como estas <a href="https://es.wikipedia.org/wiki/Markdown">Markdown</a></p>' + '\n');
  });
});
// TEST PARA MDLINKS
describe('mdLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Debería devolver el contenido del archivo .md', () => {
    console.log(mdLinks('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest'));
    //  expect(mdLinks('HOLA Como estas [Markdown](https://es.wikipedia.org/wiki/Markdown)')).toBe('<p>HOLA Como estas <a href="https://es.wikipedia.org/wiki/Markdown">Markdown</a></p>'+'\n');
  });
});
// Test para validar links
const arrRoutes = ['C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'];
const linkValidate = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file:
        'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}];

describe('validLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof validLinks).toBe('function');
  });
  it('Debería devolver el status del link', (done) => {
    return validLinks(arrRoutes)
      .then(arrRoute => {
        arrRoute;
        expect(arrRoute).toEqual(linkValidate);
        done();
      });
    // console.log(validLinks('https://es.wikipedia.org/wiki/Markdown'));
    //     //  expect(mdLinks('HOLA Como estas [Markdown](https://es.wikipedia.org/wiki/Markdown)')).toBe('<p>HOLA Como estas <a href="https://es.wikipedia.org/wiki/Markdown">Markdown</a></p>'+'\n');
  });
});
