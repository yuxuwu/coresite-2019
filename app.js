var express = require("express"),
	app 	= express();

/// Require routes
var indexRoutes = require("./routes/index");

/// Middleware
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// Routes
app.use("/", indexRoutes);

var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log("Started on PORT " + port);
});
