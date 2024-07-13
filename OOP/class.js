/**
 *   
 * Class=(ES6 feature ) provides a more structure and cleaner way to work
 *        with objects compared to traditional constructor function 
 *        
 *       ex.static keyword ,encapsulation,inheritance
 * 
 * */


class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    displayProduct(){
        console.log(`Product   : ${this.name}`);
        console.log(`Price     : $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price+(this.price * salesTax)
    }
}


const product1= new Product("Laptop",6000)
console.log(`Product 1`)
product1.displayProduct()
const salesTax1 =product1.calculateTotal(0.20)
console.log(`Sales Tax :${salesTax1}`)

const product2= new Product("Charger",60)
console.log(`Product 2`)
product2.displayProduct()
const salesTax2 =product2.calculateTotal(0.33)
console.log(`Sales Tax :${salesTax2}`)

const product3= new Product("Earphones",6)
console.log(`Product 3`)
product3.displayProduct()

const salesTax3 =product3.calculateTotal(0.11)
console.log(`Sales Tax :${salesTax3}`)