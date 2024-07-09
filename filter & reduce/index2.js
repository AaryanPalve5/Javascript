/**
 * .filter() = create a new array by filtering out old elements
 *  
 */
 

const ages=[19,18,11,20,17,17]
console.log(ages)

function isAdult(element){
    return element >=18
}

const adults=ages.filter(isAdult)
console.log(adults)

function isChild(element){
    return element <18
}

const children=ages.filter(isChild)
console.log(children)


const words=["apple","banana","coconut","dragonfruit","kiwi","orange","pear"]
console.log(words)

function getShortWords(element){
    return element.length <= 6;
}

const shortWords= words.filter(getShortWords)
console.log(shortWords)