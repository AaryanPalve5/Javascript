/**
 * Arrow function=a concise way to write function expressions good for simple
 *                  functions that you use only once (parameters) => some code
 *
 */
const hello =() => console.log(`Hello`);

hello()

const numbers=[1,2,3,4,5,6];

console.log(numbers)

const squares= numbers.map((element) => Math.pow(element,2));

console.log(squares)

const cubes= numbers.map((element) => Math.pow(element,3));

console.log(cubes)

const evenNums=numbers.filter((element)=>element%2 ===0);

console.log(evenNums)

const oddNums=numbers.filter((element)=>element%2 !==0);

console.log(oddNums)


const total=numbers.reduce((accumulator,element)=>accumulator+element);

console.log(total)