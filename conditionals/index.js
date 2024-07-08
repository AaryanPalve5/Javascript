///
/*let age=25;

if(age>=18){
    console.log("Old enough");
}
else{
    console.log("Get lost");
}


let isStudent = true;

if(isStudent) {
    console.log("Student");
    if(age>=18){
        console.log("Old enough");
    }

}

else {
    
    console.log("Not Student");

}
///
*/
const mytext= document.getElementById("mytext");
const mySubmit=document.getElementById("mySubmit");
const resultELement=document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){

    age=mytext.value;
    age=Number(age);
 
    if(age>18) {

        resultELement.textContent=`OLD`;
    }

    else if( age < 0){
        resultELement.textContent=`Not born yet`;

    }

    else if( age<18){
        
        resultELement.textContent=`Young `;

    }

    else{
        
        resultELement.textContent=`18`;

    }

}