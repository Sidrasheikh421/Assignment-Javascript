 //Question 1

 var multiarray =[1,2,3,["color",["red","blue"]],true,];
 console.log(multiarray[3][1]);

 //Question 2

 var matrix =[
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
 ]
 document.write("<h1> Matrix </h1>");
 for(var i = 0; i < matrix.length;i++){
    for (var j= 0; j < matrix[i].length;j++){
     document.write(matrix[i][j] + " " );
    }
     document.write("<br>");
 }

 //Question 3

 var counting =[1,2,3,4,5,6,7,8,9,10];

 document.write("<h1> Counting </h1>");
 for(var i = 1; i <= 10;i++){
    document.write(i + "<br>");
 }

 //Question 4

 var tableNumber = prompt("Enter table number:");
 var tableLength = prompt("Enter table length:");

 document.write("<h1> Table of " + "Multiplication " + tableNumber +  "</h1>");
 for(var i = 1; i <= tableLength; i++){
   document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
 }

 //Question 5

 var fruits =["apple", "banana", "mango", "orange", "strawberry"];
 
  document.write("<h1> Fruits </H1>");

  for(var i =0; i<fruits.length; i++){
   document.write(fruits[i] + "<br>");
  }
  document.write("<br>");

  for(var i =0; i<fruits.length; i++){
   document.write("Element at index " + i + " is " + fruits[i] +"<br>");
  }

  //Question 6
   //a)
  var  counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  document.write("<h2> Counting </h2>");
   for(var i =1; i <= 15; i++){
    document.write(i + ",");
   }

   //b)
   var reverseCounting =[10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
   document.write("<h2> Reverse Counting </h2>");
   for(var i =10; i>= 1; i--){
      document.write(i + ", "); 
   }

   //c)
   var even =[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
   document.write("<h2> Even </h2>");
   for(var i =0; i <= 20; i+=2){
      document.write(i + ", ");
   }

   //d)

   var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
   document.write("<h2> Odd </h2>");
   for(var i =1; i <= 20; i+=2){
     document.write(i + ", ");  
   }

   //e)
   var series = ["2k", "4k", "6k", "8k","10k", "12k", "14k", "16k", "18k", "20k"];
   document.write("<h2> Series </h2>");
   for(var i =2; i <= 20; i+=2){
      document.write(i + "k, ");
   }
 
   //Question 7

   var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
   var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
   var flag =false;

   for(var i =0; i< bakeryItems.length; i++){
     if(bakeryItems[i] === userInput){
        flag = true;
        break;
     }
   }
   if(flag ===true){
      alert(userInput + " is available at index " + bakeryItems.indexOf(userInput) + " in our bakery");
   }
    else {
      alert("We are Sorry. " + userInput + " is not available in our bakery");
   }

   //Question 8

   var A = [24, 53, 78, 91, 12];
   var largest = A[0];
   for(var i = 0; i < A.length; i++){
      if(A[i] > largest){
         largest = A[i];
      }
   }
   document.write("<h2> Array items: " + A + "</h2>");
   document.write("<h2> The largest number is " + largest + "</h2>");

   //Question 9

   var A = [24, 53, 78, 91, 12];
   var smallest = A[0];
   for(var i = 0; i < A.length; i++){
      if(A[i] < smallest){
         smallest = A[i];
      }
   }
   document.write("<h2> Array items: " + A + "</h2>");
   document.write("<h2> The smallest number is " + smallest + "</h2>");

   //Question 10

   var multiple = 5;

   document.write("<h2> Multiples of 5 ranging 1 to 100 </h2>");
   for(var i = 1; i <= 100; i++){
      if(i % multiple === 0){
         document.write(i + ", ");
      }
   }