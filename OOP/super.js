/***
 * super = keyword is used in classes to call the constructor or access the properties
 *         and methods of a parents (superclass)
 *          
 *          this  = this object
 *          super = this parent
 * 
 */

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }

}

class Rabbit extends Animal{
    constructor(name,age,runspeed){  
        super(name,age);
     //   this.name=name;
    //    this.age=age;
        this.runspeed=runspeed;
        
    }
    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runspeed)
    }
    
}
class Fish extends Animal{
    constructor(name,age,swimspeed){   
        super(name,age);
 //       this.name=name;
   //     this.age=age;
        this.swimspeed=swimspeed;
        
    }
    swim(){
        console.log(`This ${this.name} can swim`)
    }
    
    
}
class Hawk extends Animal{
    constructor(name,age,flyingspeed){
        super(name,age);
        this.flyingspeed=flyingspeed;
        
    }
    fly(){
        console.log(`This ${this.name} can fly`)
        
    }
    
    
}

const rabbit= new Rabbit("rabbit",1,25);
const fish= new Fish("fish",1,25);
const hawk= new Hawk("hawk",1,25);


/**
ReferenceError: Must call super constructor in derived class
                before accessing 'this' or returning from derived constructor

*/

console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runspeed)

rabbit.run();