function arc(){
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', '.bookizarc')).toString());
}


module.exports.arc = arc;