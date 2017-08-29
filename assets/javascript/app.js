// ON LOAD

$(document).ready(function() {

$("#start-game").on("click", launchQA);

// GLOBAL VARIABLES

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var currentIndex = -1;
var countdown = 10;
var intervalId;
var timeBetweenQuestions;
var correctAnswerIndex;

var qaArray = [
	{
		question: "How far is the Moon moving away from the Earth each year?",
		answers: ["3.8cm", "3.8m", "3.8km", "3.8 light years"],
		correctAnswerIndex: 0
		// pic_correct: 'PATH',
		// pic_wrong: 'PATH',
	},
	{
		question: "In what month is the Earth closest to the sun?",
		answers: ["February", "January", "September", "December"],
		correctAnswerIndex: 1
		// pic_correct: 'PATH',
		// pic_wrong: 'PATH',

	}
	];


// FUNCTIONS 

function startCountdown() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	countdown--;
	$("#countdown").html("<h2>Time remaining: " + countdown + "</h2>");
		if (countdown === 0) {
	    stop();
	    timeUp();
	    // console.log("Time Up!");
		}
}

function stop() {
	clearInterval(intervalId);
}

function launchQA() {

	$("button").remove();
	startCountdown();

	for (var currentIndex = 0; currentIndex < qaArray.length; currentIndex++) {
	
	$("#questions").html("<h2>" + qaArray[currentIndex].question + "</h2>");
	$("#answer0").html("<h3>" + qaArray[currentIndex].answers[0] + "</h3>");
	$("#answer1").html("<h3>" + qaArray[currentIndex].answers[1] + "</h3>");
	$("#answer2").html("<h3>" + qaArray[currentIndex].answers[2] + "</h3>");
	$("#answer3").html("<h3>" + qaArray[currentIndex].answers[3] + "</h3>");

	console.log(qaArray[currentIndex].question);

	};

  $('.answer').click(function() {
  	stop();
  	var userAnswer = $('.answer').index(this);
	  	if (userAnswer === qaArray[currentIndex].correctAnswerIndex) {
				correctAnswer();
				// advance();
	  	}
	  	else {
				incorrectAnswer();
				// advance();
	  	}
  });

}

function correctAnswer() {
	$('#main-panel').empty().html("<h3>Correct!</h3>");
	correctAnswers++;
	console.log("Correct answers: " + correctAnswers);
	timeBetweenQuestions = setTimeout(function() {
    console.log("next question");
    advance();
  }, 3000);
}

function incorrectAnswer() {
	$('#main-panel').empty().html("<h3>Stupid! You're so stupid! <br><br> The correct answer was XXXXX.</h3>");
	incorrectAnswers++;
	console.log("Incorrect answers: " + incorrectAnswers);
	// console.log(qaArray[i].answers[correctAnswerIndex]);
	timeBetweenQuestions = setTimeout(function() {
    console.log("next question");
    advance();
  }, 3000);
}

function timeUp() {
	$('#main-panel').empty().html("<h3>Time's up! <br><br> The correct answer was XXXXX.</h3>");
	unanswered++;
	console.log("Unanswered: " + unanswered);
	timeBetweenQuestions = setTimeout(function() {
    console.log("next question");
    advance();
  }, 3000);
}

function advance() {
	currentIndex++;
	countdown = 10;
	startCountdown();

}

function resultScreen() {

	if (currentIndex>10) {
	$("#questions").html("All done!");
	$('#answer0').html("Correct answers: " + correctAnswers);
	$('#answer1').html("Incorrect answers: " + incorrectAnswers);
	$('#answer2').html("Unanswered: " + unanswered);
	$('#results').html("Start over?"); // need to add reset
	};

}

function reset() {
	$("button").show();
	launchQA();
}

});




