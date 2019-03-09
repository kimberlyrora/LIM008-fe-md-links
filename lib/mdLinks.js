"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _controller = require("./controller.js");

var _controllerOptions = require("./controller-options.js");

const options = {
  validate: false,
  status: false
};

const mdLinks = (route, obj) => new Promise((resolve, reject) => {
  const absRoute = (0, _controller.readRoute)(route);
  const arrArchivosMd = (0, _controller.readDirectorySync)(absRoute);
  let arrLink = (0, _controller.getLinks)(arrArchivosMd);
  let answer;

  if (obj.validate && obj.status) {
    (0, _controller.validLinks)(arrLink).then(res => {
      const resuSts = (0, _controllerOptions.stats)(res, 'validate'); //console.log('los2', resuSts);

      return resuSts;
    }).then(res => resolve(res));
  } else if (obj.status) {
    resolve((0, _controllerOptions.stats)(arrLink));
  } else if (obj.validate) {
    (0, _controller.validLinks)(arrLink).then(obj => {
      const resValid = (0, _controllerOptions.crearTemplateDeArray)(obj); //console.log('valid', resValid);

      return resValid;
    }).then(res => resolve(res));
  } else {
    resolve((0, _controllerOptions.crearTemplateDeArray)(arrLink));
  }
});

exports.mdLinks = mdLinks;
mdLinks('..\\directoryForTest', options).then(resp => console.log('soloyo', resp));