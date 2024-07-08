const minNum=1;

const maxNum=100;

const answer=Math.floor(Math.random()*(maxNum-minNum+1));

let attempts=0;

let guess;

let running = true;

while(running){
    guess=window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
 //   console.log(typeof guess,guess);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert(`I said Enter a number`)
    }

    else if(guess< minNum || guess>maxNum){
        window.alert(`Read the range`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low!Try again");
        }
        else if(guess> answer){
            window.alert("Too High!Try again");
        }
        else{
            window.alert(`CORRECT!It only took you ${attempts} attempts`);
            running=false;
        }
    } 
}




















