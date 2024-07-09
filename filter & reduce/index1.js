/**
 * .filter() = create a new array by filtering out old elements
 *  
 */

let numbers=[0,1,2,3,4,5,6,7,8,9,10];
console.log(numbers)

function isEven(element){
    return element%2 === 0;
}

const evenNums= numbers.filter(isEven)
console.log(evenNums)

function isOdd(element){
    return element%2 != 0;
}

const OddNums= numbers.filter(isOdd)
console.log(OddNums)