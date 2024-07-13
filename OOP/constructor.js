/**
 *   
 * constructor= special method for defining the properties
 *              and methods of objects
 * 
 * */

function Car(make,model,year,color){
    this.make= make,
    this.model=model
    this.year=year
    this.color=color
    this.drive =function() { console.log(`You drive ${this.model}`)}
}

const car1 = new Car("Ford","Mustang",2019,"teal")

console.log("Car 1:")
console.log("       "+car1.make)
console.log("       "+car1.model)
console.log("       "+car1.year)
console.log("       "+car1.color)
car1.drive()

const car2 = new Car("Maruti Suzuki","Alto",2000,"white")

console.log("Car 2:")
console.log("       "+car2.make)
console.log("       "+car2.model)
console.log("       "+car2.year)
console.log("       "+car2.color)
car2.drive()