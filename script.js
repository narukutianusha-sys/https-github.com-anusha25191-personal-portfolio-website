// Welcome Message
document.getElementById("welcome").innerHTML =
"Welcome to My Interactive Portfolio!";

// Dark Mode
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

});

window.onload = function(){

    if(localStorage.getItem("theme")=="dark"){
        document.body.classList.add("dark-mode");
    }

};

// Image Slider
const images=[
"images/slider1.jpg",
"images/slider2.jpg",
"images/slider3.jpg"
];

let current=0;

function nextImage(){

current++;

if(current>=images.length){
current=0;
}

document.getElementById("sliderImage").src=images[current];

}

function previousImage(){

current--;

if(current<0){
current=images.length-1;
}

document.getElementById("sliderImage").src=images[current];

}

// To Do List
function addTask(){

let task=document.getElementById("taskInput").value;

if(task==""){
alert("Please enter a task");
return;
}

let li=document.createElement("li");

li.innerHTML=task+" <button onclick='this.parentElement.remove()'>Remove</button>";

document.getElementById("taskList").appendChild(li);

document.getElementById("taskInput").value="";

}

// Contact Form
document.getElementById("contactForm").addEventListener("submit",function(event){

event.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name==""||email==""||message==""){
alert("Please fill all fields");
return;
}

if(!email.includes("@")){
alert("Enter valid email");
return;
}

alert("Form Submitted Successfully!");

this.reset();

});