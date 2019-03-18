import { readDirectorySync } from '../src/controller/recursion.js';
const outputForThirdCase = [`${process.cwd()}\\directoryForTest\\directoryExample\\FILEMD2.md`.normalize(),
  `${process.cwd()}\\directoryForTest\\FILEMD.md`.normalize()];
// Test para readDirectorySync
describe('readDirectorySync', () => {
  it('Debería ser una función', () => {
    expect(typeof readDirectorySync).toBe('function');
  });
  it('Debería devolver un array con las rutas absolutas de los archivos .md que se encuentran en el directorio', () => {
    expect(readDirectorySync(`${process.cwd()}/directoryForTest/directoryExample`)).toEqual([`${process.cwd()}\\directoryForTest\\directoryExample\\FILEMD2.md`.normalize()]);
  });
  it('Debería devolver un array con las rutas absolutas de los archivos .md que se encuentran en el directorio', () => {
    expect(readDirectorySync(`${process.cwd()}/directoryForTest/directoryExample/FILEMD2.md`)).toEqual([`${process.cwd()}/directoryForTest/directoryExample/FILEMD2.md`]);
  });
  it('Debería devolver un array con las rutas absolutas de los archivos .md que se encuentran en el directorio', () => {
    expect(readDirectorySync(`${process.cwd()}/directoryForTest`)).toEqual(outputForThirdCase);
  });
});