#!/usr/bin/env node
"use strict";

var _mdLinks = require("./controller/mdLinks.js");

const [,, ...args] = process.argv;
const options = {
  validate: false,
  status: false
}; // console.log(`Hello World ${args}`);

const route = args[0];

if (args.length === 1) {
  (0, _mdLinks.mdLinks)(route, options).then(resp => console.log(resp));
}