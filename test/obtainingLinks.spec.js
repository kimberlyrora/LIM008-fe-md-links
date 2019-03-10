import { getLinks } from '../src/obtainingLinks.js';
// Test para getLinks
const output = [{ 
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file:
 'C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'}];
describe('getLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('Debería devolver un array de objetos donde cada objeto es un link', () => {
    expect(getLinks(['C:\\Users\\User\\Desktop\\markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'])).toEqual(output);
  });
});