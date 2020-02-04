"use strict";
const path = require('path');
var spawn = require('child_process').spawn;
console.log(path.join(__dirname, 'main.go'))
const go = spawn('go', ['version'], { stdio: 'inherit' });
go.on('close', (code) => {
	process.exit(code);
});
