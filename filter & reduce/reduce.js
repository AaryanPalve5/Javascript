const prices=[5,30,10,25,15,20 ]


const total = prices.reduce(sum)

function sum(accumulator , element){
    return accumulator+element;
}

console.log(total)

const highest = prices.reduce(max)

function max(accumulator , element){
    return Math.max(accumulator,element);
}

console.log(highest)

const min1 = prices.reduce(min)

function min(accumulator,element){
    return Math.min(accumulator,element)
}
console.log(min1)