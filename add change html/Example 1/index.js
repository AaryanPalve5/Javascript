/// eg1 

// STEP 1 CREATE THE ELEMENT


const newH1=document.createElement("h1");


// STEP 2 ADD ATTRIBUTES/PROPERTIES

newH1.textContent="I like JS";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign= "center";

//STEP 3 APPEND ELEMENT TO DOM

//document.body.prepend(newH1)

document.getElementById("box1").prepend(newH1)


document.getElementById("box1").prepend(newH1)

document.body.insertBefore(newH1,box3)

//REMOVE


document.body.removeChild(newH1)



box4.innerHTML = "<h1 style='color:tomato;text-align:center;'>I like JS</h1>";