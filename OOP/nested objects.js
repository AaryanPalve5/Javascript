/**Nested objects in JavaScript are objects that
 *  contain other objects as properties.  */

const person = {
    name:"John",
    age: 30,
    address:{
        street:"123 Main Street ",
        city:"New York",
    },
    hobbies: ["reading", "traveling", "sports"]
}

console.log(person.name)
console.log(person.age)
console.log(person.address.street)
console.log(person.address.city)
console.log(person.hobbies)

for( const property in person.address){
    console.log(person.address[property])
}