/**
 * classList= Element property in JS used to interact with an element's
 *            list of classes(CSS classes)
 * 
 *            Allows you to make reusable classes for many elements
 *            across your webpages
 * 
 * add()
 * remove()
 * toggle(Remove if present,add if not)
 * replace(oldClass,newClass)
 * contains()
 */

const myButton = document.getElementById("myButton");
const myH1 =document.getElementById("myH1");

myButton.classList.add("enabled"); 
myH1.classList.add("enabled"); 

myButton.classList.remove("enabled"); 
myButton.classList.add("myButton"); 



myButton.addEventListener("mouseover",event => {
    event.target.classList.toggle("hover"); 


})
myButton.addEventListener("mouseout",event => {
    event.target.classList.toggle("hover"); 


})


myButton.classList.add("enabled");




myButton.addEventListener("click",event => {

    if(event.target.classList.contains("disabled")){
            event.target.textContent+= " *|*";
    }
    else{

    }
    event.target.classList.replace("enabled","disabled"); 


})

myH1.addEventListener("click",event => {

    if(event.target.classList.contains("disabled")){
            event.target.textContent+= " *|*";
    }
    else{

    }
    event.target.classList.replace("enabled","disabled"); 


})