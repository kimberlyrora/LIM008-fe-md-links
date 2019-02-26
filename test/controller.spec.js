import { isAbsolute } from '../src/controller.js';
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