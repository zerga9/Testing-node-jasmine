var express = require("express");
var generator = require('./generator');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  var number = req.query.number;
  console.log(number);
  var helloWorldArray = generator.generateHelloWorld(number);

  res.status(200).send(helloWorldArray);
});

var server = app.listen(port, function () {
  console.log("Express server listening on port" + port);
});
