import { cliJs } from '../src/cli.js';
const route = 'C:\\Users\\Laboratoria\\Desktop\\Markdown\\LIM008-fe-md-links\\directoryForTest';
describe('cliJs', () => {
  it('Debería ser una función', () => {
    expect(typeof cliJs).toBe('function');
  });
  it('Debería devolver algo', (done) => {
    return cliJs(route)
      .then(route => {
        expect(route).toBe('algo');
        done();
      });
  });
});
