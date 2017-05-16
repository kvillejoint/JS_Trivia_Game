$(document).ready(function() {
//Create timer at top of page. Set for 30 second countdown
	//variable for total time
var timeLeft = 30;

//var countdownTimer = setInterval();

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

	var correctAnswersCount = 0;
	var incorrectAnswersCount = 0;

	function displayScore () {
		$("#true").text("Correct Answers: " + correctAnswersCount);
		$("#false").text("Incorrect Answers:  " + incorrectAnswersCount);
	}

	$("input").on("click",  function () {
		if(this.value == "true") {
			correctAnswersCount++;
		} else if (this.value == "false") {
			incorrectAnswersCount++;
		}
	});

	function stopTimer () {
		var countdownTimer = setInterval(function() {
			clearInterval(countdownTimer);
		})
	};
	
//on click event for submit button - runs endGame function
	$("#submit").on("click", function(event) {
		stopTimer();
		displayScore();
	});
});