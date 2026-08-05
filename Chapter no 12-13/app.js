//Question 1

var input = prompt("Enter a Character:");
var code = input.charCodeAt(0);

if (code >= 48 && code <= 57){
    alert(input + "is a Number.");
}
else if (code >= 65 && code <= 90){
    alert(input +"is an Uppercase Letter");
}
else if (code >= 97 && code <= 122){
    alert(input + "is a Lowercase letter");
}
else{
    alert("Invalid Input");
}

//Question 2

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")

if (num1 > num2){
    alert("Larger number is:" + num1);
}
else if (num2 > num1){
    alert("Larger number is:" + num2);
}
else{
    alert("Both number are equal.");
}

//Question 3

var num = +prompt("Enter a number:")

if (num > 0){
    alert(num + "is a Positive number.");
}
else if (num < 0){
    alert(num + "is a Negative number.");
}
else{
    alert("The number is Zero.");
}

//Question 4

var ch = prompt("Enter a Character:");

if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||   ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U"){
    alert("True");
}
else{
    alert("False");
}

//Question 5

var correctPassword = "admin123"
var userPassword = prompt("Enter your password:");

if (userPassword === "" || userPassword === null){
    alert("Please enter your password");
}
else if(userPassword === correctPassword){
    alert("Correct! The password you entered matches the original password.");
}
else{
    alert("Incorrect password.");
}

//Question 6

var greeting;
var hour = 13 

if (hour < 18){
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}
alert("greeting");

//Question 7

var time = +prompt("Enter time in 24-hour format (e.g: 1900)");

if (time >= 0 && time < 1200){
    alert("Good Morning!");
}
else if (time >= 1200 && time < 1700){
    alert("Good Afternoon!");
}
else if (time >= 1700 && time < 2100){ 
    alert("Good Evening!");
}
else if (time >= 2100 && time <= 2359){
    alert("Good Night!");
}
else{
    alert("Invalid Time!");
}