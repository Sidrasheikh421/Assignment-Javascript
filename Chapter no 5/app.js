//Question 1

var num1 = 10
var num2 = 5
var sum = num1 + num2
document.write("sum of " + num1 + " and " + num2 + " is " + sum)

//Question 2

var subtraction = num1 - num2
var multiplication = num1 * num2 
var division = num1 / num2 
var modulus = num1 % num2

document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction + "<br>")
document.write("Multiplication of " + num1 +" and " + num2 + " is " + multiplication + "<br>")
document.write("Division of " + num1 + " and " + num2 + " is " + division + "<br>")
document.write("Modulus of " +  num1 + " and " + num2 + " is " + modulus + "<br> <br>")


//Question 3

var num 

document.write("Value after vaiable declaration is " + num + "<br>")

var  num = 5 
document.write("Inittal value: " + num + "<br>")

var  num = num + 1 
document.write("Value after increment is:" + num + "<br>")

var  num = num + 7
document.write("Value after addition is:" + num + "<br>")

var  num = num - 1 
document.write("Value after decrement is:" + num + "<br>")

var remainder = num % 3
document.write("The remainder is:" + remainder + "<br>")

//Question 4

var ticketPrice = 600
var totalCost = ticketPrice * 5
 
document.write("<h1> Ticket Price </h1>")
document.write("Price of one movie ticket is " + ticketPrice + "PKR <br>")
document.write ("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR")

//Question 5

var num = 4

document.write("<h1>Multiplication Table of " + num + "</h1>")

document.write(num + " X 1 = " + (num * 1) + "<br>")
document.write(num + " X 2 = " + (num * 2) + "<br>")
document.write(num + " X 3 = " + (num * 3) + "<br>")
document.write(num + " X 4 = " + (num * 4) + "<br>")
document.write(num + " X 5 = " + (num * 5) + "<br>")
document.write(num + " X 6 = " + (num * 6) + "<br>")
document.write(num + " X 7 = " + (num * 7) + "<br>")
document.write(num + " X 8 = " + (num * 8) + "<br>")
document.write(num + " X 9 = " + (num * 9) + "<br>")
document.write(num + " X 10 = " + (num * 10)+ "<br> <br>")

//Question 6

var celsius = 25
var fahrenheit = ( celsius * 9/5) + 32
 
document.write(celsius + " 'C is " + fahrenheit + " 'F <br> <br>")

var fahrenheit = 70 
var celsius =( fahrenheit - 32) * 5/9

document.write(fahrenheit + "'F is " + celsius + " 'C ")

//Question 7

var PriceItem1 = 650
var PriceItem2 = 100

var quantityItem1 = 3
var quantityItem2 = 7
var shippingCharges = 100
var totalCost = (PriceItem1 * quantityItem1) + (PriceItem2 * quantityItem2) + shippingCharges

document.write("<h1> Shopping Cart </h1>")

document.write("Price of item 1 is " + PriceItem1 + "<br>")
document.write("Quantity of item 1 is " + quantityItem1 + "<br>")

document.write("Price of item 2 is " + PriceItem2 + "<br>")
document.write("Quantity of item 2 is " + quantityItem2 + "<br>")

document.write("Shipping Charges" + shippingCharges + "<br> <br>")
document.write("Total cost of your order is" + totalCost)

//Question 8

var totalMarks = 980
var marksObtained = 804
var percentage =(marksObtained / totalMarks) * 100

document.write("<h1>Marks Sheet</h1>")

document.write("Total Marks: " + totalMarks + "<br>")
document.write("Marks Obtained:" + marksObtained + "<br>")
document.write("Percentage: " + percentage + "%")

//Question 9

var totalPKR = ( 10 * 104.80) + (25 *28)

document.write("<h1> Currency in PKR </h1>")
document.write("Total Curreny in PKR:" + totalPKR)

//Question 10

var num = 10
var result =((num + 5) * 10) / 2

document.write("<h1> Arithmetic Expression Result </h1>")
document.write("Result is:" + result)

//Question 11

var currentYear = 2026
var birthYear =2001
var age1 = currentYear - birthYear
var age2 = age1 - 1

document.write("<h1> Age Calculator </h1>")
document.write("Current Year:" + currentYear +"<br>")
document.write("Birth Year:" + birthYear + "<br>")
document.write("They are either " + age2 + " or " + age1 + "years old")

//Question 12

var radius = 20
var circumference = 2 * 3.142 * radius
var area = 3.142 * radius * radius

document.write("<h1> The Geometrizer </h1>")
document.write("Radius of a circule: " + radius + "<br>")
document.write("The Circumference is " + circumference + "<br>")
document.write("The area is " + area)

//Question 13

var favoriteSnack = "Chocolate Chip"
var currentAge = 25
var maxAge = 80 
var amountPerDay = 3
var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay

document.write("<h1> Lifetime Supply Calculator </h1>")
document.write("Favorite Snack:" + favoriteSnack + "<br>")
document.write("Current Age: " + currentAge + "<br>")
document.write("Estimated Maximum Age:" + maxAge +"<br>")
document.write("Amount of Snack per Day:" + amountPerDay + "<br> <br>")
document.write("You will need " + totalNeeded + favoriteSnack + "to last you until the ripe old age of "  + maxAge + "." )


