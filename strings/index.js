console.log("######### SWITCH  CASE ######### ")

let day =3;
switch(day){
    case 1:
        console.log("Monday ");
        break;

    case 2:
        console.log("Tuesday ");
        break;

    default:
        console.log(`Invalid`)
    

}
console.log("######### STRING METHODS   ######### ")


let userName= "       JAVASCRIPT    ";
console.log(userName);
console.log(userName.trim());
console.log(userName.charAt(0));
console.log(userName.length);
console.log(userName.indexOf("A"));
console.log(userName.lastIndexOf("A"));
console.log(userName.toLowerCase());
console.log(userName.repeat(3));

console.log(userName.startsWith(`J`));
console.log(userName.startsWith(`  `));

console.log(userName.endsWith(`J`));
console.log(userName.endsWith(`  `));


console.log(userName.includes(`J`));
console.log(userName.includes(`zzzzz`));



console.log(userName.replaceAll(" ",""));
console.log(userName.replaceAll("A","@"));

console.log(userName.padStart(50,"#"))

console.log(userName.padEnd(50,"#"))


console.log("######### STRING SLICING  ######### ")


const fullName = "Java Script";

let firstName = fullName.slice(0,4);
let lastName = fullName.slice(5,11);
console.log(firstName);
console.log(lastName);

let firstChar=fullName.slice(0,1);
let lastChar=fullName.slice(-1);

console.log(firstChar);
console.log(lastChar);

//the abv methods are not dynamic 

let fName= fullName.slice(0, fullName.indexOf(" "))
console.log(fName)
let lName= fullName.slice(fullName.indexOf(" ")+1 )
console.log(lName)

const email= `user@jx.com`;
let uname=email.slice(0,email.indexOf("@"))
let lname=email.slice(email.indexOf("@")+1)
console.log(uname);
console.log(lname);