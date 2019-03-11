#!/usr/bin/env node
"use strict";

var _mdLinks = require("./controller/mdLinks.js");

const [,, ...args] = process.argv;

if (args[1] === '--validate' && args[2] === '--stats') {
  (0, _mdLinks.mdLinks)(args[0], {
    validate: true,
    stats: true
  }).then(resp => console.log(resp));
} else if (args[1] === '--validate') {
  (0, _mdLinks.mdLinks)(args[0], {
    validate: true,
    stats: false
  }).then(resp => console.log(resp));
} else if (args[1] === '--stats') {
  (0, _mdLinks.mdLinks)(args[0], {
    validate: false,
    stats: true
  }).then(resp => console.log(resp));
} else {
  (0, _mdLinks.mdLinks)(args[0], {
    validate: false,
    stats: false
  }).then(resp => console.log(resp));
}