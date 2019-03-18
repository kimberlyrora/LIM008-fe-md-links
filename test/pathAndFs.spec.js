import { isAbsolute, convertToAbsolute, isDirectorySync, isFileSync, readFileSync, extFile } from '../src/controller/pathAndFs.js';
// Test para función isAbsolute
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
// Test para función convertToAbsolute
describe('convertToAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof convertToAbsolute).toBe('function');
  });
  it('Debería devolver una ruta absoluta a partir de una ruta relativa', () => {
    expect(convertToAbsolute('.\\..\\LIM008-fe-md-links')).toBe(`${process.cwd()}`);
  });
});
// Test para isDirectorySync
describe('isDirectorySync', () => {
  it('Debería ser una función', () => {
    expect(typeof isDirectorySync).toBe('function');
  });
  it('Debería devolver true si la ruta es un directorio', () => {
    expect(isDirectorySync(`${process.cwd()}`)).toBe(true);
  });
  it('Debería devolver false si la ruta no es un directorio', () => {
    expect(isDirectorySync(`${process.cwd()}\\directoryForTest\\directoryExample\\FILEMD2.md`.normalize())).toBe(false);
  });
});

// Test para isFileSync
describe('isFileSync', () => {
  it('Deberia ser una función', () => {
    expect(typeof isFileSync).toBe('function');
  });
  it('Debería devolver true si es un archivo', () => {
    expect(isFileSync(`${process.cwd()}\\directoryForTest\\directoryExample\\FILEMD2.md`)).toBe(true);
  });
  it('Debería devolver false si no es un archivo', () => {
    expect(isFileSync(`${process.cwd()}`)).toBe(false);
  });
});
// Test para readFileSync
describe('readFileSync', () => {
  it('Debería ser una función', () => {
    expect(typeof readFileSync).toBe('function');
  });
  it('Debería devolver el contenido del archivo .md', () => {
    expect(readFileSync(`${process.cwd()}\\directoryForTest\\FILEMD.md`).toString()).toBe('HOLA Como estas [Markdown](https://es.wikipedia.org/wiki/Markdown)');
  });
});

