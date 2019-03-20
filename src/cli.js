#!/usr/bin/env node
const [,, ...args] = process.argv;
const cliJs = require('./controller/cli-controller.js');
cliJs(args).then(resp => console.log(resp));
