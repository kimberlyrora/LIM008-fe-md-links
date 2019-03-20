#!/usr/bin/env node
const [,, ...args] = process.argv;
cliJs(args).then(resp => console.log(resp));
