//callback= a function that is passed as an argument to another function
/*

hello(leave);
function hello(callback){
    console.log("Hello!");
    callback();
}



function goodbye(){
    console.log("GoodBye!");
}

function leave(){
    console.log("Leave!");
}
goodbye()
*/

// Sum
// Example with Sum and Callbacks

// Calling sum with different callbacks
sum(displayConsole, 4, 5); // Displays result in console
sum(displayPage, 10, 20); // Displays result on a web page

// sum function definition
function sum(callback, x, y) {
    let result = x + y;
    callback(result); // Execute the callback function with the result
}

// Callback function to display result in console
function displayConsole(result) {
    console.log("Result (Console):", result);
}

// Callback function to display result on a webpage
function displayPage(result) {
    document.getElementById("myH1").textContent = "Result (Page): " + result;
}
