//global variables
var playing = false;
var score;
var trialsLeft;

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
	for (var i = 0; i < trialsLeft; i++) {
		$('#trialsLeft').append(" X ");
	}
}