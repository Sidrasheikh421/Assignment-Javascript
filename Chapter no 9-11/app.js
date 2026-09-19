//Question 1

var city = prompt("Enter your City name:");

if (city == "karachi"){
    alert("Weclome to city of lights");
}
else{
    alert("Bye bye");
}

//Question 2

var gender = prompt("Enter your gender:");

if (gender == "Female"){
    alert("Good Morning Ma'ma");
}
else{
    alert("Good Morning Sir");
}

//Question 3 

var color = prompt ("Enter the traffic singal color");

if (color == "Red"){
    alert("Must Stop");
}
else if(color == "Yellow"){
   alert("Ready to move");
}
else if(color == "Green"){
    alert("Move now");
}
else{
    alert("invalid color");
}

//Question 4 

var fuel = parseFloat(prompt("Enter remaining fuel in litres"));

if (fuel <= 0.25){
    alert("please refill the fuel in your car");
}
else{
    alert("fuel level is sufficient");

}

//Question 5
//(a)
var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}
//(b)
var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}

//(c)
var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

//(d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

//(e)
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

//(f)
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//Question 6

var totalMarks = +prompt ("Enter TotalMarks:");

var sub1 = +prompt("Enter Marks of Subject 1:");
var sub2 = +prompt("Enter Marks of Subject 2:");
var sub3 = +prompt("Enter Marks of Subject 3:");

var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70){
    grade = "A";
    remarks = "Good";
} 
else if (percentage >= 60){
    grade = "B";
    remarks = "You need to improve";
}
else{
    grade = "Fail";
    remarks = "Sorry"
}

document.write("<h1>Mark Sheet </h1>");
document.write("Total Marks:" + totalMarks + "<br>");
document.write("Marks Obtained:" + obtainedMarks + "<br>" );
document.write("Percentage:" + percentage.toFixed(2) + "%<br>" );
document.write("Grade:" + grade + "<br>" );
document.write("Remarks:" + remarks + "<br>" );

//Question 7

var secretNumber = 6

var guess = +prompt ("Guess the secretNumber(1 to 10 )");
if (guess === secretNumber){
    alert("Bingo! Correct answer");
}
else if( guess + 1 === secretNumber){
    alert("Cloes enough to the correct answer");
}
else{
    alert("Wrong answer Try again.");
}

//Question 8

var number = +prompt("Enter a Number:");
if(number % 3 === 0){
    alert("The number is divisible by 3.")
}
else{
    alert("The number is not divisible by 3.")
}

//Question 9

var number = +prompt("Enter a Number")
if (number % 2 === 0){
    alert("The number is even");
}
else{
    alert("The number is odd");
}

//Question 10

var temperature = +prompt("Enter the temerature");

if (temperature > 40){
    alert("It is too hot outside");
}

else if (temperature > 30){
    alert("The Weather today is Normal");
}

else if (temperature > 20){
    alert("Today's Weather is cool");
}

else if (temperature > 10){
    alert("OMG! Today's weather is so cool");
}

else{
    alert("It is very cool outside")
}

//Question 11

var num1 = +prompt ("Enter first number");
var num2 = +prompt ("Enter second number");
var operation = prompt("Enter operation(+,-,*,/,%)");

if (operation === "+"){
    alert("Result:" +(num1 + num2));
}
else if (operation === "-"){
    alert("Result:" +(num1 - num2));
}
else if (operation === "*"){
    alert("Result:" +(num1 * num2));
}
else if (operation === "/"){
    alert("Result:" +(num1 / num2));
}
else if (operation === "%"){
    alert("Result:" +(num1 % num2));
}
else{
    alert("Invaild Operation");
}







