function read(location) {
    'use strong';

    const fs = require('graceful-fs');

    return new Promise((resolve, reject) => {
        fs.readFile(location, (err, data) => {
            if (err) {
                let msg = 'Did not find the arc!';
                reject(new Error(msg));
            }
            return resolve(data);
        });
    });
}

module.exports.read = read;