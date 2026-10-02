//Question 1

// i. Get element of id "main-content"
var mainContent = document.getElementById("main-content");

console.log(mainContent);


// ii. Display all child elements of "main-content"

var children = mainContent.children;

for (var i = 0; i < children.length; i++) {
    console.log(children[i]);
}


// iii. Get all elements of class "render"
// and show their innerHTML in browser

var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {
    document.write(renderElements[i].innerHTML + "<br>");
}


// iv. Fill input value whose element id is "first-name"

document.getElementById("first-name").value = "Alex";


// v. Repeat for "last-name" and "email"

document.getElementById("last-name").value = "Bank";

document.getElementById("email").value = "alexbank@example.com";

//Question 2

// i. What is node type of element having id "form-content"

var formContent = document.getElementById("form-content");

console.log(formContent.nodeType);


// ii. Show node type of element having id "lastName"
// and its child node

var lastName = document.getElementById("lastName");

console.log(lastName.nodeType);
console.log(lastName.firstChild.nodeType);


// iii. Update child node of element having id "lastName"

lastName.firstChild.nodeValue = "Last Name: Khan";


// iv. Get First and last child of id "main-content"

var mainContent = document.getElementById("main-content");

console.log(mainContent.firstChild);
console.log(mainContent.lastChild);


// v. Get next and previous siblings of id "lastName"

console.log(lastName.nextSibling);
console.log(lastName.previousSibling);


// vi. Get parent node and node type of element having id "email"

var email = document.getElementById("email");

console.log(email.parentNode);
console.log(email.nodeType);