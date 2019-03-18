import { cliJsFunc } from '../src/cli.js';
import { crearTemplateDeArray } from '../src/controller/view-controller.js';
const mockCliJs = (args) => { 
  new Promise((resolve, reject) => {
    switch (args) {
    case (args.length === 1):
     resolve(resp => console.log(crearTemplateDeArray(resp)));
      break;
    case (args[1] === '--validate'):
      break;
    case (args[1] === '--stats'):
      break;
    case (args[1] === '--validate' && args [2] === '--stats'):
      break;
    } 
  });
};
describe('cliJsFunc', () => {
  it('Debería ser una función', () => {
    expect(typeof cliJsFunc).toBe('function');
  });
  it('Debería devolver un array de objetos donde cada objeto es un link', () => {
    console.log(cliJsFunc([`${process.cwd()}\\directoryForTest\\FILEMD.md`]));
    expect(cliJsFunc([`${process.cwd()}\\directoryForTest\\FILEMD.md`])).toEqual(output);
  });
});