var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3004, function() {
  console.log('up 3004');
});
