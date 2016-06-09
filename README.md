# Arc-Bookiza

Returns the arc object to register and connect bookiza client.


## Usage:


```
    const arc = require('arc-bookiza');

    let location = path.join(__dirname, '..', '.bookizarc');

    arc.read(location)
        .then((data) => {
          // Do something with arc.rc values.
          ...
          ... 
          })
        .catch((err) => {
            // handle error.
          });
```