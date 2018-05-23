
var express = require("express");
// var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });