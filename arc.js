const path = require('path');
const fs = require('fs');

module.exports = {
  read: function(location) {
    return JSON.parse(fs.readFileSync(location).toString());
  },

  write: function(location, arc) {
    fs.writeFileSync(location, JSON.stringify(arc, null, 2));
    return;
  }
};