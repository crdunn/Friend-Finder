var path = require("path");


module.exports = function(app) {
	//this redirects to the survey page
	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("/", function(req,res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};