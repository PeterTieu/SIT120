// ABOUT:
// This JavaScript file manages the operations and interactivities of the Flags Challenge page (flags_challenge.html)



/* >>>>>>>>>>>>>>>>> Refer to HTML elements <<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

var prompCountryName = document.getElementById('prompt_country_name'); //Prompt (Country Name)
var possibleAnswer1 = document.getElementById('possible_answer_1'); //Possible Answer #1 (Flag Image)
var possibleAnswer2 = document.getElementById('possible_answer_2'); //Possible Answer #2 (Flag Image)
var possibleAnswer3 = document.getElementById('possible_answer_3'); //Possible Answer #3 (Flag Image)
var possibleAnswer4 = document.getElementById('possible_answer_4'); //Possible Answer #4 (Flag Image)

var time_remaining = document.getElementById('time_remaining');     // Time remaining
var questionNumber = document.getElementById('question_number');    //Question number
var score = document.getElementById('score');                       // Score
var heartIconLeft = document.getElementById('heart_icon_left');     //Heart Icon #1 (Left)
var heartIconMiddle = document.getElementById('heart_icon_middle'); //Heart Icon #2 (middle)
var heartIconRight = document.getElementById('heart_icon_right');   //Heart Icon #3 (right)



/* >>>>>>>>>>>>>>>>> Declare and assign Country Name and Flag Image variables <<<<<<<<<<<< */

// Array of Country names (for the Prompt)
let countryNames = ['Aghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'DR Congo', 'Ivory Coast', 'Montenegro', 'Namibia', 'Republic of the Congo', 'Sri Lanka', 'Wales'];

// Array of directory locations of Flag Images (for the Possible Answers)
let flagImagesDirectory = [];
flagImagesDirectory.push('Assets/Flag_Images/Aghanistan.png');
flagImagesDirectory.push('Assets/Flag_Images/Albania.png');
flagImagesDirectory.push('Assets/Flag_Images/Algeria.png');
flagImagesDirectory.push('Assets/Flag_Images/Andorra.png');
flagImagesDirectory.push('Assets/Flag_Images/Angola.png');
flagImagesDirectory.push('Assets/Flag_Images/Antigua and Barbuda.png');
flagImagesDirectory.push('Assets/Flag_Images/Argentina.png');
flagImagesDirectory.push('Assets/Flag_Images/Armenia.png');
flagImagesDirectory.push('Assets/Flag_Images/Australia.png');
flagImagesDirectory.push('Assets/Flag_Images/Austria.png');
flagImagesDirectory.push('Assets/Flag_Images/Azerbaijan.png');
flagImagesDirectory.push('Assets/Flag_Images/Bahamas.png');
flagImagesDirectory.push('Assets/Flag_Images/Bahrain.png');
flagImagesDirectory.push('Assets/Flag_Images/Bangladesh.png');
flagImagesDirectory.push('Assets/Flag_Images/Barbados.png');
flagImagesDirectory.push('Assets/Flag_Images/Belarus.png');
flagImagesDirectory.push('Assets/Flag_Images/Belgium.png');
flagImagesDirectory.push('Assets/Flag_Images/Belize.png');
flagImagesDirectory.push('Assets/Flag_Images/Benin.png');
flagImagesDirectory.push('Assets/Flag_Images/Bhutan.png');
flagImagesDirectory.push('Assets/Flag_Images/Bolivia.png');
flagImagesDirectory.push('Assets/Flag_Images/Bosnia and Herzegovina.png');
flagImagesDirectory.push('Assets/Flag_Images/Botswana.png');
flagImagesDirectory.push('Assets/Flag_Images/Brazil.png');
flagImagesDirectory.push('Assets/Flag_Images/Brunei.png');
flagImagesDirectory.push('Assets/Flag_Images/Bulgaria.png');
flagImagesDirectory.push('Assets/Flag_Images/Burkina Faso.png');
flagImagesDirectory.push('Assets/Flag_Images/Burundi.png');
flagImagesDirectory.push('Assets/Flag_Images/Cambodia.png');
flagImagesDirectory.push('Assets/Flag_Images/Cameroon.png');
flagImagesDirectory.push('Assets/Flag_Images/Canada.png');
flagImagesDirectory.push('Assets/Flag_Images/Cape Verde.png');
flagImagesDirectory.push('Assets/Flag_Images/Central African Republic.png');
flagImagesDirectory.push('Assets/Flag_Images/Chad.png');
flagImagesDirectory.push('Assets/Flag_Images/Chile.png');
flagImagesDirectory.push('Assets/Flag_Images/China.png');
flagImagesDirectory.push('Assets/Flag_Images/Colombia.png');
flagImagesDirectory.push('Assets/Flag_Images/Comoros.png');
flagImagesDirectory.push('Assets/Flag_Images/Cook Islands.png');
flagImagesDirectory.push('Assets/Flag_Images/Costa Rica.png');
flagImagesDirectory.push('Assets/Flag_Images/Croatia.png');
flagImagesDirectory.push('Assets/Flag_Images/Cuba.png');
flagImagesDirectory.push('Assets/Flag_Images/Cyprus.png');
flagImagesDirectory.push('Assets/Flag_Images/Czechia.png');
flagImagesDirectory.push('Assets/Flag_Images/Denmark.png');
flagImagesDirectory.push('Assets/Flag_Images/Djibouti.png');
flagImagesDirectory.push('Assets/Flag_Images/Dominica.png');
flagImagesDirectory.push('Assets/Flag_Images/DR Congo.png');
flagImagesDirectory.push('Assets/Flag_Images/Ivory Coast.png');
flagImagesDirectory.push('Assets/Flag_Images/Republic of the Congo.png');
flagImagesDirectory.push('Assets/Flag_Images/Montenegro.png');
flagImagesDirectory.push('Assets/Flag_Images/Namibia.png');
flagImagesDirectory.push('Assets/Flag_Images/Sri Lanka.png');
flagImagesDirectory.push('Assets/Flag_Images/Wales.png');



/* >>>>>>>>>>>>>>>>> Declare and assign operations variables <<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

const MAX_TIME_REMAINING = 15;          // Countdown time per question (in seconds)
var isPossibleAnswerSelected = false;   // Flag to signal whether a Possible Answer has been selected
var randomPromptCountryName;            // Country Name of the Prompt
var questionCounter = 1;                // Question Number
var scoreCounter = 0;                   //Score
var attemptsRemaining = 3;              // Number of attemps remaining



/* >>>>>>>>>>>>>>>>> Set up the Prompt <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

// Obtain Country Prompt (By random)
function getCountryPrompt() {
    // Obtain random number ranging from 1 to the size of the "Country names" array
    randomPromptCountryName = countryNames[Math.floor(Math.random() * countryNames.length)];

    // Display the name of the country in the Prompt
    prompCountryName.innerHTML = randomPromptCountryName;
}

// Call to obtain the Country Prompt (by random)
getCountryPrompt();



/* >>>>>>>>>>>>>>>>> Set up the Possible Answers <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

// Obtain the Possible Answers (by random)
function getRandomPossibleAnswers(countryName, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4) {

    // Position of the correct answer
    var positionOfCorrectAnswer;

    // Array of the four Possible Answers
    let arrayOfPossibleAnswers = [possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4]

    // Obtain random number (0 to 3) to repesent the position of the correct number
    // (i.e. 0 corresponds to position #1, 3 corresponds to position #4)
    positionOfCorrectAnswer = Math.floor(Math.random() * 4);

    //Set the Flag Image of the correct answer at a random location
    arrayOfPossibleAnswers[positionOfCorrectAnswer].src = 'Assets/Flag_Images/' + countryName + '.png';

    //Set the Flag image of the other (incorrect) possible answers at the rest of the locations
    for (let i = 0; i < arrayOfPossibleAnswers.length; i++){

        //For all other positions than the position of the correct answer
        if (i != positionOfCorrectAnswer) {

            //Get a random flag name from the local directory
            var randomPossibleAnswer = flagImagesDirectory[Math.floor(Math.random() * flagImagesDirectory.length)];

            //Set the image source of the possible answers element to this random flag
            arrayOfPossibleAnswers[i].src = randomPossibleAnswer;
        }
    }
}

// Call to obtain the Possible Answers (by random)
getRandomPossibleAnswers(randomPromptCountryName, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4)



/* >>>>>>>>>>>>>>>>> Set up the Side Panel <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

//====================== Set Up the Timer ======================

// Display the maximum total time remaining
time_remaining.innerHTML = MAX_TIME_REMAINING;

// Set the date being counted down to
var countDownDate = new Date().getTime() + MAX_TIME_REMAINING * 1000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Calculate time for seconds left
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="time_remaining"
  time_remaining.innerHTML = seconds;

  // If the countdown reaches zero
    if (distance <= 0) {

        clearInterval(x); // Execute the timer

        time_remaining.innerHTML = "0"; // Display the time remaining as "0"
        countDownDate = 0; // Re-initialise "countDownDate"
        now = 0; // Re-initialise "now"

        updateTimer(); // Reset the timer
        startNewQuestion(); // Start a new question
        updateQuestionNumber(); // Increase the question number
        decrementHeart(); // Reduce a heart

        //Play sound effect to indicate no answer was selected
        let no_answer_selected_sound = new Audio('Assets/Sound_Effects/incorrect_answer.wav');no_answer_selected_sound.play();
    }

    //If a Possible Answer is selected
    if (isPossibleAnswerSelected == true) {

        // Display "- -" in the countdown timer
        time_remaining.innerHTML = "--";
    }
}, 1000);



//====================== Listener for the Possible Answers ======================

// Display the Score
score.innerHTML = scoreCounter;

// Display the Question Number
questionNumber.innerHTML = questionCounter;



// ----------- Update Question Number -------------------------

function updateQuestionNumber() {
    questionCounter++; //Increment the Question Number
    questionNumber.innerHTML = questionCounter; //Display the Question Number
}

//Get the Country Name of the Selected Possible Answer
function getCountryNameOfSelectedAnswer(possibleAnswerSrc) {

    //The Country Name of the Selected Possible Answer is between "/" and ".png" of the string of the directory location of associated the Flag Image
    var possibleAnswer = possibleAnswerSrc.substring(possibleAnswerSrc.lastIndexOf("/") + 1, possibleAnswerSrc.lastIndexOf(".png"));

    // Replace any "%20" in the string with a space
    possibleAnswer = decodeURI(possibleAnswer);

    return possibleAnswer; // Return the Possible Answer
}



// ----------- Update Score ------------------------------------

function updateScore(possibleAnswerSrc) {

    // Get the Country Name of the Selected Possible Answer
    var flagNameOfSelectedAnswer = getCountryNameOfSelectedAnswer(possibleAnswerSrc);

    // If the Country Name of the Selected Possible Answer is the same as that of the Promp
    if (flagNameOfSelectedAnswer == randomPromptCountryName) {
        scoreCounter++; // Increment the Score
    }

    // Display the Score
    score.innerHTML = scoreCounter;

}



// ----------- Update Timer -----------------------------------

function updateTimer() {

    // Re-initialise the countDownDate to NaN
    countDownDate = NaN;

    // Display the maximum total time remaining
    time_remaining.innerHTML = MAX_TIME_REMAINING;

    // Set the date we're counting down to
    countDownDate = new Date().getTime() + MAX_TIME_REMAINING * 1000;
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Calculate time for seconds left
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="time_remaining"
        time_remaining.innerHTML = seconds;

        // If the countdown reaches zero
        if (distance <= 0) {
            clearInterval(x); // Execute the timer

            time_remaining.innerHTML = "0"; // Display the time remaining as "0"
            countDownDate = 0; // Re-initialise "countDownDate"
            now = 0; // Re-initialise "now"

            updateTimer(); // Reset the timer
            startNewQuestion(); // Start a new question
            updateQuestionNumber(); // Increase the question number
            decrementHeart(); // Reduce a heart

            //Play sound effect to indicate no answer was selected
            let no_answer_selected_sound = new Audio('Assets/Sound_Effects/incorrect_answer.wav');no_answer_selected_sound.play();
        }

        //If a Possible Answer is selected
        if (isPossibleAnswerSelected == true) {

            // Display "- -" in the countdown timer
            time_remaining.innerHTML = "--";
        }
    }, 1000);
}



// ----------- Update Heart Icons (Attempts Remaining) ---------

// Update the heart icons based on the Possible Answer selected
function updateHeartIcons(selectedAnswer) {
    var flagNameOfSelectedAnswer = getCountryNameOfSelectedAnswer(selectedAnswer);

    // If the Country Name of the Selected Possible Answer is NOT the same as that of the Prompt
    if (flagNameOfSelectedAnswer != randomPromptCountryName) {
        attemptsRemaining--; //Decrement the Attemps Remaining

        // Display the heart icons according to the decreased number of Attempts Remaining
        if (attemptsRemaining == 2) {
            heartIconRight.src = 'Assets/heart_empty.png'
        }
        else if (attemptsRemaining == 1) {
            heartIconMiddle.src = 'Assets/heart_empty.png'
        }
        else if (attemptsRemaining == 0) {
            heartIconLeft.src = 'Assets/heart_empty.png'
        }
    }
}

// 'Remove' a heart by making the righmost heart icon an empty heart
function decrementHeart() {
    attemptsRemaining--;

    // Display the heart icons according to the decreased number of Attempts Remaining
    if (attemptsRemaining == 2) {
        heartIconRight.src = 'Assets/heart_empty.png'
    }
    else if (attemptsRemaining == 1) {
        heartIconMiddle.src = 'Assets/heart_empty.png'
    }
    else if (attemptsRemaining == 0) {
        heartIconLeft.src = 'Assets/heart_empty.png'
    }
}



// ----------- Play Sound Effects ------------------------------

// Play the Sound Effects according to whether the Selected Possible Answer is correct or incorrect
function playSoundEffect(selectedAnswer) {

    // Get the Country Name of the Selected Possible Answer
    var flagNameOfSelectedAnswer = getCountryNameOfSelectedAnswer(selectedAnswer);

    // If the Country Name of the Selected Possible Answer is not the same as that of the Prompt
    if (flagNameOfSelectedAnswer != randomPromptCountryName) {

        //Play sound effect to indicate the incorrect Possible Answer was selected
        let incorrect_possible_answer_selected_sound = new Audio('Assets/Sound_Effects/incorrect_answer.wav');
        incorrect_possible_answer_selected_sound.play();
    }
    else {
        //Play sound effect to indicate the correct Possible Answer was selected
        let correct_possible_answer_selected_sound = new Audio('Assets/Sound_Effects/correct_answer.wav');
        correct_possible_answer_selected_sound.play();
    }
}



// ----------- Start a New Question ----------------------------

function startNewQuestion() {
    getCountryPrompt();
    getRandomPossibleAnswers(randomPromptCountryName, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4);
}



// ----------- Set up Event Listner for Possible Answer --------

// Event Listener for a Possible Answer (i.e. Flag Image)
function possibleAnswerListener() {

    // Declare the variable "selectedAnswer"
    // then assign it to the HTML element of the selected Possible Answer
    var selectedAnswer = this;

    // Switch the flag that indicates if a Possible Answer is selected to "true"
    isPossibleAnswerSelected = true;



    // ---- Modify all the Possible Answers based on the Selected Answer  --------------------

    // Obtain the Country Names of all the Possible Answers
    var flagNameOfPossibleAnswer1 = getCountryNameOfSelectedAnswer(possibleAnswer1.src);
    var flagNameOfPossibleAnswer2 = getCountryNameOfSelectedAnswer(possibleAnswer2.src);
    var flagNameOfPossibleAnswer3 = getCountryNameOfSelectedAnswer(possibleAnswer3.src);
    var flagNameOfPossibleAnswer4 = getCountryNameOfSelectedAnswer(possibleAnswer4.src);

    // If the Country Name of the FIRST Possible Answer is not the same as that of the Prompt
    if (flagNameOfPossibleAnswer1 != randomPromptCountryName) {
        possibleAnswer1.style.opacity = 0.1 //
    }
    else {
        possibleAnswer1.style.opacity = 1
        possibleAnswer1.style.backgroundColor = "green";
    }

    // If the Country Name of the SECOND Possible Answer is not the same as that of the Prompt
    if (flagNameOfPossibleAnswer2 != randomPromptCountryName) {
        possibleAnswer2.style.opacity = 0.1
    }
    else {
        possibleAnswer2.style.opacity = 1
        possibleAnswer2.style.backgroundColor = "green";
    }

    // If the Country Name of the THIRD Possible Answer is not the same as that of the Prompt
    if (flagNameOfPossibleAnswer3 != randomPromptCountryName) {
        possibleAnswer3.style.opacity = 0.1
    }
    else {
        possibleAnswer3.style.opacity = 1
        possibleAnswer3.style.backgroundColor = "green";
    }

    // If the Country Name of the FOURTH Possible Answer is not the same as that of the Prompt
    if (flagNameOfPossibleAnswer4 != randomPromptCountryName) {
        possibleAnswer4.style.opacity = 0.1
    }
    else {
        possibleAnswer4.style.opacity = 1
        possibleAnswer4.style.backgroundColor = "green";
    }



    // ---- Modify the Selected Possible Answer and Correct Answer  --------------------------

    // Configure selected Possible Answer
    var flagNameOfSelectedAnswer = getCountryNameOfSelectedAnswer(selectedAnswer.src);

    // If Selected Possible Answer is INCORRECT
    if (flagNameOfSelectedAnswer != randomPromptCountryName) {
        selectedAnswer.style.backgroundColor = "red";
        selectedAnswer.style.opacity = 0.3;
    }
    // If Selected Possible Answer is CORRECT
    else {
        selectedAnswer.style.backgroundColor = "";
    }



    // ---- Update all Side Panel parameters  ------------------------------------------------

    updateScore(selectedAnswer.src);
    updateHeartIcons(selectedAnswer.src);
    playSoundEffect(selectedAnswer.src);



    // ---- Wait 2 seconds before setting up the next question  ------------------------------

    setTimeout(function () {

        // Switch the flag that indicates if a Possible Answer is selected to "false"
        isPossibleAnswerSelected = false;

        updateQuestionNumber(); // Increase the Question Number
        updateTimer();          // Reset the Timer
        startNewQuestion();     // Start a new question

        possibleAnswer1.style.opacity = ""  // Reset the opacity of Possible Answer #1
        possibleAnswer2.style.opacity = ""  // Reset the opacity of Possible Answer #2
        possibleAnswer3.style.opacity = ""  // Reset the opacity of Possible Answer #3
        possibleAnswer4.style.opacity = ""  // Reset the opacity of Possible Answer #4

        possibleAnswer1.style.backgroundColor = "" // Reset the background of Possible Answer #1
        possibleAnswer2.style.backgroundColor = "" // Reset the background of Possible Answer #1
        possibleAnswer3.style.backgroundColor = "" // Reset the background of Possible Answer #1
        possibleAnswer4.style.backgroundColor = "" // Reset the background of Possible Answer #1
    }, 2000);
}



// ---- Wait 2 seconds before setting up the next question  ------------------------------

possibleAnswer1.addEventListener('click', possibleAnswerListener);
possibleAnswer2.addEventListener('click', possibleAnswerListener);
possibleAnswer3.addEventListener('click', possibleAnswerListener);
possibleAnswer4.addEventListener('click', possibleAnswerListener);



/*============================== Add Responsiveness Features =============================*/

// When page is scrolled, nav bar sticks
window.onscroll = function () { navStick() };

// Get the nav bar
var nav = document.getElementById("nav");

// Get the offset position of the nav bar
var sticky = nav.offsetTop;

// Add sticky to nav bar when user reaches scroll position. Remove sticky when user leaves scroll position
function navStick() {
if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
}
else {
    nav.classList.remove("sticky");
    }
}

//Add class to nav links that causes them to drop down from right
function resizeNav() {
    if (nav.className == "nav") {
        nav.className += " responsive";
    }
    else {
        nav.className = "nav";
    }
}