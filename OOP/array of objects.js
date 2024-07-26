/***
 *  an array of objects can be created to store multiple objects,
 *  each containing key-value pairs
 * /
 * 
 * */

const fruits = [{name:"apple",color:"red",calories:95},
                {name:"banana",color:"yellow",calories:95},//idk man 
                {name:"orange",color:"orange",calories:105}];// --""--


                
console.log(fruits[0].name)

fruits.push({name:"grapes",color:"green",calories:65})
fruits.forEach(fruit => console.log(fruit.calories))

console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.forEach(fruit => console.log(fruit))

fruits.splice(1)
console.log(fruits)

console.log()

fruits.push({name:"kiwi",color:"blue",calories:165})
//
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max );

console.log(maxFruit); 