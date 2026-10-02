//Question 1

let itemsArray = [
    {
        name: "juice",
        price: 50,
        quantity: 3
    },
    {
        name: "cookie",
        price: 30,
        quantity: 9
    },
    {
        name: "shirt",
        price: 880,
        quantity: 1
    },
    {
        name: "pen",
        price: 100,
        quantity: 2
    }
];

function calculatePrice() {

    let total = 0;
    let result = "";

    for (let i = 0; i < itemsArray.length; i++) {

        let itemTotal =
            itemsArray[i].price * itemsArray[i].quantity;

        total = total + itemTotal;

        result += itemsArray[i].name +
            " Total Price = " +
            itemTotal + "<br>";
    }

    result += "<br><b>All Items Total = " +
        total + "</b>";

    document.querySelector("#output").innerHTML = result;
}

//Question 2

let person = {
    name: "Sidra",
    email: "sidra@gmail.com",
    password: "12345",
    age: 20,
    gender: "Female",
    city: "Karachi",
    country: "Pakistan"
};

function checkProperties() {

    let result = "";

    if ("age" in person) {
        result += "Age property exists<br>";
    } else {
        result += "Age property does not exist<br>";
    }

    if ("country" in person) {
        result += "Country property exists<br>";
    } else {
        result += "Country property does not exist<br>";
    }

    if ("firstName" in person) {
        result += "firstName property exists<br>";
    } else {
        result += "firstName property does not exist<br>";
    }

    if ("lastName" in person) {
        result += "lastName property exists<br>";
    } else {
        result += "lastName property does not exist<br>";
    }

    document.getElementById("output").innerHTML = result;
}


//Question 3

function Student(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let student1 = new Student("Ali", 20, "Karachi");
let student2 = new Student("Sara", 21, "Lahore");
let student3 = new Student("Ahmed", 22, "Islamabad");

function showRecords() {

    let result = "";

    result += "Name: " + student1.name + ", Age: " + student1.age +
        ", City: " + student1.city + "<br>";

    result += "Name: " + student2.name + ", Age: " + student2.age +
        ", City: " + student2.city + "<br>";

    result += "Name: " + student3.name + ", Age: " + student3.age +
        ", City: " + student3.city;

    document.getElementById("output").innerHTML = result;
}

//Question 4

function Person(name, gender, address, education, profession) {

    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

document.getElementById("personForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;

        let gender = document.querySelector(
            'input[name="gender"]:checked'
        ).value;

        let address = document.getElementById("address").value;

        let education =
            document.getElementById("education").value;

        let profession =
            document.getElementById("profession").value;

        let person1 = new Person(
            name,
            gender,
            address,
            education,
            profession
        );

        document.getElementById("output").innerHTML =
            "Name: " + person1.name + "<br>" +
            "Gender: " + person1.gender + "<br>" +
            "Address: " + person1.address + "<br>" +
            "Education: " + person1.education + "<br>" +
            "Profession: " + person1.profession;
    }
);


