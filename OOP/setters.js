/***
 * getter=special method that makes a property readable
 * 
 * setters=speial method that makes property writeable
 * 
 * validate and modify  a value when reading/writing a property
 * 
 */


class Rectangle{

    constructor(width,height,name){
        this.height=height;
        this.width=width;
        this.name=name;

    }

    set width(newWidth){
        if(newWidth>0){
            this._widht=newWidth;
        }
        else{
            console.error("Must be a positive number")
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;
        }
        else{
            console.error("Must be a positive number")
        }
    }

    get width (){
        return this._widht
    }
    get height (){
        return this._height    }

    set name(newName){
        if(typeof newName === "string" && newName.length > 0){
            this._name = newName; 
        }
    }
    get name (){
        return this._name
    }
}

const rectangle=new Rectangle(10,"bro",00)  // yes

rectangle.height=-9;
console.log(rectangle.width);
console.log(rectangle.height);
rectangle.height=91;
console.log(rectangle.width);
console.log(rectangle.height);  


console.log(rectangle.name);
rectangle.name="ABCD"
console.log(rectangle.name);
console.log(rectangle.width);
console.log(rectangle.height);  


