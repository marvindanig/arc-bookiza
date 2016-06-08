'use strong';

const fs = require('graceful-fs');

module.exports = {
    read(location) {
        return new Promise((resolve, reject) => {
            fs.readFile(location, (err, data) => {
                if (err) {
                    let msg = 'Did not find the arc!'; 
                    reject(new Error(msg));
                }
                return resolve(data);
            });
        });
    },

    write(location, arc) {
        fs.writeFileSync(location, JSON.stringify(arc, null, 2));
        return;
    }
};
