// ON LOAD

// window.onload = function() {
// $("#main").html('<a class="btn btn-primary btn-lg" id="start-button" role="button">Start game</a>');
// };

// $("#start-button").click(alert("hey there"));

$("#start-game").on("click", run);

// GLOBAL VARIABLES

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var countdown = 10;
var intervalId;

var qA = {

	questions: 
	[
		"In what month is the Earth closest to the sun?", 
		"What is the capital of Sweden?"
	],
	answers: 
	[
		["February", "January", "September", "December"], 
		["Norway", "Scandinavia", "Austin", "Stockholm"]
	]

};

var arrCorrect = [qA.answers[0][1], qA.answers[1][3]];
// console.log(arrCorrect);


// FUNCTIONS 

function run() {
	intervalId = setInterval(decrement, 1000);
	$("button").remove();
	launchQA();
}

function decrement() {
	countdown--;
	$("#countdown").html("<h2>Time remaining: " + countdown + "</h2>");
		if (countdown === 0) {
	    stop();
	    console.log("Time Up!");
	}
}

function stop() {
	clearInterval(intervalId);
}

function reset() {
	$("button").show();
}

function launchQA() {
	
	for (var i = 0; i < qA.questions.length; i++) {
	
	$("#questions").html("<h2>" + qA.questions[i] + "</h2>");
	$("#answer0").html("<h3>" + qA.answers[i][0] + "</h3>");
	$("#answer1").html("<h3>" + qA.answers[i][1] + "</h3>");
	$("#answer2").html("<h3>" + qA.answers[i][2] + "</h3>");
	$("#answer3").html("<h3>" + qA.answers[i][3] + "</h3>");
	};



	jQuery(".answer").click(function() {
    var userChoice = jQuery(this).attr("id");
    console.log(userChoice);
    return userChoice;
	});

	// console.log(userChoice);


	// $('.answer').click(function(){
	//     console.log(this.id);
	// });
	

	// if (userChoice === arrCorrect[i]) {
	// 	alert("Correct!");
	// }

}






// MAIN PROCESS







