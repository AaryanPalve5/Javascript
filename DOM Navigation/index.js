/***
 * DOM Navigation 
 * 
 * The process of navigating throught the structure
 * of an HTML document using JS
 * 
 */

//.firstElementChild
//.lastElementChild
//.nextElementChild
//.previousElementChild
//.parentElement
//.children
//

//-------- .firstElementChild----------

/*
const element = document.getElementById("vegetables");

const firstChild= element.firstElementChild;
firstChild.style.backgroundColor="lightblue"
*/
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    if (firstChild) {  // Check if the first child exists
        firstChild.style.backgroundColor = "gray";
        firstChild.style.fontFamily = "Times New Roman";
        firstChild.style.fontWeight ="bold";
        firstChild.style.fontStyle ="italics";
    }
});


//-------- .lastElementChild----------

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    if (lastChild) {  // Check if the first child exists
        lastChild.style.backgroundColor = "lightblue";
        lastChild.style.fontFamily = "Times New Roman";
        lastChild.style.fontStyle ="italic";
    }
});



//-------- .nexttElementChild----------

 
const appleElement = document.querySelector("#fruits li");
    const nextSibling = appleElement.nextElementSibling;
    if (nextSibling) {  // Check if the next sibling exists
        nextSibling.style.backgroundColor = "yellow";
        nextSibling.style.fontFamily = "Times New Roman";
        nextSibling.style.fontStyle = "italic";  // Corrected spelling
    }
