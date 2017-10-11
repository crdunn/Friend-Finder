//required npm packages
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App to use port 3000 or the port on Heroku
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//pulls in the routing commands from the nested folder
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

