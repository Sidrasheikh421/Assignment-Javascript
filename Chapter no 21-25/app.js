//Question 1

var firstName = prompt("Enter your first name");
var lastName =  prompt("Enter your last name");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

//Question 2

var phone = prompt("Enter your favorite mobile phone model");
// var phoneLength = phone.length;


document.write("My favorite phone is: " + phone + "<br> ");
document.write("Length of string: " + phone.length + "<br>");

//Question 3

var word = "Pakistani";
var index = word.indexOf("n");

document.write("<br>");
document.write("String :"  + word + "<br>");
document.write("Index of 'n' :" + index + "<br>");

//Question 4

var word = "Hello World";
var lastIndex = word.lastIndexOf("l");

document.write("<br>");
document.write("String :"  + word + "<br>");
document.write("Last index of 'l' :" + lastIndex + "<br>");

//Question 5

var word = "Pakistani";
var charAtIndex = word.charAt(3);

document.write("<br>");
document.write("String :"  +  word + "<br>");
document.write("Character at index 3 :" + charAtIndex + "<br>");

//Question 6

var firstName = prompt("Enter your first name");
var lastName =  prompt("Enter your last name");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "!");

//Question 7

var city = "Hyderabad";
var newCity = city.replaceAll("Hyder", "Islam");

document.write("<br>");
document.write("City :"   + city + "<br>");
document.write("After replacement :"  +  newCity + "<br>");

//Question 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replaceAll("and", "&");

document.write("<br>");
document.write("Message :"  +  message + "<br>");
document.write("After replacement :"  +   newMessage + "<br>");

//Question 10

var userInput = "peanuts";
var upperCaseInput = userInput.toUpperCase();

document.write("<br>");
document.write("User input :"  +  userInput + "<br>");
document.write("Uppercase :"   +  upperCaseInput + "<br>");

// Question 11

var userInput = "javascript";
var titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

document.write("<br>");
document.write("User input :"  + userInput + "<br>");
document.write("Title case :"  + titleCaseInput + "<br>");

//Question 12

var num = 35.36;
var numString = num.toString().replace(".", "");


document.write("<br>");
document.write("Number :"  + num + "<br>");
document.write("Result :"  + numString + "<br>");

//Question 13

var userASCII = prompt("Enter your username :");

for (var i = 0; i < userASCII.length; i++) {
    var Code = userASCII.charCodeAt(i);
    if (Code === 33 || Code === 44 || Code === 46 || Code === 64) {
        alert("Please enter a valid username without special characters like !, ., @, or ,");
        userASCII = prompt("Enter your username :");
        i = -1;
    }

}
document.write("<br>");
document.write("Your username is: " + userASCII + "<br>");

// Question 14

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/ma'am?").toLowerCase();

var flag = false;
for (var i = 0; i < items.length; i++) {
    if (items[i] === userInput) {
        flag = true;
        break;
        
    }
}
if (flag) {
    alert(userInput + " is available at index " + i + " in our bakery.");
}
else {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
}

// Question 15

var password = prompt("Enter your password :");
var isValid = true;
var hasLetter = false;
var hasNumber = false;

if (password.length < 6) {
    alert("Password must be at least 6 characters long.");

}
else if(password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    alert("Password must start with a letter.");
}
// Har character ka ASCII code check
 for (var i = 0; i < password.length; i++){
     var code = password.charCodeAt(i);
     //A-Z or a-z
     if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
         hasLetter = true;
     }
     //0-9
        else if(code >= 48 && code <= 57) {
            hasNumber = true;
        }
        // special character
        else{
            hasLetter = false;
            hasNumber = false;
            break;
        }
 }
 if (hasLetter && hasNumber) {
     alert("Password is valid.");
 }
 else {
     alert("Password must contain both letters and numbers.");
 }
 

 //Question 16

 var university = "University of Karachi";
var universityArray = university.split("");

document.write("<br>");
for (var i = 0; i < universityArray.length; i++) {
document.write(universityArray[i] + "<br>");
}

//Question 17

var userInput = "Pakistan";
var lastChar = userInput.charAt(userInput.length - 1);

document.write("<br>");
document.write("User input :"  + userInput + "<br>");
document.write("Last character of input :"  + lastChar + "<br>");

//Question 18

var text = "The quick brown fox jumps over the lazy dog";
var count = 0
var words = text.split(" ");

 for (var i = 0; i < words.length; i++) {
     if (words[i].toLowerCase() === "the") {
         count++;
     }
 } 
document.write("<br>");
document.write("Text :"  + text + "<br>");
document.write("Number of occurrences of 'the': " + count + "<br>");
