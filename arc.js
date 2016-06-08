const fs = require('fs');

module.exports = {
  read(location) {
    return JSON.parse(fs.readFileSync(location).toString());
  },

  write(location, arc) {
    fs.writeFileSync(location, JSON.stringify(arc, null, 2));
    return;
  }
};