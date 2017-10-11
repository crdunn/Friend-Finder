var friendArray = require("../data/friend");
var choiceIndex = 0;

module.exports = function(app) {
	//This get route will post all the possible friends from the friend array.
	app.get("/api/friends", function(req, res) {
		res.json(friendArray);
	});
	//this route is supposed to take in the array from the survey page and perform the logic, but it isn't working now.  When it does work, the res.json arguement will be turned from a string to an index and the findBest function will be uncommented
	app.post("/api/friends", function(req, res) {
		//findBest();
		res.json("friendArray[choiceIndex].name");
	});
};

//this function correctly compares two arrays and finds the best match between them.
function findBest(){
	var diffArray = [];
	var total = 0;
	var totalArray = [];
	
	//This for loop iterates through all of the avaiable friends
	for (var j = 0; j < friendArray.length; j++){
		var scoresArray = friendArray[j].scores

		//this for loop finds the absolute value of the difference between each element in the user's scores and the potential friends' scores
		for (var i = 0; i < newFriend.length; i++){
			diffArray[i] = Math.abs(newFriend[i] - scoresArray[i]);
		};
		//this loop add up the differences into one number
		for (var k = 0; k < diffArray.length; k++){
			total += diffArray[k];
		};
		//totalArray stores the total difference between the user and the potential friends at the same index
		totalArray[j] = total;
		//here, I reset the total variable to zero at the end of the loop
		total = 0
	};
	//this checks the entire total array and finds the smallest elementand returns it.  That is the potential firends with the smallest difference with the user.
	for (var l = 1; l < totalArray.length; l++){
		var p = l-1;
		if (totalArray[l] < totalArray[p]){
			choiceIndex = l;
		}else {
			choiceIndex = p;
		};

	};
};