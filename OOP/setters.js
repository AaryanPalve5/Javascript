class Rectangle{

    constructor(width,height){
        this.height=height;
        this.width=width;

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
}

const rectangle=new Rectangle(10,"bro")

rectangle.height=-9;
console.log(rectangle.width);
console.log(rectangle.height);
rectangle.height=9;
console.log(rectangle.width);
console.log(rectangle.height);