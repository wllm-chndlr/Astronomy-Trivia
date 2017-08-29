// ON LOAD

$(document).ready(function() {

$("#start-game").on("click", launchQA);

// GLOBAL VARIABLES

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var countdown = 11;
var intervalId;

var blazingIndex = 0;
var correctAnswerIndex = 0;

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
	},
	{
		question: "Which planet's axial rotation is opposite to the other planets in the solar system?",
		answers: ["Neptune", "Uranus", "Mars", "Venus"],
		correctAnswerIndex: 3
	},
	{
		question: "The Sun's core releases the the equivalent of _______ nuclear bombs every second.",
		answers: ["100,000", "100 million", "100 billion", "100 trillion"],
		correctAnswerIndex: 2
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
	$("#countdown").html("<h2>Timer: " + countdown + "</h2>");
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
	countdown = 11;
	startCountdown();

	$("#questions").html("<h2>" + qaArray[blazingIndex].question + "</h2>");
	$("#answer0").html("<h3>" + qaArray[blazingIndex].answers[0] + "</h3>");
	$("#answer1").html("<h3>" + qaArray[blazingIndex].answers[1] + "</h3>");
	$("#answer2").html("<h3>" + qaArray[blazingIndex].answers[2] + "</h3>");
	$("#answer3").html("<h3>" + qaArray[blazingIndex].answers[3] + "</h3>");

	userGuess();

}

function userGuess() {

	$('.answer').click(function() {
  	stop();
  	var userAnswer = $('.answer').index(this);
	  	if (userAnswer === qaArray[blazingIndex].correctAnswerIndex) {
				correctAnswer();
	  	}
	  	else {
				incorrectAnswer();
	  	}
  })
}

function correctAnswer() {
	$('#main-panel').empty().html("<h3>Correct!</h3>");
	correctAnswers++;
	console.log("Correct answers: " + correctAnswers);
	setTimeout(advance, 3000);
}

function incorrectAnswer() {
	$('#main-panel').empty().html("<h3>Stupid! You're so stupid! <br><br> The correct answer was XXXXX.</h3>");
	incorrectAnswers++;
	console.log("Incorrect answers: " + incorrectAnswers);
	setTimeout(advance, 3000);
}

function timeUp() {
	$('#main-panel').empty().html("<h3>Time's up! <br><br> The correct answer was XXXXX.</h3>");
	unanswered++;
	console.log("Unanswered: " + unanswered);
	setTimeout(advance, 3000);
}

function advance() {
	$('#main-panel').empty();
	blazingIndex++;
	launchQA();
	console.log(qaArray[blazingIndex].answers[1]);
}

function resultScreen() {

	if (blazingIndex>10) {
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