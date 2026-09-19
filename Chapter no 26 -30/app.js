//Question 1

var number = 3.45214;
number = parseFloat(number);

document.write("Number: " + number + "<br>");
document.write("Round off value: "   + Math.round(number) + "<br>");
document.write("Floor value: "  + Math.floor(number) + "<br>");
document.write("Ceil value: "   + Math.ceil(number) + "<br>");
document.write("<br/>");

//Question 2

var number = -2.673;
number = parseFloat(number);

document.write("Number: " + number + "<br>");
document.write("Round off value: "   + Math.round(number) + "<br>");
document.write("Floor value: "  + Math.floor(number) + "<br>");
document.write("Ceil value: "   + Math.ceil(number) + "<br>");
document.write("<br/>");

//Question 3

var number = -4;
number = parseFloat(number);
var absoluteValue = Math.abs(number);
document.write("The absolute value of " + number + " is " + absoluteValue + "<br>");
document.write("<br/>");

//Question 4

var dice = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + dice + "<br>");
document.write("<br/>");

//Question 5

var player1 = prompt("Enter the name of Player 1:");
var coin1 = prompt(player1 + " Heads or Tails",).toLowerCase();
var player2 = prompt("Enter the name of Player 2:");
var coin2 = prompt(player2 + " Heads or Tails",).toLowerCase();


var coinFlip = Math.random() * 2 ;
var coinResult = Math.floor(coinFlip);



if (coin1 === "tails") {
    document.write(player1 + " flipped a coin and it landed on Tails<br>");

}
else {
    document.write(player1 + " flipped a coin and it landed on Heads<br>");

}

document.write("<br/>");


//Question 6

var randomNumber = Math.floor(Math.random() * 100) + 1;

 document.write("Random number between 1 and 100: " + randomNumber + "<br>");
document.write("<br/>");

//Question 7

var weight = prompt("Enter your weight in kilograms:");
 var userweight = parseFloat(weight);
 document.write("The weight of user is " + userweight + " kilograms<br>");
document.write("<br/>");

//Question 8 

var secretNumber = prompt("Enter a number between 1 and 10:");

var userGuess = parseInt(secretNumber);
var randomNumber = Math.floor(Math.random() * 10) + 1;

if (userGuess === randomNumber){
    document.write("Congratulations! You guessed the correct number: " + randomNumber + "<br>");
}
else{
    document.write("Sorry, the correct number was: " + randomNumber + ". Better luck next time!<br>");
}  
