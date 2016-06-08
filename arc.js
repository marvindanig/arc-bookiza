function arc(){
  const path = require('path');
  const fs = require('fs');

  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', '.bookizarc')).toString());
}


module.exports.arc = arc;