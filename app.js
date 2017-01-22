// 1. Turn string into an array
// 2. Calculate total word count
// 3. Calculate unique word count - use object?
// 4. Calcuate average word length
// 5. Calculate average sentence length - look for . ? !
// 6. Add numbers to text-report.
// 7. Unhide classes for text-report when button is clicked.


$(document).ready(function() {

	$(".js-submit").click(function(event) { 

		event.preventDefault();
		
		//accept text that user has entered and turn it into an array
		var userInput = $("#user-text").val();
		
		//remove punctuation to creat array for words only
		var userInputWordsArray = userInput.replace(/[!()$&?.,]/g, "").split(" ");
		console.log(userInputWordsArray.length);
		//create an array with sentences
		var userInputSentenceArray = userInput.split(/[.!?]/g);
		console.log(userInputSentenceArray);
		
		//add text analyzer results to html
		$(".js-word-count").text(userInputWordsArray.length);
		$(".js-unique-word-count").text(uniqueWordCount(userInputWordsArray));
		$(".js-average-word-length").text(avgWordLength(userInputWordsArray) + " characters");
		$(".js-average-sentence-length").text(avgSentenceLength(userInputSentenceArray) + " words");

		//remove hidden class to display text analyzer results
		$('.text-report').removeClass('hidden'); 
	});

//Functions for analyzing the text


function uniqueWordCount(userInputWordsArray) {
	var wordCountObj = {};
	
}

function avgWordLength(userInputWordsArray) {

}

function avgSentenceLength(userInputSentenceArray) {
}


});