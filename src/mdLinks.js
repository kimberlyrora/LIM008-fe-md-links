const paths = require('path');
 import { isAbsolute,
convertToAbsolute,
isDirectorySync,
readDirectorySync,
isFileSync,
markedLinks} from './controller.js'
import { readFileSync } from 'fs';

export const mdLinks = (root, options) => {
    let path;
if(isAbsolute(root)){
path = root;
} else {
    path = convertToAbsolute(root);
};
if(isDirectorySync(path)){
    readDirectorySync(path).forEach(element => {
        const eachFile = readFileSync(element).toString();
        if(eachFile !== ''){
          const markFile = markedLinks(eachFile);
          return markFile;
        }
    })
 } else { 
      if(isFileSync(path) && paths.extname === '.md'){
          const eachFile = readFileSync(path);
          const markFile = markedLinks(eachFile);
      }
  }
}