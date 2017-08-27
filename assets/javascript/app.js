// ON LOAD
$(document).ready(function() {

$("#start-game").on("click", run);

// GLOBAL VARIABLES

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var countdown = 10;
var intervalId;

var qaArray = [
	{
		question: "In what month is the Earth closest to the sun?",
		answers: ["February", "January", "September", "December"],
		// pic_correct: 'PATH',
		// pic_wrong: 'PATH',
		correctanswer: 2
	},
	{
		question: "What is the capital of Sweden?",
		answers: ["Norway", "Scandinavia", "Austin", "Stockholm"],
		// pic_correct: 'PATH',
		// pic_wrong: 'PATH',
		correctanswer: 4
	}
	];

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
	
	for (var i = 0; i < qaArray[i].length; i++) {
	};

	$("#questions").html("<h2>" + qaArray[i].question + "</h2>");
	$("#answer0").html("<h3>" + qaArray[i].answers[0] + "</h3>");
	$("#answer1").html("<h3>" + qaArray[i].answers[1] + "</h3>");
	$("#answer2").html("<h3>" + qaArray[i].answers[2] + "</h3>");
	$("#answer3").html("<h3>" + qaArray[i].answers[3] + "</h3>");


	console.log(qaArray[i].question);
	console.log(qaArray[i].answers[0]);
	console.log(qaArray[i].answers[1]);

}

})

	// userChoice.attr("data-answervalue", qA.answers[i]);



	// var userChoice = $(".answer").on("click", function() {
	// 	console.log(this.)

	// jQuery(".answer").click(function() {
 //    var userChoice = jQuery(this).attr("value");
 //    console.log(userChoice);
 //    return userChoice;

 //    	if (userChoice === arrCorrect[i]) {
	// 		alert("Correct!");
	// 	}

	// 	else {
	// 		alert("incorrect!");
	// 	}

	// });

	// console.log(userChoice);


	// $('.answer').click(function(){
	//     console.log(this.id);
	// });
	

// var qA = {

// 	questions: 
// 	[
// 		"In what month is the Earth closest to the sun?", 
// 		"What is the capital of Sweden?"
// 	],
// 	answers: 
// 	[
// 		["February", "January", "September", "December"], 
// 		["Norway", "Scandinavia", "Austin", "Stockholm"]
// 	]

// };

// var arrCorrect = [qA.answers[0][1], qA.answers[1][3]];
// console.log(arrCorrect);





// MAIN PROCESS







