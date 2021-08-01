// ========== Reverse string =================================================================
var reversedStringID = document.getElementById('reversed_string');

//Function to reverse string
function reverse(str){
    return str.split("").reverse().join("");
}

//Perform string reverse
var reversedString = reverse(reversedStringID.innerHTML);

//Display the reversed string
reversedStringID.innerHTML = reversedString;



// ========== Replace Hyphons with Space in string ===========================================
var spacedStringID = document.getElementById('spaced_string');

//Function to replace hyphons in string with space
function replaceHyphonsWithSpace(str){
    return str.replace(/-/g, ' ');
}

//Perform replacement of hyphons in string with space
var hyphonsRemoved = replaceHyphonsWithSpace(spacedStringID.innerHTML);

//Display the reversed string
spacedStringID.innerHTML = hyphonsRemoved;



// ========== Uppercase first letters of each word in string =================================
var firstLettersCaptitalisedString = document.getElementById('first_letters_capitalised_string');

//Function to capitalise the first letter of each word in string
function capitaliseFirstLetters(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   // Directly return the joined string
   return splitStr.join(' ');
}



//Perform replacement of hyphons in string with space
var firstLettersCapitalised = capitaliseFirstLetters(firstLettersCaptitalisedString.innerHTML);

//Display the reversed string
firstLettersCaptitalisedString.innerHTML = firstLettersCapitalised;

