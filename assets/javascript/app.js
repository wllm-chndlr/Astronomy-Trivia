// ON LOAD

$(document).ready(function() {

	$('#start-over').hide();

// GLOBAL VARIABLES

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var countdown = 11;
var intervalId;
var userHasClickedOnAnswer = false;
var timedOut = false;
var blazingIndex = 0;
var correctAnswerIndex;
var correctAnswerText;
var correctImg;

// ARRAY TO HOLD QUESTIONS AND ANSWERS

var qaArray = [
	{
		question: "Neutron stars can spin at a rate of _______ rotations per second.",
		answers: ["10", "100", "300", "600"],
		correctAnswerIndex: 3,
		correctAnswerText: "600"
	},
	{
		question: "All the planets in the solar system rotate in the same direction, except which?",
		answers: ["Neptune", "Uranus", "Mars", "Venus"],
		correctAnswerIndex: 3,
		correctAnswerText: "Venus"
	},
	{
		question: "The Sun's core releases the energy equivalent of _______ nuclear bombs every second.",
		answers: ["100,000", "100 million", "100 billion", "100 trillion"],
		correctAnswerIndex: 2,
		correctAnswerText: "100 billion"
	},
	{
		question: "We can only detect about _______ of the matter in the universe.",
		answers: ["5%", "10%", "15%", "20%"],
		correctAnswerIndex: 0,
		correctAnswerText: "5%"
	},
	{
		question: "The Sun accounts for _______ of our solar system's mass.",
		answers: ["25%", "50%", "75%", "99%"],
		correctAnswerIndex: 3,
		correctAnswerText: "99%"
	},
	{
		question: "How far is the Moon moving away from the Earth each year?",
		answers: ["3.8cm", "3.8m", "3.8km", "3.8 light years"],
		correctAnswerIndex: 0,
		correctAnswerText: "3.8cm"
		// pic_correct: 'PATH',
		// pic_wrong: 'PATH',
	},
	{
		question: "How many Earths would fit inside the Sun?",
		answers: ["130,000", "1,300,000", "13,000,000", "130,000,000"],
		correctAnswerIndex: 1,
		correctAnswerText: "1,300,000"
	},
	{
		question: "What is the diameter of the Milky Way?",
		answers: ["10,000 light years", "100,000 light years", "1 million light years", "10 million light years"],
		correctAnswerIndex: 1,
		correctAnswerText: "100,000 light years"
	},
	{
		question: "The largest black hole on record has a mass of more than _______ suns?",
		answers: ["1 billion", "5 billion", "10 billion", "20 billion"],
		correctAnswerIndex: 3,
		correctAnswerText: "20 billion"
	}
];

// FUNCTIONS 

function startCountdown() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	countdown--;
	$("#countdown").html("<h2>Time left until supernova: " + countdown + "</h2>");
		if (countdown === 0) {
	    stop();
	    timeUp();
		}
}

function stop() {
	clearInterval(intervalId);
}

function launchQA() {

	$("button").fadeOut("slow");
	$(".image").fadeOut("slow");
	countdown = 11;
	startCountdown();
	$('#countdown').fadeIn("slow");

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
	  $('#countdown').fadeOut("slow").empty();
  	
  	if (userHasClickedOnAnswer == false && timedOut !== true) {
  	var userAnswer = $('.answer').index(this);
	  	if (userAnswer === qaArray[blazingIndex].correctAnswerIndex) {
				correctAnswer();
	  	}
	  	else {
				incorrectAnswer();
	  	}
		}
  })
}

function correctAnswer() {
	userHasClickedOnAnswer = true;
	$('#results').html("<h3>YEEHAW!</h3>");
	$('.image').fadeIn("slow").html("<img id='imgif' src='assets/images/tobias.gif'>");
	correctAnswers++;
	setTimeout(advance, 3000);
}

function incorrectAnswer() {
	userHasClickedOnAnswer = true;
	$('#results').html("<h2>SPACE FAIL!<br>The correct answer is " + qaArray[blazingIndex].correctAnswerText + ".</h2>");
	$('.image').fadeIn("slow").html("<img id='imgif' src='assets/images/hungry_blackhole.gif'/>");
	incorrectAnswers++;
	setTimeout(advance, 3000);
}

function timeUp() {
	timedOut = true;
	$('#results').html("<h2>[SPACE]TIME'S UP!<br>The correct answer is " + qaArray[blazingIndex].correctAnswerText + ".</h2>");
	$('.image').fadeIn("slow").html("<img id='imgif' src='assets/images/supernova.gif'>");
	$('#countdown').fadeOut("slow").empty();
	unanswered++;
	setTimeout(advance, 3000);
}

function advance() {

	userHasClickedOnAnswer = false;
	timedOut = false;
	
	$('#results').empty();
	blazingIndex++;

	if (blazingIndex < qaArray.length) {
		launchQA();
	}
	else {
		resultScreen();
	}
	
}

function resultScreen() {

	stop();
	timedOut = false;
	$('#countdown').fadeOut("slow");
	$(".image").hide();

	$("#questions").html("<h3>All done!</h3");
	$('#answer0').html("<h3>Correct answers: " + correctAnswers + "</h3>");
	$('#answer1').html("<h3>Incorrect answers: " + incorrectAnswers + "</h3");
	$('#answer2').html("<h3>Unanswered: " + unanswered + "</h3>");
	$('#answer3').html(" ");

	$('#start-over').fadeIn("slow").on("click", startOver);

}

function startOver() {
	
	blazingIndex = 0;
	correctAnswers = 0;
	incorrectAnswers = 0;
	unanswered = 0;
	countdown = 11;

	$("#questions").empty();
	$('#answer0').empty();
	$('#answer1').empty();
	$('#answer2').empty();
	$('#answer3').empty();

	$('#countdown').fadeIn("slow");
	launchQA();

}

// MAIN PROCESS

$("#start-game").on("click", launchQA);

});