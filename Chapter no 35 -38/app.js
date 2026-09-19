//Question 1

function gettime() {
    let today = new Date();
    console.log(today);
}
gettime();

//Question 2

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
function greetUser(firstName, lastName) {

    let fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}
greetUser(firstName, lastName);

//Question 3

let sum1 = Number(prompt("Enter first sum"));
let sum2 = Number(prompt("Enter second sum"));
let result = sum1 + sum2;
function addNumbers(sum1, sum2) {
    return result;

}
addNumbers(sum1, sum2);
document.write("Sum :" + " " + result);
document.write("<br>");

//Question 4

let num1 = Number(prompt("Enter first numbers"));
let num2 = Number(prompt("Enter second numbers"));
let operator = prompt("Enter operator (+, -, *, /)");
function calculate(num1, num2, operator) {
    let result = num1 + num2 + operator;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator");
    }

}
calculate(num1, num2, operator);
document.write("Calculation:" + " " + result);
document.write("<br>");

//Question 5

let num = 10;
function square(num) {
    return num * num;
}
square(num);
document.write("Square :" + " " + square(num));
document.write("<br>");

//Question 6

let $num = 5;
function factorial($num) {
    let result = 1;
    for (let i = 1; i <= $num; i++) {
        result *= i;
    }
    return result;
}
factorial($num);
document.write("Factorial of " + $num + " :" + " " + factorial($num));
document.write("<br>");

//Question 7

let startNum = Number(prompt("Enter start number"));
let endNum = Number(prompt("Enter end number"));

function counting(startNum, endNum) {
    for (let i = startNum; i <= endNum; i++) {
        document.write(i + "<br>");
    }
}
counting(startNum, endNum);

//Question 8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    let hypotenuseSquare = calculateSquare(base) + calculateSquare(perpendicular);
    let hypotenuse = Math.sqrt(hypotenuseSquare);
    return hypotenuse;
}
calculateHypotenuse(3, 4);
let base = 3;
let perpendicular = 4;
let calcResult = calculateHypotenuse(base, perpendicular);
document.write(`Hypotenuse : ${calcResult}`);
document.write("<br>");

//Question 9

//a)
function areaOfRectangle(width, height) {
    return width * height;
}
let width = 5;
let height = 10;
areaOfRectangle(width, height);
document.write(`Area of Rectangle : ${areaOfRectangle(width, height)}`);
document.write("<br>");

//b)
function calculateArea(width, height) {
    return width * height;
}
let areaWidth = 10;
let areaHeight = 5;
calculateArea(areaWidth, areaHeight);
document.write(`Area  : ${calculateArea(areaWidth, areaHeight)}`);
document.write("<br>");

//Question 10

function checkPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        return "It is a palindrome";
    } else {
        return "It is not a palindrome";
    }
}
let word = prompt("Enter a word");
checkPalindrome(word);
document.write(`Result : ${checkPalindrome(word)}`);
document.write("<br>");

//Question 11 

function capitalizeFirstLetter(str) {
    let word = str.split(" ");
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    return word.join(" ");
}
let sentence = "the quick brown fox";
capitalizeFirstLetter(sentence);
document.write(`Output : ${capitalizeFirstLetter(sentence)}`);
document.write("<br>");

//Question 12

function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
let text = "Web Development Tutorial";
findLongestWord(text);
document.write(`Longest Word = ${findLongestWord(text)}`);
document.write("<br>");


//Question 13

function countOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}
let string = "JSResourceS.com";
let letterToCount = "o";
countOccurrences(string, letterToCount);
document.write(`Occurrences of ${letterToCount} in ${string} = ${countOccurrences(string, letterToCount)}`);
document.write("<br>");

//Question 14

let radius = Number(prompt("Enter radius of circle"));

function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;

    document.write(`The circumference is ${circumference.toFixed(2)} <br>`);
    document.write("<br>");
}

function calcArea(radius) {
    let area = Math.PI * radius * radius;

    document.write(`The area is ${area.toFixed(2)} `);
}

calcCircumference(radius);
calcArea(radius);