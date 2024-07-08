//console.log(`Hello`)
//console.log(`I am A$P`)

//window.alert("BEWARE")

//first javacript tut suckazzzzzzzzzzzz

//document.getElementById("myH1").textContent="Hello";

//document.getElementById("myP").textContent="I am A$P";
// 
// let r;
// let pi=3.14;
// let circumference;
// r=window.prompt(`Enter radius`);
// circumference=pi*r*2;
// console.log(`Circumference:${circumference}`);
// alert(`Circumference:${circumference}`);

const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const inccreasebtn = document.getElementById("increasebtn");
const countLabel = document.getElementById("countlabel");
let count=0;

inccreasebtn.onclick=function(){
    count++;
    myh1.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    myh1.textContent=count;
}

resetbtn.onclick=function(){
    count=0;
    myh1.textContent=count;
}