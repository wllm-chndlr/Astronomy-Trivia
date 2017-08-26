// ON LOAD

// window.onload = function() {
// $("#main").html('<a class="btn btn-primary btn-lg" id="start-button" role="button">Start game</a>');
// };

// $("#start-button").click(alert("hey there"));



// GLOBAL VARIABLES

var correctAnswers = "";
var incorrectAnswers = "";
var unanswered = "";

var countdown = 5;
var intervalId;

// var qAndA = {
// 	s1: []
// 	q1: "What color is the sky",
// 	a1a: "Blue",
// 	a1b: "Red"
// }

var questions = {
	q1: "What color is the sky",
	q2: "What is the capital of Sweden"
};

var answers = {
	a1: ["blue", "green", "red", "black"],
	a2: ["Norway", "Scandinavia", "Austin", "Stockholm"]
};

$("#start-game").on("click", run);


// FUNCTIONS 

function run() {
	intervalId = setInterval(decrement, 1000);
	// $("#question").html("<h2>" + qAndA.q1 + "</h2>");
	// $("#answers").html("<h2>" + qAndA.a1a + "</h2>");
	$("#questions").html("<h2>" + questions.q1 + "</h2>");
	$("#answers").html("<h2>" + answers.a1 + "</h2>");
}

function decrement() {
	countdown--;
	$("#countdown").html("<h2>Time remaining: " + countdown + "</h2>");
		if (countdown === 0) {
	    	stop();
	    	alert("Time Up!");
		}
}

function stop() {
	clearInterval(intervalId);
}


// MAIN PROCESS

// $("#start-button").on("click", start);




