// Obtain Elements
var scoresArray = document.getElementsByClassName('score'); //Scores
var buttonCalculateScores = document.getElementById('button_calculate_total_score'); //Button

// Calculate and display the scores
function compute_and_display_scores() {
	var totalScore = 0;
	var averageScore = 0;

	// Calculate Total Score
	for (let i = 0; i < scoresArray.length; i++) {
		var score = parseInt(scoresArray[i].value);
		totalScore += score;
	}

	// Calculate Average Score
	averageScore = totalScore / scoresArray.length;

	// Display Scores
	document.getElementById('total_score').innerHTML = totalScore;
	document.getElementById('average_score').innerHTML = averageScore;
}

//Add event listener to the button
buttonCalculateScores.addEventListener('click', compute_and_display_scores);
