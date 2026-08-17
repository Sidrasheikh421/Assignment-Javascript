//Question 1

var studentName =["Ayesha","Mehak","Zoya","Hafsa"];
console.log(studentName[0]);

//Question 2

var studentName =new Array("Sehar","Noor","Sarah","Fatima");
console.log(studentName[2]);

//Question 3

var fruitsName =["Mango","Banana","apple","Orange"];
console.log(fruitsName);

//Question 4

var numbers =[10,20,30,40,50];
console.log(numbers);

//Question 5

var booleanValue =[true,false];
console.log(booleanValue);

//Question 6

var mixedArray =["Fatima",10,"Maryam",true,30];
console.log(mixedArray);

//Question 7

var qualifications =["SSC","HSC","BCS","BS","BCom","MS","M.Phil","PhD"];
document.write("<h1>Qualifications:</h1>");
document.write("<ol>");
document.write("<li>"+ qualifications[0] + "</li>");
document.write("<li>"+ qualifications[1] + "</li>");
document.write("<li>"+ qualifications[2] + "</li>");
document.write("<li>"+ qualifications[3] + "</li>");
document.write("<li>"+ qualifications[4] + "</li>");
document.write("<li>"+ qualifications[5] + "</li>");
document.write("<li>"+ qualifications[6] + "</li>");
document.write("<li>"+ qualifications[7] + "</li>");
document.write("</ol>");

//Question 8

var students =["Michael","John","Tony"];
var scores =[320 , 230 , 480];
var totalMarks = 500
for (var i = 0; i < students.length; i++){
    var percentage =(scores[i] / totalMarks) * 100;
    document.write("Score of " + students [i]  + " is " + scores [i] + ". Percentage: " + percentage +"%<br> <br>");
}

//Question 9

var colors =["Red","Green", "Blue","Yellow"];

document.write(colors +"<br>");

colors.unshift(prompt("Add color at beginning:"));
document.write(colors + "<br>");

colors.push(prompt("Add color at end:"));
document.write(colors + "<br>");

colors.unshift("Pink","Orange");
document.write(colors +"<br>");

colors.shift()
document.write(colors +"<br>");

colors.pop()
document.write(colors + "<br>");

var index = Number(prompt("Enter index:"));
var color = prompt("Enter color");
colors.splice(index, 0 , color);
document.write(colors + "<br>");

var delIndex = Number (prompt("Enter delete index:"));
var delCount = Number(prompt("How many colors to delete?"));
colors.splice(delIndex ,delCount);

document.write(colors);
document.write("<br>");

//Question 10

var scores =[320, 230, 480, 120];
 document.write("<br>");
document.write("Scores of Students :" + scores + "<br>");

scores.sort(function(a ,b){
    return a - b ;
})

document.write("Ordered Scores of Students : " + scores);

//Question 11

var cities =["Karachi" ,"Lahore" ,"Islamabad" ,"Quetta" ,"Peshawar"];
var selectedCities =
cities.slice(2, 4);
document.write("<br>");

document.write("Cities list:<br>")
document.write(cities + "<br> <br>");

document.write("Selected cities list : <br>");
document.write(selectedCities);

//Question 12

var arr =["This" ,"is" ,"my" ,"cat"];
var string = arr.join("");

document.write("<br>");

document.write("Array:<br>");
document.write(arr.join(",") + "<br> <br>");

document.write("String:<br>");
document.write(string);

//Question 13 

var queue =[]
queue.push("Apple");
queue.push("Banana");
queue.push("Mango");
queue.push("Orange");

document.write("<br> <br>");

document.write("Array:" + queue + "<br><br>");

document.write("First value: " + queue.shift() + "<br>");
document.write("Second value: " + queue.shift() + "<br>");
document.write("Thrid  value: " + queue.shift() + "<br>");
document.write("Fourth value: " + queue.shift() + "<br>");

//Question 14 

var stack = [];

stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
stack.push("Monitor");

document.write("<br>");

document.write("Array:" + stack + "<br><br>");

document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");

//Question 15 

var manufacturers =["Apple" ,"Samsung" ,"Motorola" ,"Nokia" ,"Sony" ,"Haier"];

document.write ("<br>")

document.write("<select>");

for (var i = 0 ; i < manufacturers.length; i++){
    document.write("<option>" + "</option>");
     document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");