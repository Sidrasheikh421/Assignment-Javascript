//Question 1

let link = document.querySelector("#mylink");
link.addEventListener("click",function(){
    alert("You clicked on the link");
})

//Question 2

 let phone = document.querySelectorAll(".Mobile");

 for(let i = 0; i < phone.length;i++){
     phone[i].addEventListener("click", function(){
        alert("Thanks for purchasing a phone from us");
     })
 }
//Question 3

let buttons = document.querySelectorAll("button")

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function(){
        console.log(buttons[i].parentNode.parentNode.remove())
    })
}

//Question 4
function ChangeImage(e){
    console.log(e.target.src)
    e.target.src = "./images/Car.jpg"
}
function previousImg(e){
    console.log(e.target.src)
    e.target.src = "./images/Bike.jpg"
}

//Question 5

let increaseBtn = document.querySelector("#increase")

increaseBtn.addEventListener("click", function() {
   
    let counterValue = document.querySelector("#counter")
    counterValue.innerHTML += 1
    

    counterValue.innerHTML++
})

let decreaseBtn = document.querySelector("#decrease")

decreaseBtn.addEventListener("click", function(){
    let counterValue = document.querySelector("#counter")
    
    counterValue.innerHTML--
    if(counterValue.innerHTML < 0){
        counterValue.innerHTML = 0
    }
})






