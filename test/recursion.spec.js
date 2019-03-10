import { readDirectorySync } from '../src/recursion.js';
const outputForThirdCase = ['C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md',
  'C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md' ];
// Test para readDirectorySync
describe('readDirectorySync', () => {
  it('Debería ser una función', () => {
    expect(typeof readDirectorySync).toBe('function');
  });
  it('Debería devolver un array con las rutas absolutas de los archivos .md que se encuentran en el directorio', () => {
    expect(readDirectorySync('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample')).toEqual(['C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md']);
  });
  it('Debería devolver un array con las rutas absolutas de los archivos .md que se encuentran en el directorio', () => {
    expect(readDirectorySync('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md')).toEqual(['C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\directoryExample\\FILEMD2.md']);
  });
  it('Debería devolver un array con las rutas absolutas de los archivos .md que se encuentran en el directorio', () => {
    expect(readDirectorySync('C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest')).toEqual(outputForThirdCase);
  });
});