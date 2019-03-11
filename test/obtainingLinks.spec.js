import { getLinks } from '../src/controller/obtainingLinks.js';
// Test para getLinks
const output = [{ 
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file:
  `${process.cwd()}\\directoryForTest\\FILEMD.md`}];
describe('getLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('Debería devolver un array de objetos donde cada objeto es un link', () => {
    expect(getLinks([`${process.cwd()}\\directoryForTest\\FILEMD.md`])).toEqual(output);
  });
});