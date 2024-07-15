/**
 * static= keyword that defines properties or methods that belong
 *         to a class itself rather than the objects created from 
 *         the class(class owns anything static,not the objects)
 *  
 * * 
 * */

class MathUtil{
    static PI=3.14159

    static getDiameter(radius){
        return radius*2;
    }
    static getCircumference(radius){
        return radius*2*this.PI;
    }
    static getArea(radius){
        return radius*radius*this.PI;
    }
}
console.log(MathUtil.PI)

console.log()
const r = 10;
d=MathUtil.getDiameter(r)
console.log(`Radius : ${r}`)
console.log(`Diameter :${d}`)
console.log(`Circumference :${MathUtil.getCircumference(r)}`)
