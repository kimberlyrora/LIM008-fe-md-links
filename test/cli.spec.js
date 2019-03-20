const cliJs = require('../src/controller/cli-controller.js');
const route = 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md';
describe('cliJs', () => {
  it('Debería ser una función', () => {
    expect(typeof cliJs).toBe('function');
  });
  it('Debería devolver un link con sus propiedades, href,file y text', (done) => {
    return cliJs([route])
      .then(resp => {
        expect(resp).toBe('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://es.wikipedia.org/wiki/Markdown, Markdown, , \n');
        done();
      });
  });
  it('Debería devolver un link cons sus propiedades href, file, test, status y statusText', (done) => {
    return cliJs([route, '--validate'])
      .then(resp => {        
        expect(resp).toBe('C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest\\FILEMD.md, https://es.wikipedia.org/wiki/Markdown, Markdown, 200, OK\n');
        done();
      });
  });
  it('Debería devolver el calculo de los links totales y unicos', (done) => {
    return cliJs([route, '--stats'])
      .then(resp => {
        expect(resp).toBe('\nTotal: 1\nUnicos: 1');
        done();
      });
  });
  it('Debería devolver el calculo de los links totales, unicos y rotos', (done) => {
    return cliJs([route, '--validate', '--stats'])
      .then(resp => {
        expect(resp).toBe('\nTotal: 1\nUnicos: 1\nRotos: 0');
        done();
      });
  });
});
