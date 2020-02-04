"use strict";
var spawn = require('child_process').spawn;
const go = spawn('go', ['run', 'main.go'], { stdio: 'inherit' });
go.on('close', (code) => {
	process.exit(code);
});
