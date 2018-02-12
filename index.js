#! /usr/bin/env node

// ref: http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm

'use strict'

const shell = require('shelljs');

main();

async function main() {
    let args = process.argv.slice(2);
    let iMinutesToWait = args[0];
    let sScriptToRun = args[1];

    setInterval(function () {
        if (shell.exec(sScriptToRun).code !== 0) console.log('\r\n\Sloth error: Unable to run the identified command.\r\n');
    }, iMinutesToWait * 60 * 1000);
}
