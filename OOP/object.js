/**
 * object = A collection of related properties and/or methods
 *          
 *          Can represent real world objects(people,products,places)
 * 
 *          object={ key : value ,
 *                     function() }
 * */
console.log("Object 1")


const language1 = {
    firstName: "Java ",
    lastName: "Script",
    age:27,   // LEGIT 
    isUsed:true,
    sayHello: function(){console.log("HTML CSS done?")},
    random1: ()=>console.log("Implementing basic features"),
}

console.log(language1.firstName)

console.log(language1.lastName)

console.log(language1.age)

console.log(language1.isUsed)

language1.sayHello()
language1.random1()


console.log("Object 2")

const language2 = {
    firstName: "C ",
    lastName: "++",
    age:45,   // LEGIT 
    isUsed:true,

}

console.log(language2.firstName)

console.log(language2.lastName)

console.log(language2.age)

console.log(language2.isUsed)