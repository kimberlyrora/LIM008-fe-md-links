const paths = require('path');
 import { isAbsolute,
convertToAbsolute,
isDirectorySync,
readDirectorySync,
isFileSync,
markedLinks, getAttr, readFileSync} from './controller.js'
import { readFileSync } from 'fs';

export const mdLinks = (root, options) => {
    let answer;
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
          answer = markedLinks(eachFile); 
          answer
        }
    })
 } else { 
      if(isFileSync(path) && paths.extname === '.md'){
          const eachFile = readFileSync(path);
          answer = markedLinks(eachFile);
      }
  }
  return answer;
}