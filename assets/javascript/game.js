


var wins=0;
var word='Terry';
var guessedlet=[];
var guessesnum=15;
var wordbank = [
        ["cheese", "milk", "", "butter", "beef", "chicken", "yogurt"],
        ["ketchup", "rice", "bagel", "chocolate", "carrots"],
        ["shampoo", "tissues", "bacon", "orange", "apples"]
    ];


// Get elements
var showLives = document.getElementById("mylives");
var showCatagory = document.getElementById("scatagory");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");

word = word.replace(/\s/g, "-");

function display() {
	document.getElementById('wins').innerHTML = wins;
    document.getElementById('word').innerHTML = word;

}







document.onkeyup = function(event) {
var userGuess = event.key;



word = word.replace(/\s/g, "-");



}


    // chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    // word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    // word = word.replace(/\s/g, "-");
    // console.log(word);
    // buttons();

word = word.replace(/\s/g, "-");
display()

wins=10;


















