/***
 *  inhertiance=allows a new class to inherit properties and methods
 *              from an existing class( resuability++)
 * 
 *              parent->child
 * 
 *   */

class Animal{
    alive = true;

    eat(){
        console.log(`This  ${this.name} is feasting`)
    }

    sleep(){
    console.log(`This  ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
     name="rabit";
     run(){
        console.log(`This  ${this.name} is running.`)
     }
}
class Fish extends Animal{
     name="fish";
     swim(){
        console.log(`This  ${this.name} is swimming.`)
     }
}

class Hawk extends Animal{
     name="hawk";
}

const rabbit = new Rabbit();

console.log(rabbit.alive)
rabbit.run()

rabbit.alive= false;

console.log(rabbit.alive)

const fish = new Fish();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();
// fish.run();