var express = require('express');
var app = express();

var PORT = 8080;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index.html')
})

var server = app.listen(PORT, function () {
  console.log('Now listening on PORT:' + PORT);
});