let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("BINGO"), 3000);
    console.log("Started")
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared")
}
