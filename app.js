var express = require("express"),
	app 	= express();

/// Middleware
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("index.html");
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log("Started on PORT " + port);
});
