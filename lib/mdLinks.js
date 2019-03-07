"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _controller = require("./controller.js");

const paths = require('path');

const mdLinks = (root, options) => {
  let answer;
  let path;

  if ((0, _controller.isAbsolute)(root)) {
    path = root;
  } else {
    path = (0, _controller.convertToAbsolute)(root);
  }

  ;

  if ((0, _controller.isDirectorySync)(path)) {
    (0, _controller.readDirectorySync)(path).forEach(element => {
      const eachFile = (0, _controller.readFileSync)(element).toString();

      if (eachFile !== '') {
        answer = (0, _controller.markedLinks)(eachFile);
        answer;
      }
    });
  } else {
    if ((0, _controller.isFileSync)(path) && paths.extname === '.md') {
      const eachFile = (0, _controller.readFileSync)(path);
      answer = (0, _controller.markedLinks)(eachFile);
    }
  }

  return answer;
};

exports.mdLinks = mdLinks;