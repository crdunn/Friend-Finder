var friendArray = require("../data/friend");
var choiceIndex = 0;

module.exports = function(app) {
	//This get route will post all the possible friends from the friend array.
	app.get("/api/friends", function(req, res) {
		res.json(friendArray);
	});
};