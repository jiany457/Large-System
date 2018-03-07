var fs = require("fs");

for(var i=0; i<100; i++){
fs.appendFileSync("new-cool-life","hello world");
}


fs.appendFileSync("new-cool-life", { encoding: "ascii"}, "hello world");
