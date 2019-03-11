import { uniqueLinks, brokenLinks, stats } from '../src/stats.js';
const input = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: `${process.cwd()}\\directoryForTest\\FILEMD.md`,
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: `${process.cwd()}\\directoryForTest\\FILEMD.md`,
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://www.w3schools.com/jsref/jsref_reduce.asp',
  text: 'Markdown',
  file: `${process.cwd()}\\directoryForTest\\FILEMD.md`,
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce2',
  text: 'Markdown',
  file: `${process.cwd()}\\directoryForTest\\FILEMD.md`,
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjs',
  text: 'Pruebita',
  file: `${process.cwd()}\\directoryForTest\\FILEMD.md`,
  status: 200,
  statusText: 'OK'
}, {
  href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Refere',
  text: 'Prueba',
  file: `${process.cwd()}\\directoryForTest\\FILEMD.md`,
  status: 404,
  statusText: 'fail'
}];
describe('uniqueLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof uniqueLinks).toBe('function');
  });
  it('Debería devolver el número de links únicos', () => {
    expect(uniqueLinks(input)).toBe(5);
  });
});
describe('brokenLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof brokenLinks).toBe('function');
  });
  it('Debería devolver el número de links rotos', () => {
    expect(brokenLinks(input)).toBe(1);
  });
});
describe('stats', () => {
  it('Debería ser una función', () => {
    expect(typeof stats).toBe('function');
  });
  it('Debería devolver el número de links únicos y totales', () => {
    expect(stats(input)).toBe('\n' + '        Total: 6' + '\n' + '        Unicos: 5' + '\n     ');
  });
  it('Debería devolver el número de links únicos, rotos y totales', () => {
    expect(stats(input, 'validate')).toBe('\n' + '       Total: 6' + '\n' + '       Unicos: 5' + '\n' + '       Rotos: 1' + '\n        ');
  });
});