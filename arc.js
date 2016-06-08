const path = require('path');
const fs = require('fs');

module.exports = {
  read: function(location) {
    return JSON.parse(fs.readFileSync(location).toString());
  },

  write: function(location) {
    fs.writeFileSync(location, JSON.stringify(bookizArc, null, 2));
    return;
  }
};