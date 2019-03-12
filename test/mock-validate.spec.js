// Mock para validate
import {validLinks} from '../src/controller/validate.js';
const fetchMock = require('../_mocks_/mock-fetch.js');
fetchMock.config.sendAsJson = false;
fetchMock.config.fallbackToNetwork = true;
describe('validLinks', () => {
  it('Debería devolver un array con un objeto correspondiente a un link válido', async() => {
    fetchMock.get('https://www.w3schools.com/jsref/jsref_reduce.asp', { status: 200, statusText: 'OK'});
    const data = await validLinks([{ href: 'https://www.w3schools.com/jsref/jsref_reduce.asp',
      text: 'Haciendo test de fetch-mock para un link válido',
      file:
     'C:\Users\User\Desktop\markdown\LIM008-fe-md-links\directoryForTest\directoryExample\FILEMD2.md' }]);
    expect(data).toEqual([{'href': 'https://www.w3schools.com/jsref/jsref_reduce.asp', 'text': 'Haciendo test de fetch-mock para un link válido', 'file': 'C:\Users\User\Desktop\markdown\LIM008-fe-md-links\directoryForTest\directoryExample\FILEMD2.md', 'status': 200, 'statusText': 'OK'}]);
  });
  it('Debería devolver un array con un objeto correspondiente a un link inválido', async() => {
    fetchMock.get('https://developer.mozilla.org/es/docs/Web/JavaScript/Refere', { status: 404, statusText: 'fail'});
    const data = await validLinks([{ href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Refere',
      text: 'Haciendo test de fetch-mock para un link inválido',
      file:
     'C:\Users\User\Desktop\markdown\LIM008-fe-md-links\directoryForTest\directoryExample\FILEMD2.md' }]);
    expect(data).toEqual([{'href': 'https://developer.mozilla.org/es/docs/Web/JavaScript/Refere', 'text': 'Haciendo test de fetch-mock para un link inválido', 'file': 'C:\Users\User\Desktop\markdown\LIM008-fe-md-links\directoryForTest\directoryExample\FILEMD2.md', 'status': 404, 'statusText': 'fail'}]);
  });
});