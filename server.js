const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

var app = express();

var PORT = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
 
 // data parsing
app.use(bodyParser.urlencoded({ extended: false }));

// POST Method
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Check Connection 
app.listen(PORT, function (){
	console.log("App on " + PORT);
});

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

