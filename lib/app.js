const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});