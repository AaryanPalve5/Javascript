/**
 * forEach() = method used to iterater over the elements\
 *              of an array and apply a  specified f(x) 
 *              callback to each element
 * 
 *              array.forEach(callback)
 * 
 *  element,index,array are provided
 */


let numbers=[1,2,3,4,5]

console.log(numbers)

console.log(`All values are doubles via forEach function`);

numbers.forEach(double)
numbers.forEach(display)

function display(element){
    console.log(element);
}


function double(element,index,array){
    array[index]=element*2;
}
console.log(`All values are squared via forEach function`);


numbers.forEach(sqr)
numbers.forEach(display)

function sqr(element,index,array){
    array[index]=Math.pow(element,2)
}

console.log(`Operations on Strings and Arrays`)
let fruits=["apple","banana","coconut","dragonfruit"];

function upperCase(element,index,array){
    array[index]=element.toUpperCase();
}
console.log(`To UpperCase`)

fruits.forEach(upperCase)
fruits.forEach(display)

console.log(`To LowerCase`)

function lowerCase(element,index,array){
    array[index]=element.toLowerCase();
}

fruits.forEach(lowerCase)
fruits.forEach(display)
console.log(`To CapitalCase`)

function capitalCase(element,index,array){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}

fruits.forEach(capitalCase)
fruits.forEach(display)