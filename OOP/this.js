/**
 *  this =reference to the object where THIS is used
 * 
 *        (this object depends on the immediate context)
 * 
 *        person.name=this.name
 * 
 * */

console.log(this)
const person1={

    name:"Java Script ",
    age:"27",
    sayHello:function(){console.log(`I am ${this.name}`)}

}
 

const person2={

    name:"C++",
    age:"45",
    sayHello:function(){console.log(`I am ${this.name}`)}

}

person1.sayHello()
person2.sayHello()

// console.log(this)