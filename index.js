"use strict";

const spawn = require('child_process').spawn;

async function run() {
	var args = Array.prototype.slice.call(arguments);
	const cmd = spawn(args[0], args.slice(1), { stdio: 'inherit' });
	const exitCode = await new Promise( (resolve, reject) => {
			cmd.on('close', resolve);
	});
	if (exitCode != 0) {
		process.exit(exitCode);
	}
}

console.log(">> Time is: ", (new Date(Date.now())).toLocaleString());
console.log("");

(async function() {
	await run('git', 'log', '-1');
	// await run('go', 'version');
	// const path = require('path');
	// await run('go', 'run', path.join(__dirname, 'main.go'))
})()
