$(document).ready(function() {
//Create timer at top of page. Set for 30 second countdown
	//variable for total time
	var timeLeft = 30;
	//function for timer  counts down from 30 seconds
	function startTimer () {
		var countdownTimer = setInterval(function() {
			//console.log(timeLeft);
			timeLeft = (timeLeft - 1);
			$("#timeLeft").html("Time Remaining: " + timeLeft + " seconds");
			if (timeLeft === 0) {
				clearInterval(countdownTimer);
//end game (show result counters
				displayScore();
			}
		}, 1000);
	}
//remove style on quiz div to show questions & radio buttons for game start
	function displayQuiz () {
		$(".quiz").removeAttr("style");
	}
//on click event for start button - starts timer and displays quiz div
	$("#start").on("click", function(event) {
		displayQuiz();
		startTimer();
	});

/* IDEA for score counter = currently not working
//function to show results when game ends
	function endGame() {
		var results = $("input[type=radio]:checked");
		for (var i = 0; i < results.length; i++) {
			results[i]
			console.log(results[i].value);

		if (results[i].value == true) {
			$(results[i]).addClass("correct")
		} else {
			$(results[i]).addClass("incorrect")
		}

	}
*/

	var correctAnswersCount = 0;
	var incorrectAnswersCount = 0;

	function displayScore () {
		$("#right").text(correctAnswersCount);
		$("#wrong").text(incorrectAnswersCount);
	}

	$("input").on("click",  function () {
		if(this.value == "true") {
			correctAnswersCount++;
		} else if (this.value = "false") {
			incorrectAnswersCount++;
		}
	});


//on click event for submit button - runs endGame function
	$("#submit").on("click", function(event) {
		displayScore();
	});
});

/*
//variables for calculating answers when game ends
	var correctAnswers = [];
	var incorrectAnswers = [];
	var unanswered = [];

	console.log(this);
	console.log(this.value);

	/*function endGame () {
		for (i = 0, i < correctAnswers.length, i++) {
			if (value == "right") {
				
				correctAnswers.push("right");
				
			}
		}
	} 
	
//for loop to cycle through answers and push right value to correct answers & wrong value to incorrect Answers

//game End function
	//stop timer
	//make scores to show in alert (correct, incorrect, unanswered)
	//reset game?

//reset game function?

			//alert with answers 

//on click event for submit button - run game end function

//array to hold answer, if userGuess == answer then increase counter

//If userGuess !== answer then increase loss counter
//add these counters to screen at end of round

//Function to record right and wrong answers

//Add answers to array for counters
*/

