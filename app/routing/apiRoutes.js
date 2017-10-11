var friendArray = require("../data/friend");
var choiceIndex = 0;

module.exports = function(app) {
	
	app.get("/api/friends", function(req, res) {
		res.json(friendArray);
	});

	app.post("/api/friends", function(req, res) {
		//findBest();
		res.json(newFriend);
	});
};


function findBest(){
	var diffArray = [];
	var total = 0;
	var totalArray = [];

	for (var j = 0; j < friendArray.length; j++){
		var newFriend = friendArray[j].scores

		for (var i = 0; i < initArray.length; i++){
			diffArray[i] = Math.abs(initArray[i] - newFriend[i]);
		};
		for (var k = 0; k < diffArray.length; k++){
			total += diffArray[k];
		};
		totalArray[j] = total;
		total = 0
	};

	for (var l = 1; l < totalArray.length; l++){
		var p = l-1;
		if (totalArray[l] < totalArray[p]){
			choiceIndex = l;
		}else {
			choiceIndex = p;
		};

	};
};