/***A closure is a function that retains access to its outer scope 
 * (the scope in which it was created) even after the outer function
 *  has finished executing. This means the inner function can access 
 * and manipulate variables defined in the outer function. */

function outer(){
    let message="Hello";//pvt
    function inner(){
        console.log(message);
    }

    inner();
}
outer();
console.log();
function createCounter(){
    let count = 0 ;//pvt
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    
    function getCount(){
        return count;
    }

    return {increment,getCount};



}

const counter=createCounter();

console.log(`The current count is ${counter.getCount()}`)
counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`)

/***
counter =100;  // TypeError: Assignment to constant variable.
console.log(counter)

 */
console.log();


function createGame(){
let score = 0 ;

function increaseScore(points){
    score += points;
    console.log(`+${points} pts`);
}
function decreaseScore(points){
    score -= points;
    console.log(`-${points} pts`);
}
function getScore(){
    return score;
}

return {increaseScore,decreaseScore,getScore}
}

const game= createGame();

game.increaseScore(15)
game.decreaseScore(5)
game.increaseScore(100)
game.decreaseScore(5)

console.log(game.getScore() );