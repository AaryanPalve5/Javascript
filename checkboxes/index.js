const myCheckBox=document.getElementById("myCheckBox");
const task2btn =document.getElementById("task2btn");
const task3btn=document.getElementById("task3btn");
const task4btn=document.getElementById("task4btn");

const mySubmit=document.getElementById("mySubmit");

const subResult=document.getElementById("subResult");
const task2result=document.getElementById("task2result");


mySubmit.onclick=function(){

    if(myCheckBox.checked){
        subResult.textContent="Task1 done";
    }
    else {
        subResult.textContent="Task1  not done";

    }


    if(task2btn.checked){
        task2result.textContent="Young";
    }
    else if(task3btn.checked){
        task2result.textContent="Just of age";
    }
    else if(task4btn.checked){
        task2result.textContent="Old enough";
    }
    else {
        task2result.textContent="Select one";
    }

}
