"use strict";
const path = require('path');
var spawn = require('child_process').spawn;
const go = spawn('go', ['run', path.join(__dirname, 'main.go')], { stdio: 'inherit' });
go.on('close', (code) => {
	process.exit(code);
});
