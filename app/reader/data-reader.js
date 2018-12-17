let readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

let readLineCallback;

module.exports = {
    init: () => {
        rl.on('line', function (line) {
            if (readLineCallback) {
                readLineCallback(line);
            }
        }).on('close', function () {
            process.exit(0);
        });
    },
    read: (label, callback) => {
        readLineCallback = callback;
        rl.setPrompt(label);
        rl.prompt();
    },
    close: () => {
        rl.close();
    }
};