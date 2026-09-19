//Question 1

function power(a, b){
    return Math.pow(a , b);
}
let a = 2;
let b =  5;
let result = power(a , b);
document.write(`${a}  raised  to  ${b} = ${result}`);

document.write("<br>");

//Question 2

function checkleapYear(year){

    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return year + " is a leap year.";
    }
     else {
        return year + " is not a leap year.";
    }
}
let year = Number(prompt("Enter a year :"));

document.write(checkleapYear(year));
document.write("<br>");

//Question 3

function calculateS(side1 ,side2 ,side3){
    return (side1 + side2 + side3) / 2;

}
function calculateArea(){

    let s = calculateS(side1 , side2 , side3);
    let area = Math.sqrt( s * (s - side1) * (s - side2) * (s - side3));

    return area;
}
let side1 = Number(prompt("Enter is Side1:"));
let side2 = Number(prompt("Enter is side2:"));
let side3 = Number(prompt("Enter is side3:"));
let area  = calculateArea(side1 , side2 , side3);
document.write(`Area of Triangle = ${area}`);
document.write("<br>");

//Question 4

function calculateAverage(m1 , m2 , m3){

    let average = (m1 + m2 + m3) / 3;
    return average;
}

function calculatePercentage(m1 , m2 , m3){
    
    let total = m1 + m2 + m3;
    let percentage = (total / 300) * 100;
    
    return percentage;
}
function mainFunction(){
    let m1 = Number(prompt("Enter marks of Subject 1 :"));
    let m2 = Number(prompt("Enter marks of Subject 2 :"));
    let m3 = Number(prompt("Enter marks of Subject 3 :"));

    let average = calculateAverage(m1 , m2 , m3);
    let percentage = calculatePercentage(m1 , m2 , m3);

    document.write(`Average Marks = ${average} <br>`);
    document.write(`Percentage = ${percentage} %`);
}
mainFunction()
document.write("</br>");

//Question 5


let text = prompt("Enter a String :");
let character = prompt("Enter a character :");

function myIndexOf(text , character){

    for (let i = 0; i < text.length; i++){
        if (text[i] === character){
            return i;
        }
    }
    return -1;
}
let indexResult = myIndexOf(text ,character);
document.write(`Index = ${indexResult}`);
document.write("<br>");

//Question 6

function removeVowels(sentence){
    let result = "";
    
    for (let i = 0; i < sentence.length; i++){

        let ch = sentence[i].toLowerCase();
         if (ch !== "a" && 
             ch !== "e" &&
             ch !== "i" &&
             ch !== "o" &&
             ch !== "u" ){
                result += sentence[i];
             }
    }
    return result;
        
}
let sentence = prompt("Enter a sentence (maximum 25 characters) :");
let vowelResult = removeVowels(sentence);
document.write (`Original Sentence : ${sentence} <br>`);
document.write (`Without volwels : ${vowelResult}`);
document.write ("</br>");

//Question 7

let words = prompt("Enter a words :");

function countVowrls(sentence){
    let count = 0
    for (let i = 0; i < words.length -1; i++){
        let pair = words[i].toLowerCase() + sentence[i].toLowerCase();

        switch (pair){

            case "aa":
            case "ae":
            case "ai":
            case "ao":
            case "au":
                
            case "ea":
            case "ee":
            case "ei":
            case "eo":
            case "eu":
                
            case "ia":
            case "ie":
            case "ii":
            case "io":
            case "iu":
                
            case "oa":
            case "oe":
            case "oi":
            case "oo":
            case "ou":
                
            case "ua":
            case "ue":
            case "ui":
            case "uo":
            case "uu":
                
            count++;
            break;

        }
    }
    return count;

}
let countResult = countVowrls(words);
document.write(`Number of vowel pairs = ${countResult} <br>`);

//Question 8 

function meters(km){
    return km * 1000;
}

function feet(km){
    return km * 3280.84;
}
function inches(km){
    return km * 39370.08;
}
function centimeters(km){
    return km * 100000;
}
let km = Number(prompt("Enter distance in kilometers :"));

document.write("Distance = " + km +"km" + "<br>");
document.write("Meters = " + meters(km) + "<br>");
document.write("Feet = " + feet(km) + "<br>");
document.write("Inches = " + inches(km) + "<br>");
document.write("Centimeters = " + centimeters(km));
document.write("<br>");

//Question 9 

let hours = Number(prompt("Enter hours worked :"));

let overtimePay = 0;
if (hours > 40){
    let overtimeHours = hours - 40;
    overtimePay = overtimeHours * 12;
}
document.write(`Hours Worked = ${hours} <br>`);
document.write(`Overtime Pay = Rs. ${overtimePay} <br>`);

//Question 10

let amount = Number(prompt("Enter amount to withdraw :"));
let hundred = Math.floor(amount / 100);
amount = amount % 100;

let fifty = Math.floor(amount / 50);
amount = amount % 50;

let ten = Math.floor(amount /10);

document.write(`You will have :<br>`);
document.write(`${hundred} hundred notes <br>`)
document.write(`${fifty} fifty notes <br>`);
document.write(`${ten} ten notes.`);
