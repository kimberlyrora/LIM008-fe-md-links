#!/usr/bin/env node
"use strict";

const [,, ...args] = process.argv;

const cliJs = require('./controller/cli-controller.js');

cliJs(args).then(resp => console.log(resp));