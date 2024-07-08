//callback= a function that is passed as an argument to another function


hello(leave);
function hello(callback){
    console.log("Hello!");
    callback();
}



function goodbye(){
    console.log("GoodBye!");
}

function leave(){
    console.log("Leave!");
}