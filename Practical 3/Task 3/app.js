// ========== Test getTime() Method ==============================
var date = new Date();

var getTimeMethodID = document.getElementById('getTime_method');
getTimeMethodID.innerHTML = date.getTime();


// ========== Test getFullYear() Method ============================
var date = new Date();

var getFullYearMethodID = document.getElementById('getFullYear_method');
getFullYearMethodID.innerHTML = date.getFullYear();


// ========== Test setTimeout() Method ==========================
var setTimeoutMethodID = document.getElementById('setTimeout_method');

//Function to set alert after 5 seconds
function myFunction() {
    setTimeout(function () { alert("Time is up. 5s has elasped!"); }, 5000);
}

setTimeoutMethodID.addEventListener('click', myFunction);