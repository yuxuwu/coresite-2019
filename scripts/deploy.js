var ghpages = require("gh-pages");

ghpages.publish("public/", ()=>{
	console.log("Deployed to branch 'gh-pages'");
});