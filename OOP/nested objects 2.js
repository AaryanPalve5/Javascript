class Person{

    constructor(name,age,...address){
        this.name=name
        this.age=age
        this.address=new Address(...address)
    }
}

class Address{

    constructor(street,city,country){
        this.street=street
        this.city=city
        this.country=country
    }
}

const person1= new Person("JS",23,"123",
    "JX",
    "XJ")

console.log(person1.name)
console.log(person1.age)
console.log(person1.address)



console.log()


const person2= new Person("AB",23,"123",
                                   "AX",
                                   "XA")

console.log(person2.name)
console.log(person2.age)
console.log(person2.address.street)
console.log(person2.address.city)
console.log(person2.address.country)