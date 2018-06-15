var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
	
	$(".crystal").empty();

	randomResult = Math.floor(Math.random() * 101 ) + 19;
	//console.log (random)

	$("#result").html('Random Result: ' + randomResult);

	for(var i = 0; i < 4; i++){
	
		var random = Math.floor(Math.random() * 11) +1;
		//console.log(random);

		var crystal = $("<div>");
			crystal.attr({
			"class": 'crystal', 'data-random': random

			});

			crystal.html(random);

		$(".crystals").append(crystal);	
	}
	
	$("#previous").html("Total Score " + previous);
}



resetAndStart();

////var reset function () {
//	
//}

$(document).on('click', ".crystal", function () {
	
	
	var num = parseInt($(this).attr('data-random'))
	
	previous += num;
	
	$("#previous").html("Total Score: " + previous);
	
	console.log (previous);
	
	if(previous > randomResult) {
		
		lost++;
		
		$("#lost").html("You Lost: " + lost);
		
		previous = 0;
		
		
//		console.log("You lost!!");
		
		resetAndStart();
	}
	
	else if (previous === randomResult) {
		
		win++;
		
		$("#win").html("You Win: " + win);
		
		previous = 0;
		
//		console.log ("You Win!!");
		
		resetAndStart();

	}
});



////PsuedoCode/Directions
//
//	*Four crystals/buttons on the page.
//
//   * Player will be shown a randomNumber (between 19 - 120) at the start of the game in randomNumberBox container
//
//   * Player clicks on a crystal, it will add a specific 	amount of points to the player's totalScore container. 
//
//    * Cystal amounts are hidden (between 1 - 12) until the player clicks a crystal.
//	
//    * When clicked, update (-- | ++) the player's TotalScore counter.
//
//   	* Player wins if their total score matches the random number from the beginning of the game.
//
//   	* Player loses if their score goes above the random number.
//
//   	* Game restarts whenever the player wins or loses.
//
//    * When the game begins again, the player will see a new random number. 
//	
//	* All crystals will have four new hidden values. 
//							
//	* User's score (and score counter) will reset to zero.
//
//   	* The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game. 


//### Reminder: Submission on BCS
//
//* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!
//
//- - -
//
//### Minimum Requirements
//
//Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.
//
//- - -
//
//### Create a README.md
//
//Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:
//
//* [About READMEs](https://help.github.com/articles/about-readmes/)
//
//* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
//
//- - -
//
//### Add To Your Portfolio
//
//After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.
//
//- - -
//
//### One More Thing
//
//If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.
//
//**Good Luck!**
