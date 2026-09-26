//Question 1

let form = document.getElementById("signupForm")

form.addEventListener("submit",function(event){
    event.preventDefault()
})
let firstName = document.getElementById("firstName").Value

let lastName = document.getElementById("lastName").Value

let email = document.getElementById("email").Value

let passWord = document.getElementById("password").Value

document.getElementById("result").innerHTML 

//Question 2

let button = document.getElementById("readMore")
let moreText = document.getElementById("moreText")
button.addEventListener("click", function(){

    if (moreText.style.display === "none"){
        moreText.style.display = "block";
    
        button.innerHTML ="Read Less";
    }
    else{
        moreText.style.display = "none";
        button.innerHTML ="Read More";
    }
})

//Question 3

let students = [];
let editIndex = -1;

// Add Student
document.getElementById("studentForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    let student = {
        name: name,
        email: email,
        course: course
    };

    students.push(student);

    displayStudents();

    document.getElementById("studentForm").reset();

});

// Display Data
function displayStudents() {

    let data = document.getElementById("tableData");

    data.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        data.innerHTML +=
            "<tr>" +
            "<td>" + students[i].name + "</td>" +
            "<td>" + students[i].email + "</td>" +
            "<td>" + students[i].course + "</td>" +

            "<td><button onclick='editStudent(" + i + ")'>Edit</button></td>" +

            "<td><button onclick='deleteStudent(" + i + ")'>Delete</button></td>" +

            "</tr>";

    }

}

// Delete Student
function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();

}

// Edit Student
function editStudent(index) {

    editIndex = index;

    document.getElementById("editForm").style.display = "block";

    document.getElementById("editName").value =
        students[index].name;

    document.getElementById("editEmail").value =
        students[index].email;

    document.getElementById("editCourse").value =
        students[index].course;

}

// Update Student
function updateStudent() {

    students[editIndex].name =
        document.getElementById("editName").value;

    students[editIndex].email =
        document.getElementById("editEmail").value;

    students[editIndex].course =
        document.getElementById("editCourse").value;

    displayStudents();

    document.getElementById("editForm").style.display = "none";

}