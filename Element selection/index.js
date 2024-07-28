/**
 * element selectors
 * 
 * Element selectors are tools and methods used in web development
 *  to target and manipulate specific HTML elements on a web page.
 *  They are commonly used in CSS and JavaScript to style elements, 
 *  add event listeners, or modify content.
 * 
 * 
        // Selecting elements using different selectors
        document.getElementById();
        document.getElementsByTagName();
        document.getElementsByClassName();
        document.querySelector();
        document.querySelectorAll();
 */
// Selecting elements using different selectors

// 1. Get element by ID
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";

// 2. Get elements by tag name
const paragraphs = document.getElementsByTagName("p");
for (let paragraph of paragraphs) {
    paragraph.style.color = "cyan";
}

// 3. Get elements by class name
const fruits = document.getElementsByClassName("fruit");
for (let fruit of fruits) {
    fruit.style.fontWeight = "bold";
}

// 4. Query selector (select first matching element)
const firstParagraph = document.querySelector("p");
firstParagraph.style.border = "2px solid red";

// 5. Query selector all (select all matching elements)
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach(p => p.style.fontStyle = "italic");

// 6. Selecting the first child of a parent element
const firstListItem = document.querySelector("ul li:first-child");
firstListItem.style.color = "cyan";

// 7. Selecting the last child of a parent element
const lastListItem = document.querySelector("ul li:last-child");
lastListItem.style.color = "red";

// 8. Selecting the nth child of a parent element
const secondListItem = document.querySelector("ul li:nth-child(2)");
secondListItem.style.color = "green";

// Adding event listeners
document.getElementById('changeTextBtn').addEventListener('click', function() {
    myHeading.textContent = 'Text has been changed!';
});

document.getElementById('highlightBtn').addEventListener('click', function() {
    for (let fruit of fruits) {
        fruit.classList.toggle('highlight');
    }
});



const trial = document.querySelector(".fruits")
trial.style.fontWeight= "bold" ;
trial.style.fontFamily="Verdana";

const trial2=document.querySelectorAll(".fruit");
trial2[2].style.backgroundColor="cyan"

const trial3=document.querySelectorAll("li");
trial3[2].style.backgroundColor="green"