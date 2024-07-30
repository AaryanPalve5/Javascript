/** JSON
 * 
 * JS Object Notation data-interchange format
 * 
 * used for exchanging data between a server and web application
 * 
 * JSON files {key:value} or [value1,value2,value3]
 * 
 * JSON.stringify()= convert a JS object to JSON string
 * 
 * JSON.parse() = converts a JSON string to JS object
 * 
 */


const names=["JS","CPP"]

const jsonString = JSON.stringify(names)

console.log(names)
console.log(jsonString)


const person={
    "name" :"Ninja",
    "age":1,
    "isAlive":true,
    "hobbies":["code","trek","eat"]
}


const jsonString2 = JSON.stringify(person)
console.log(person)
console.log(jsonString2)

const parsedData = JSON.parse(jsonString2);
console.log(parsedData)