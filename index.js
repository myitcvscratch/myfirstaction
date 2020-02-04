"use strict";

const spawn = require('child_process').spawn;
var env = Object.create( process.env );
env.GOPROXY = 'https://proxy.golang.org,direct';
env.GOSUMDB = 'sum.golang.org';
env.GOPRIVATE = '';
env.GONOPROXY = '';
env.GONOSUMDB = '';
env.GOINSECURE = '';

async function run() {
	var args = Array.prototype.slice.call(arguments);
	const cmd = spawn(args[0], args.slice(1), { stdio: 'inherit', cwd: __dirname });
	const exitCode = await new Promise( (resolve, reject) => {
			cmd.on('close', resolve);
	});
	if (exitCode != 0) {
		process.exit(exitCode);
	}
}

(async function() {
	await run('env');
	await run('go', 'env');
	await run('go', 'mod', 'verify');
	const path = require('path');
	await run('go', 'run', path.join(__dirname, 'main.go'));
})()
