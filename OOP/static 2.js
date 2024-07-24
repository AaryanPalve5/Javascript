/**
 * static= keyword that defines properties or methods that belong
 *         to a class itself rather than the objects created from 
 *         the class(class owns anything static,not the objects)
 *  
 * * 
 * */

class User{

    static userCount =0;

    constructor(username){
        this.username= username;
        User.userCount++;

    }
    static getUserCount(){

        console.log(`There are ${User.userCount} users online`)
    }
     sayHello(){
        console.log(`Hello ,my username is ${this.username}`)

    }
}

const user1 = new User("Java Script");
const user2 = new User("Python");
const user3 = new User("C++");

console.log(user1.username);
console.log(User.userCount);
user1.sayHello();


console.log(user2.username);
console.log(User.userCount);
user2.sayHello();


console.log(user3.username);
console.log(User.userCount);
user3.sayHello();

User.getUserCount();