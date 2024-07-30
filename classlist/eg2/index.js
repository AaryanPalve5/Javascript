let buttons = document.querySelectorAll(".myButton")


buttons.forEach(button =>{
    button.classList.add("enabled")
})
buttons.forEach(button =>{
    button.addEventListener("mouseover",event =>{
        event.target.classList.toggle("hover");
    })
})
buttons.forEach(button =>{
    button.addEventListener("mouseout",event =>{
        event.target.classList.toggle("hover");
    })
})


buttons.forEach(button => {
    button.addEventListener("click",event=>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "*|*"
        }
        else{
        event.target.classList.replace("enabled","disabled")
        }
    })
})