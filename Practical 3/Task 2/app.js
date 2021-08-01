// ========== Convert Number to String ==============================
var numberAsStringID = document.getElementById('number_as_string');
numberAsStringID.innerHTML = (12345678910).toString();


// ========== Convert a Number to a Date ============================
var dateAsNumberID = document.getElementById('date_as_number');
dateAsNumberID.innerHTML = Number(new Date("2021-08-01"));


// ========== Convert a String to a Number ==========================
var stringAsNumberID = document.getElementById('string_as_number');
stringAsNumberID.innerHTML = parseFloat("123.456789");