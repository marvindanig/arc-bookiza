function arc(location){
  const path = require('path');
  const fs = require('fs');

  return JSON.parse(fs.readFileSync(location).toString());
}


module.exports.arc = arc;