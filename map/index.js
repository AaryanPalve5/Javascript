/***
 * .map() = accepts a callback and applies that function to each 
 *          element of an array and then returns a new array
 * 
 */

const numbers=[1,2,3,4,5]

const squares = numbers.map(square)

function square(element){
    return Math.pow(element,2)
}

console.log(numbers)
console.log(squares)

console.log()

console.log( )

const dates = [ "2024-1-10","2000-5-10","2021-1-19"]

const formattedDates=dates.map(formatDates)

console.log(dates)
console.log(formattedDates)
function formatDates(element){
    const parts=element.split("-");
    return `${parts[1]}/ ${parts[2]}/${parts[0]}`;
}