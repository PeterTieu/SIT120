// ========== Convert Number to String ==============================
var numberAsStringID = document.getElementById('number_as_string');
numberAsStringID.innerHTML = (12345678910).toString();


// ========== Convert a Number to a Date ============================
var dateAsNumberID = document.getElementById('date_as_number');
dateAsNumberID.innerHTML = Number(new Date("2021-08-01"));


// ========== Convert a String to a Number ==========================
var stringAsNumberID = document.getElementById('string_as_number');
stringAsNumberID.innerHTML = parseFloat("123.456789");


// ========== Join the Elements of an Array Together ==========================
var cars = ['Toyota', 'Honda', 'Holden', 'Mitsubishi', 'Tesla'];
var textOfJoinedArrayID = document.getElementById('text_of_joined_array');
textOfJoinedArrayID.innerHTML = cars.join('<==>');


// ========== Sorting the Elements of an Array ==========================
var fruits = ['Banana', 'Mandarin', 'Orange', 'Apple', 'Mango', 'Durian'];
var sortedArrayID = document.getElementById('sorted_array');
fruits.sort();
sortedArrayID.innerHTML = fruits;