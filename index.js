#! /usr/bin/env node

// ref: http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm

'use strict'

const shell = require('shelljs');

let args = process.argv.slice(2);
let iMinutesToWait = args[0];
let sScriptToRun = args[1];
let bCallImmediately = args[2];

main();

async function main() {
    if (bCallImmediately) iterate();
    setInterval(function () {
        iterate();
    }, iMinutesToWait * 60 * 1000);
}

function iterate() {
    if (shell.exec(sScriptToRun).code !== 0) console.log('\r\n\Sloth error: Unable to run the identified command.\r\n');
}