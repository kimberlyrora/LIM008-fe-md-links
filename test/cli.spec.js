import { cliJs } from '../src/controller/cli-controller.js';
const route = 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md';
describe('cliJs', () => {
  it('Debería ser una función', () => {
    expect(typeof cliJs).toBe('function');
  });
  it('Debería devolver algo', (done) => {
    return cliJs([route])
      .then(resp => {
        expect(resp).toBe('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://es.wikipedia.org/wiki/Markdown, Markdown, , \n');
        done();
      });
  });
});
