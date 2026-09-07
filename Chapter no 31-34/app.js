//Question 1

var today = new Date();
document.write( "Q1: " + "<br>"  +today + "<br><br>");

//Question 2 

var currentMonth = today.getMonth();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.write("Q2: Current Month: " + monthNames[currentMonth] + "<br><br>");
alert("Q2: Current Month: " + monthNames[currentMonth]);

//Question3
var today = new Date();
var dayOfWeek = today.getDay();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
alert("Q3: Today is: " + dayNames[dayOfWeek]);
document.write("Q3: Today is: " + dayNames[dayOfWeek] + "<br><br>");


//Question 4

var today = new Date();
var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if (dayName[today.getDay()] === "Saturday" || dayName[today.getDay()] === "Sunday") {
    alert("Q4: It's Fun day");
    document.write("Q4: It's Fun day" + "<br><br>");
}

//Question 5

var date = new Date();
var daysOfMonth = date.getDate();
if (daysOfMonth < 16) {
    alert("Q5: First fifteen days of the month");
    document.write("Q5: First fifteen days of the month" + "<br><br>");
}
else{
    alert("Q5: Last days of the month");
    document.write("Q5: Last days of the month" + "<br><br>");
}

// Question 6

var todate = new Date();
var currentDate = todate.getDate();
var elapsedMilliseconds = todate.getTime();
var elapsedMinutes = elapsedMilliseconds / (1000 * 60);
document.write("Q6: Current Date: " + todate + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + elapsedMinutes + "<br><br>");

// Question 7

var today = new Date();
var currenthours = today.getHours();
if (currenthours < 12) {
    alert("Q7: It's AM");
    document.write("Q7: It's AM" + "<br><br>");
}
else {
    alert("Q7: It's PM");
    document.write("Q7: It's PM" + "<br><br>");
}

//Question 8

var today = new Date();
var laterDate = new Date(today.getFullYear(), 11, 31); // December 31 of the current year
document.write("Q8: Later date: " + laterDate + "<br>");
document.write("<br>");

//Question 9 

var ramadanStartDate = new Date("April 13, 2023");
var today = new Date();
var timeDifference = today.getTime() - ramadanStartDate.getTime();
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Q9: " + daysPassed + " days have passed since 1st Ramadan, 2023");
document.write("Q9: " + daysPassed + " days have passed since 1st Ramadan, 2023" + "<br><br>");

//Question 10

var referenceDate = new Date("January 1, 2015");
var currentDate = new Date();
var timeDifference = currentDate.getTime() - referenceDate.getTime();
var secondsPassed = Math.floor(timeDifference / 1000);
alert("Q10: On reference date " + referenceDate + ", " + secondsPassed + " seconds had passed since beginning of 2015");
document.write("Q10: On reference date " + referenceDate + ", " + "<br>" + secondsPassed + " seconds had passed since beginning of 2015" + "<br><br>");

//Question 11

var today = new Date();
var currentHour = today.getHours();
var oneHourAgo = new Date(today.getTime() - (1 * 60 * 60 * 1000));
var currentHourOneHourAgo = oneHourAgo.getHours();
document.write("Q11: Current date: " + today + "<br>");
document.write("1 hour ago, it was: " + oneHourAgo + "<br><br>");

//Question 12

var today = new Date();
var currentYear = today.getFullYear();
var hundredYearsAgo = new Date(currentYear - 100, today.getMonth(), today.getDate());
alert("Q12: Current date: " + today + "\n100 years back, it was: " + hundredYearsAgo);
document.write("Q12: Current date: " + today + "<br>");
document.write("100 years back, it was: " + hundredYearsAgo + "<br><br>");

//Question 13

var age =  Number(prompt("Enter your age:"));
var birthYear = new Date().getFullYear() - age;
alert("Q13: Your birth year is " + birthYear);
document.write("Q13: Your age is " + age + "<br>");
document.write("Q13: Your birth year is " + birthYear + "<br><br>");

//Question 14
//a. Customer Name 
//b. Current Month 
//c. Number of units 
//d. Charges per unit 
//e. Net Amount Payable (within Due Date) 
//f. Late Payment Surcharge 
//g. Gross Amount Payable (after Due Date); 

var customerName = prompt("Enter your name:");
var currentMonth = new Date().getMonth();
var numberOfUnits = Number(prompt("Enter number of units:"));
var chargesPerUnit = 16;
var netAmountPayable = chargesPerUnit * numberOfUnits;
var latePaymentSurcharge = 350;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
document.write("Q14: Customer Name: " + customerName + "<br>");
document.write("Q14: Current Month: " + currentMonth + "<br>");
document.write("Q14: Number of Units: " + numberOfUnits + "<br>");
document.write("Q14: Charges per Unit: " + chargesPerUnit + "<br>");
document.write("Q14: Net Amount Payable: " + netAmountPayable + "<br>");
document.write("Q14: Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
document.write("Q14: Gross Amount Payable: " + grossAmountPayable + "<br><br>");
