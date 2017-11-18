


//most of the declaring of variables.
var wins=0;
var loses=0;

//wordbank for the random number generator to pic from array
var wordbank = ["cheese", "milk", "butter", "beef", "chicken", "yogurt", "ketchup", "rice", "bagel", "chocolate", "carrots", "shampoo", "tissues", "bacon", "orange", "apples"];
var guessNum=0;
var wordHolder = [];
var currentWord = "";
var pastGuesses = [];


//this variable allows user press to reference an actual letter
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function makeString(arr, holder) {  //removes commas from display
     return(arr.toString()).replace(/,/g, holder); //search for commas and replace with specific holder for currentWord in bannder no holder for placeholder has spaces.
}

function newGame(){ //Starts game
guessNum=10;  //restarts user guess nummer -- adjust this lower to make it more difficult
var x = Math.floor(Math.random() * wordbank.length); //Random number generator base off workbank array
console.log(x); //for me
wordHolder =[]; //reset word from previous game
currentWord = (wordbank[x]).toUpperCase(); //capitilize all characters string
currentWord = currentWord.split("");  //break string into array
console.log(currentWord); //for me
pastGuesses = []; //reset previous guess
for(var i = 0; i < currentWord.length; i++) { //creates and word place holder to show progress when compared to currentWord variable
    wordHolder.push("_");
    };
                                                      
  	 document.getElementById("word").innerHTML = makeString(wordHolder," "); //updates HTML 
  	 document.getElementById("guessNum").innerHTML = guessNum;
  	 document.getElementById("guessed").innerHTML = pastGuesses;
  	 document.getElementById("banner").innerHTML = "Game Started!"
}


function userGuess(guess){ 
	if((letters.indexOf(guess) !== -1) && (pastGuesses.indexOf(guess) === -1)){ //checks if letter was not guessed before and a character
	pastGuesses.push(guess); //appends to user guess list
	guessNum--; //reduce game attempts
	document.getElementById("guessed").innerHTML = pastGuesses;//updates HTML 
	document.getElementById("guessNum").innerHTML = guessNum;
	document.getElementById("banner").innerHTML = "Keep guessing you have "+guessNum+" chances left."
	checkWord(guess);// passes valid caharacter into checkWord function 
	}
	else{
	document.getElementById("banner").innerHTML = "Your guess "+guess+" did not count. Keep guessing you have "+guessNum+" chances left."//updates HTML 
	}
                
}  
 
function checkWord(guess){ 
    currentWord.forEach(function(value,index) { //similar to for loop and if finds a character that matches in current word it wordHolder to show progression
    if(value == guess) {
    wordHolder[index] = guess; //updates place holder variable with correct guess
    }
    })
    if(guessNum <= 0 ){ //if character does not exist in currentWord and guessNum is 0 or less checks game over
    gameOver(); 
    } 
    else {
    checkWin(); //check if user won.
    }  
    document.getElementById("word").innerHTML = makeString(wordHolder, " "); //Updates wins in HTML.
    console.log(wordHolder); //for me
}

function gameOver() { //user lose as previous function criteria matched at function checkWord
     loses++;
     document.getElementById("loses").innerHTML = loses; //Updates loses in HTML.
     document.getElementById("banner").innerHTML = "You Lose! The word was '" + makeString(currentWord, '') + ".' Press a key to play again";
 }


function checkWin(){ //check if user won with no further _ in the wordHolder array
        if(wordHolder.indexOf("_") == -1) { //checks wordHolder arry
        wins++;  //wins = current number + 1
        document.getElementById("wins").innerHTML = wins; //Updates wins in HTML.
        document.getElementById("banner").innerHTML = "You Win! The word was '" + makeString(currentWord, '') + ".' Press a key to play again ";
        }                       
}



document.onkeydown = function(event) { //Start point
var guess = event.key; // takeu user key press and puts it into variable.
guess=guess.toUpperCase(); //forces to be all guesses to be capitlized 

if(wordHolder.indexOf("_") == -1 || guessNum == 0) { //This restarts game on any key is pressed.
	newGame();
}else{
	userGuess(guess); //if game is still active it will pass user guess into function.
}


}

