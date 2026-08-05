//Question 1

var num =10

document.write("Result: <br>")
document.write("The value of num is: "+ num + "<br> <br>")

document.write("The value of ++num is: " + (++num) + "<br>")
document.write("Now the value of num is: " + num + "<br> <br>")

document.write("The value of ++num is: " + (num++) + "<br>")
document.write("Now the value of num is: " + num + "<br> <br>")

document.write("The value of ++num is: " + (--num) + "<br>")
document.write("Now the value of num is: " + num + "<br> <br>")

document.write("The value of ++num is: " + (num--) + "<br>")
document.write("Now the value of num is: " + num + "<br> <br>")

//Question 2

var a = 2 , b = 1;
var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result);

//Question 3

var userName = prompt("Enter your name:","Sidra")
alert("hello " + userName + "! Welcome")

//Question 4

var num = prompt("Enter a number", "5")
if (num === ""|| num === null){
    num = 5
}

document.write("<h2> Multiplication Table of " + num + "</h2>")

for (var i = 1;  i <= 10;  i++){
    document.write (num + " X " + i + " = " + (num *i ) + "<br>")
}

//Question 5
 
var sub1 = prompt("Enter First Subject Name","English")
var sub2 = prompt("Enter Second Subject Name","Math")
var sub3 = prompt("Enter Third  Subject Name","computer")

var totalMarks = 100

var marks1 = +prompt("Enter Obtained Marks for ", "80")
var marks2 = +prompt("Enter Obtained Marks for ","90" )
var marks3 = +prompt("Enter Obtained Marks for ","95" )

var totalObtained = marks1 + marks2 + marks3
var grandTotal = totalMarks * 3
var percentage = (totalObtained / grandTotal) * 100

document.write("<table border='1' cellspacing='0' cellpadding='8'>")
document.write("<tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>")

document.write("<tr><td>" + sub1 + "</td> <td>100</td> <td>" + marks1 + "</td> <td>" + (marks1/100*100). toFixed(2) + "%</td> </tr>")
document.write("<tr><td>" + sub2 + "</td> <td>100</td> <td>" + marks2 + "</td> <td>" + (marks2/100*100). toFixed(2) + "%</td> </tr>")
document.write("<tr><td>" + sub3 + "</td> <td>100</td> <td>" + marks3 + "</td> <td>" + (marks3/100*100). toFixed(2) + "%</td> </tr>")

document.write("<tr><th></th><th>" + grandTotal +"</th><th>" + totalObtained + "</th> <th>" + percentage.toFixed(2) + "%</th> </tr>")
document.write("</table>")

