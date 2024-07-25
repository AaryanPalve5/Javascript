/***
 * Destructuring: Extract values from arrays and objects, then assign them 
 *                to variables in a convenient way.
 * 
 *                [] = to perform array destructuring
 *                {} = to perform object destructuring
 */

// Example 1: Swap 2 variables

let a = 1;
let b = 2;

console.log(a); // Outputs: 1
console.log(b); // Outputs: 2

[a, b] = [b, a];

console.log(a); // Outputs: 2
console.log(b); // Outputs: 1
 
// Array based

const colors=["red","green","blue","green","yellow"];

console.log(colors);

[colors[0],colors[2]]=[colors[2],colors[0]]

console.log(colors)

const [firstColor,secondColor,thirdColor,...extraColors] = colors

console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)


// Object based

const person1={
    firstName:"Java",
    lastName:"Script",
    age:20, 
}
const person2={
    firstName:"Python",
    lastName:" ",
    age:20,
    
}

const {firstName,lastName,age,job="NaN"}=person1;

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(job)

function dis({firstName,lastName,age,job="NaN"}){
    console.log(firstName)
    console.log(lastName)
    console.log(age)
    console.log(job)

}

dis(person1)
dis(person2)