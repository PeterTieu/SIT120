/*============================== Set Up the Question =========================================*/

/* >>>>>>>>>>>>>>>>> Set up the Prompt <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

// DOM variables
var time_remaining = document.getElementById('time_remaining');
var prompCountryName = document.getElementById('prompt_country_name');
var possibleAnswer1 = document.getElementById('possible_answer_1');
var possibleAnswer2 = document.getElementById('possible_answer_2');
var possibleAnswer3 = document.getElementById('possible_answer_3');
var possibleAnswer4 = document.getElementById('possible_answer_4');

// Operations variables
var randomPromptCountryName;

// Array of all Country names (for the Prompt)
let countryNames = ['Aghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'DR Congo', 'Ivory Coast', 'Montenegro', 'Namibia', 'Republic of the Congo', 'Sri Lanka', 'Wales'];

// Array of directory location of Flag Images
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



/* >>>>>>>>>>>>>>>>> Set up the Prompt <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

// Obtain Country Prompt (By random)
function getCountryPrompt() {
    // Obtain random number ranging from 1 to the size of the "Country names" array
    randomPromptCountryName = countryNames[Math.floor(Math.random() * countryNames.length)];

    // Display the name of the country in the Prompt
    prompCountryName.innerHTML = randomPromptCountryName;
}

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

getRandomPossibleAnswers(randomPromptCountryName, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4)



/* >>>>>>>>>>>>>>>>> Set up the Side Panel <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

//====================== Set Up the Timer ======================

//Time remaining (in seconds)
const TIME_REMAINING = 20;
time_remaining.innerHTML = TIME_REMAINING;


// Set the date we're counting down to
var countDownDate = new Date().getTime() + TIME_REMAINING * 1000;



// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Calculate time for seconds left
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="time_remaining"
  document.getElementById("time_remaining").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance <= 0) {
    clearInterval(x);
      document.getElementById("time_remaining").innerHTML = "0";
      countDownDate = 0;
      now = 0;
  }
}, 1000);





//====================== Listener for the Possible Answers ======================
var questionNumber = document.getElementById('question_number');
var score = document.getElementById('score');
var heartIconLeft = document.getElementById('heart_icon_left');
var heartIconMiddle = document.getElementById('heart_icon_middle');
var heartIconRight = document.getElementById('heart_icon_right');


var questionCounter = 1;
var scoreCounter = 0;
var attemptsRemaining = 3;

score.innerHTML = scoreCounter;

questionNumber.innerHTML = questionCounter;

// ----------- Update Question Number -----------
function updateQuestionNumber() {
    questionCounter++;
    questionNumber.innerHTML = questionCounter;
}

//Get the Country Name of the Possible Answer selected
function getCountryNameOfSelectedAnswer(possibleAnswerSrc) {
    var possibleAnswer = possibleAnswerSrc.substring(possibleAnswerSrc.lastIndexOf("/") + 1, possibleAnswerSrc.lastIndexOf(".png"));

    // Replace any "%20" in the string with a space
    possibleAnswer = decodeURI(possibleAnswer);

    return possibleAnswer;
}


// ----------- Update Score -----------
function updateScore(possibleAnswerSrc) {

    var flagNameOfSelectedAnswer = getCountryNameOfSelectedAnswer(possibleAnswerSrc);

    if (flagNameOfSelectedAnswer == randomPromptCountryName) {
        scoreCounter++;
    }

    score.innerHTML = scoreCounter;

}

// ----------- Update Timer -----------
function updateTimer() {

    countDownDate = NaN;

    var time_remaining = document.getElementById('time_remaining');

    time_remaining.innerHTML = TIME_REMAINING;

    // Set the date we're counting down to
    countDownDate = new Date().getTime() + TIME_REMAINING * 1000;
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Calculate time for seconds left
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="time_remaining"
        document.getElementById("time_remaining").innerHTML = seconds;

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("time_remaining").innerHTML = "0";
            countDownDate = 0;
            now = 0;
        }
    }, 1000);
}



// ----------- Update Heart Icons (Attempts Remaining) -----------
function updateHeartIcons(possibleAnswerSrc) {
    var flagNameOfSelectedAnswer = getCountryNameOfSelectedAnswer(possibleAnswerSrc);

    if (flagNameOfSelectedAnswer != randomPromptCountryName) {
        attemptsRemaining--;

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


// ----------- Start a New Question -----------
function startNewQuestion() {
    getCountryPrompt();
    getRandomPossibleAnswers(randomPromptCountryName, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4);
}


function possibleAnswerListener() {
    updateQuestionNumber();
    updateTimer();
    updateScore(this.src);
    updateHeartIcons(this.src);
    startNewQuestion();
}


// ----------- Set Listener for all the Possible Answers -----------
possibleAnswer1.addEventListener('click', possibleAnswerListener);
possibleAnswer2.addEventListener('click', possibleAnswerListener);
possibleAnswer3.addEventListener('click', possibleAnswerListener);
possibleAnswer4.addEventListener('click', possibleAnswerListener);





/*============================== Add Responsiveness Feature =============================*/

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