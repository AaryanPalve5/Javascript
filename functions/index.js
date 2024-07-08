function hbd(){
    console.log("F!");
}


hbd();
hbd(); 

function num( n){
    console.log(n);
    n=Number(n);
    console.log(n*2);
    return n*3;
}

num(20);
function num1( n){ 
    n=Number(n); 
    return n*3;
}

let x=num1(20);

console.log(x)
