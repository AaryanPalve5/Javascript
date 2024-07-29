// eventListener = Listen for specific events to create interactive web pages

// events: click, mouseover, mouseout
// .addEventListener(click, changeColor)

const myBox = document.getElementById("myBox");


const myButton=document.getElementById("myButton")

// myBox.addEventListener(event, callback);

function changeColor(event) {
        myBox.style.backgroundColor = "tomato";
        myBox.textContent ="It has been touched "
}

myButton.addEventListener("click", changeColor);


myButton.addEventListener("mouseover",()=>{
    myBox.style.backgroundColor = "yellow";
        myBox.textContent ="Beware "

})

myButton.addEventListener("mouseout",()=>{
        myBox.style.backgroundColor = "blue";
        myBox.textContent ="Click here "


})
