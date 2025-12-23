const { Worker } = require('worker_threads');

new Worker(__dirname + "/a.js");
new Worker(__dirname + "/b.js");
new Worker(__dirname + "/c.js");






