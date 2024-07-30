/**
 * NodeList = Static collection of HTML elements by (id, class, elements)
 *            Can be created by using querySelectorAll()
 * 
 *            Similar to array, but no(map, filter, reduce)
 * 
 *            NodeList won't update to automatically reflect changes
 */

// Get a fresh NodeList of all buttons
let buttons = document.querySelectorAll(".myButton");

// Add HTML/CSS: Change button styles and text content
/*
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += " *\\* ";
})
*/

// Add click event listeners to buttons: Change color to red on click
/*
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "red";
    });
})
*/

// Reapply event listeners to the updated NodeList
buttons.forEach(button => {
    button.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "red";
    });
    button.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "cyan";
    });
    button.addEventListener("click", (event) => {
        event.target.remove();
        // Get a fresh NodeList after removal
        buttons = document.querySelectorAll(".myButton");
        console.log(buttons);
    });
});

// Create and add a new button to the DOM
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList.add("myButton"); // Use classList.add instead of assignment
document.body.appendChild(newButton);

// Reapply event listeners to the updated NodeList after adding the new button
buttons = document.querySelectorAll(".myButton");
buttons.forEach(button => {
    button.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "red";
    });
    button.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "cyan";
    });
    button.addEventListener("click", (event) => {
        event.target.remove();
        // Get a fresh NodeList after removal
        buttons = document.querySelectorAll(".myButton");
        console.log(buttons);
    });
});
