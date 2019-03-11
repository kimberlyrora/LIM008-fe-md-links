import {validLinks} from '../src/controller/validate.js';
// Input para link válido
const arrLinks = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file:
          'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}];
// Output para link válido
const linkValidate = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file:
        'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 200,
  statusText: 'OK'
}];
// Input para link NO válido
const arrLinks2 = [{
  href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assi',
  text: 'Markdown',
  file:
            'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md'
}];
// Output para link NO válido
const linkValidate2 = [{
  href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assi',
  text: 'Markdown',
  file:
          'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md',
  status: 404,
  statusText: 'fail'
}];
describe('validLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof validLinks).toBe('function');
  });
  it('Debería devolver el status de un link válido', (done) => {
    return validLinks(arrLinks)
      .then(arrLink => {
        arrLink;
        expect(arrLink).toEqual(linkValidate);
        done();
      });
  });
  it('Debería devolver el status de un link NO válido', (done) => {
    return validLinks(arrLinks2)
      .then(arrLink2 => {
        arrLink2;
        expect(arrLink2).toEqual(linkValidate2);
        done();
      });
  });
});
