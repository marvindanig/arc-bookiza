'use strong';

const fs = require('graceful-fs');

module.exports = {
    read(location) {
        return new Promise((resolve, reject) => {
            fs.readFile(location, (err, data) => {
                if (err) {
                    let msg = 
                      { "error": "Unregistered client", "help": "Try $ bookiza register --help" };
                    reject(new Error(msg));
                }
                return JSON.parse(resolve(data));
            });
        });
        // return JSON.parse(fs.readFileSync(location).toString());
    },

    write(location, arc) {
        fs.writeFileSync(location, JSON.stringify(arc, null, 2));
        return;
    }
};
