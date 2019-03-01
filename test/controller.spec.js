import { isAbsolute, convertToAbsolute, isDirectorySync, isDirectoryAsync, readDirectorySync, isFileSync, readDirectoryAsync, readArrayFiles } from '../src/controller.js';
describe('isAbsolute', () => {
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
describe('convertToAbsolute', () => {
    it('Debería ser una función', () => {
        expect(typeof convertToAbsolute).toBe('function');
    });
    it('Debería devolver una ruta absoluta a partir de una ruta relativa', () => {
        // console.log(convertToAbsolute('.\\recursión'));
        expect(convertToAbsolute('.\\recursión')).toBe('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\recursión');
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
// Test para isDirectoryAsync
describe('isDirectoryAsync', () => {
    it('Debería ser una función', () => {
        expect(typeof isDirectoryAsync).toBe('function');
    });
    it('Debería devolver true si la ruta es un directorio', (done) => {
        const cb = (undefined, result) => {
        expect(result).toBe(true);
        done();
        };
        isDirectoryAsync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\src', cb)
    });
    it('Debería devolver false si la ruta es un directorio', (done) => {
        const cb = (undefined, result) => {
        expect(result).toBe(true);
        done();
        };
        isDirectoryAsync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\src', cb)
    });
});
describe('isFileSync', () => {
    it('Deberia ser una función', () => {
        expect (typeof isFileSync).toBe('function');
    });
    it('Debería devolver true si es un archivo', () => {
        expect(isFileSync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\src\\controller.js')).toBe(true);
    });
    it('Debería devolver false si no es un archivo', () => {
        expect(isFileSync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\src')).toBe(false);
    })
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
    // it('Debería devolver false si la ruta no es un directorio', () => {
    //     expect(isDirectory('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\src\\controller.js')).toBe(false);
    // });
});
// Test para readDirectoryAsync
// describe('readDirectoryAsync', () => {
//     it('Debería ser una función', () => {
//         expect(typeof readDirectoryAsync).toBe('function');
//     });
//     it('Debería devolver un array con las rutas absolutas de los archivos .md que se encuentran en el directorio', (done) => {
//         const callback = (undefined, result) => {
//             console.log(result);
//             done();
//         };
//         readDirectoryAsync('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest',callback)
//     });
// });
// Test para recorrear array de rutas de archivos .md
describe('readArrayFiles', () => {
    it('Debería ser una función', () => {
        expect(typeof readArrayFiles).toBe('function');
    });
    it('Debería', () => {
        expect(readArrayFiles()).toBe();
    })
});