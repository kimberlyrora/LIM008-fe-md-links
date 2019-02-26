import { isAbsolute, convertToAbsolute, isDirectory } from '../src/controller.js';
describe('isAbsolute', () => {
    it('Debería ser una función', () => {
        expect(typeof isAbsolute).toBe('function');
    });
    it('Debería devolver true si es ruta absoluta', () => {
        expect(isAbsolute('C:\\My Program\\recursión')).toBe(true);
    });
    it('Debería devolver flase si es una función relativa', () => {
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
describe('isDirectory', () => {
    it('Debería ser una función', () => {
        expect(typeof isDirectory).toBe('function');
    });
    it('Debería devolver true si la ruta es un directorio', () => {
        expect(isDirectory('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links')).toBe(true);
    });
    it('Debería devolver false si la ruta no es un directorio', () => {
        expect(isDirectory('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\src\\controller.js')).toBe(false);
    });
});