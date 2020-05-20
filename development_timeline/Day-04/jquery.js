//global variables
var playing = false;
var score;
var trialsLeft;
var step; // used for setInterval
var action;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];

$(function() {

	//click on start reset button
	$('#startreset').click(function() {

		//we are playing
		if (playing == true) {

			//reload page
			location.reload();
		} else {

			//we are not playing
			playing = true; //game initiated

			//set score to 0
			score = 0; //set score to 0
			$('#scorevalue').html(score);

			//show trials left
			$('#trialsLeft').show();
			trialsLeft = 3;
			addHearts();

			//hide game over box
			$('#gameOver').hide();

			//change button text to reset game
			$('#startreset').html('Reset Game');

			//start sending fruits
			startAction();

		}
	});
});


	//are we playing?
		//yes
			//reload page
		//no
			//show  trials left
			//change button text to "reset game"
			//1.create a random fruit
			//define a random step
			//2.move fruit down one step every 30sec
				//is fruit too low?
					//no->repeat nb2
					//yes->any trials left?
						//yes: repeat nb1
						//no: show game over, button text: start game

//slice a fruit
	//play sound
	//explode fruit

//functions
function addHearts() {
	$('#trialsLeft').empty(); //remove any html elements if it's applied to it
	for (var i = 0; i < trialsLeft; i++) {
		$('#trialsLeft').append('<img src="images/heart.png" class="life">');
	}
}

//start sending fruits
function startAction() {
	//$('#fruitsContainer').append('<img src="images/apple.png" class="fruit">')

	//generate a fruit
	$('#fruit1').show();
	chooseFruit(); //choose a random fruit
	$('#fruit1').css({
		'left': Math.round(550*Math.random()), // fruits will appear in a random horizontal position
		/*'top': -100,*/
		'top': -50,
	});
	// random position

	//generate a random step
	step = 1+ Math.round(5*Math.random()); // changing the step (between 1 and 6)

	// Move fruit down one step every 10ms
	action = setInterval(function() {

		// HARD LOGIC!! but it move down fruit by one step
		$('#fruit1').css('top', $('#fruit1').position().top + step);

		//check if the fruit is too low
		if($('#fruit1').position().top > $('#fruitsContainer').height()) {
			//check if we have trials left
			if (trialsLeft > 1) {
				//generate a fruit
				$('#fruit1').show();
				chooseFruit(); //choose a random fruit
				$('#fruit1').css({
					'left': Math.round(550*Math.random()), // fruits will appear in a random horizontal position
					/*'top': -100,*/
					'top': -50,
				});
				// random position

				//generate a random step
				step = 1+ Math.round(5*Math.random()); // changing the step (between 1 and 6)

				//reduce trials by one
				trialsLeft--;

				//populate trialsLeft box
				addHearts();

			} else { // game over
				playing = false;  //we are not playing anymore
				$('#startreset').html('Start Game'); // change button to Start Game
				$('#gameOver').show();
				$('#gameOver').html('<p>Game Over!</p><p>Your score is ' + score + '</p>');
				$('#trialsLeft').hide();
				stopAction();
			}
		}
	}, 10);
}

// generate a random fruit
function chooseFruit() {
	$('#fruit1').attr('src', "images/" + fruits[Math.round(Math.random()*8)] + ".png"); // adds an attribute to a HTML element
}

//Stop dropping fruits

function  stopAction() {
	clearInterval(action);
	$('#fruit').hide();
}