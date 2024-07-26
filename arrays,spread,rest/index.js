//ARRAYS

let fruits=["apple","orange","banana"];

console.log(fruits)

console.log(fruits[0])

console.log(fruits[-1])


console.log(fruits)

fruits[0]="lemon"

console.log(fruits)

fruits.push("coconut")

console.log(fruits)

fruits.pop()

console.log(fruits)

fruits.unshift("Strawberry")

console.log(fruits)

fruits.shift()

console.log(fruits)

fruits.shift()

console.log(fruits)

console.log(fruits.length)

console.log(fruits.indexOf("banana"))
fruits.push("kiwi")
fruits.push("pear")
fruits.push("mango")
console.log(fruits)

for(let i = 0;i<fruits.length ; i++){
    console.log(fruits[i])
} 
console.log("")
for( let fruit of fruits){
    console.log(fruit);
}

fruits.sort()
console.log(fruits)
fruits.sort().reverse()
console.log(fruits)

////SPREAD OPERATOR

console.log()

let numbers =[1,2,3,4,5]

let max0= Math.max(numbers)
let max1= Math.max(...numbers)
let min1=Math.min(...numbers)
console.log(max0)
console.log(max1)
console.log(min1)

let result=0;
result=Number(result)
function sum(...numbers)
{
    let result=0;
    for( let number of numbers){
        result+= Number(number);
    }
    return result;
}
total=sum(...numbers)
console.log(total)
let username="Java Script"
let letters=[...username]
console.log(username)
console.log(...letters)  

let letters2=[...username].join("-")


console.log(...letters2)


let newfruits=[...fruits]
let veggies=["carrots","potato","brinjal","onion"]
console.log(veggies)
console.log(newfruits)

let foods =[...fruits,...veggies,"milk"]

console.log(foods)


////REST parameters
/** 
 * rest = array into seperate
 * 
 * spread= expand
 */

console.log()
function openfridge(...foods3){
    console.log(foods3)
   // console.log(...foods3)
}

function getFood(...foods3){
    return foods3
}
const food1="pizza"
const food2="soda"
const food3="cake"
const food4="french fries"
const food5="burger"

openfridge(food1,food2,food3,food4,food5) 
let foods4=getFood(food3,food4,food5,food1,food2)
console.log()
console.log(foods4)

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName= combineStrings("Mr","Java","Script")

console.log(fullName)


/////////////SORTING////////////

let fruits2 = ["apple","kiwi","grapes"]

console.log(fruits2)
fruits2.sort();
console.log(fruits2)


let nums1 = [5,3,7,1,10,2,90]

nums1.sort();

console.log(nums1)

//op=1, 10,  2, 3, 5,  7, 90

nums1.sort((a,b) => a-b )
console.log(nums1)

nums1.sort((a,b) => b-a )
console.log(nums1)



const fruits3 = [   {name:"apple",color:"red",calories:195},
                    {name:"banana",color:"yellow",calories:95},//idk man 
                    {name:"orange",color:"orange",calories:105}];// --""--

                    
                    
fruits3.sort((a,b) => a.calories  - b.calories)
console.log(fruits3)

fruits3.sort((a,b) => b.calories  - a.calories)
console.log(fruits3)

fruits3.sort((a,b) => a.name.localeCompare(b.name))
console.log(fruits3)

fruits3.sort((a,b) => b.name.localeCompare(a.name))
console.log(fruits3)