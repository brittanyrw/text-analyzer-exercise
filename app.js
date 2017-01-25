$(document).ready(function() {

	$(".js-submit").click(function(event) { 

		event.preventDefault();
		
		//accept text that user has entered and turn it into an array
		var userInput = $("#user-text").val().toLowerCase();
		
		//remove punctuation to creat array for words only
		var userInputWordsArray = userInput.replace(/[!()$&?.,]/g, "").split(" ");

		//create an array with sentences
		var userInputSentenceArray = userInput.split(/[.!?]/g);
		
		//add text analyzer results to html
		$(".js-word-count").text(userInputWordsArray.length);
		$(".js-unique-word-count").text(uniqueWordCount(userInputWordsArray));
		$(".js-average-word-length").text(avgWordLength(userInputWordsArray) + " characters");
		$(".js-average-sentence-length").text(avgSentenceLength(userInputSentenceArray) + " characters");

		//remove hidden class to display text analyzer results
		$('.text-report').removeClass('hidden'); 
	});

});

//Functions for analyzing the text


function uniqueWordCount(userInputWordsArray) {
	var wordCountObj = {};
	for (var i = 0; i < userInputWordsArray.length; i++) {
		if (userInputWordsArray[i] in wordCountObj) {
			wordCountObj[userInputWordsArray[i]] += 1;
		} else {
			wordCountObj[userInputWordsArray[i]] = 1;
		}
	}
		return Object.keys(wordCountObj).length;
}

function avgWordLength(userInputWordsArray) {
	var avgWordLength = userInputWordsArray.join("").length;
	return (avgWordLength / userInputWordsArray.length).toFixed(2);
}

function avgSentenceLength(userInputSentenceArray) {

	var numberOfSentences = (userInputSentenceArray.length) -1;
	var sentenceLengthTotal = 0;
	for (var i = 0; i < userInputSentenceArray.length; i++) {
		if (userInputSentenceArray[i] != "") {
			sentenceLengthTotal += userInputSentenceArray[i].length;
		}
		console.log(userInputSentenceArray);
		console.log(numberOfSentences);
	} 
	return (sentenceLengthTotal/numberOfSentences).toFixed(2);
};







