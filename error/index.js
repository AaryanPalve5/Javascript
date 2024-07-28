
try{
    const divident = Number(window.prompt("Enter a dividend:"));
    
    const divisor  = Number(window.prompt("Enter a divisor:"));
    if( divisor == 0 ){
        throw new Error("You cant divide by 0");
    }
    if( isNaN(divident) || isNaN(divisor)  ){

        throw new Error("Values must be numbers");
    }
    const result=divident/divisor;
    
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("The ehT")