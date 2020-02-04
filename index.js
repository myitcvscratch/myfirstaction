"use strict";
var spawn = require('child_process').spawn;
spawn('go', ['run', 'main.go'], { stdio: 'inherit' });
