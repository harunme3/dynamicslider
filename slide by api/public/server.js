const express = require('express');
const path = require('path');

const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});
// Static route for files in the current directory...
// Note that this serves all files relative to the given
// path, even ones you probably don't want.
app.use(express.static(__dirname));

// Note: you should really put these files in a subdirectory
// And use static like this:
//app.use('/images', express.static(__dirname +'/images'));



app.listen(8100, function () {
    console.log('Listening on port: 8100!');
});