//shuffle

const cards = ['A',2,3,4,5,6,7,8,10,'J','K','Q']
console.log(cards)

shuffle(cards)
console.log(cards)

function shuffle(array ){
    for(let i= array.length - 1; i>0;i--){
        const random=Math.floor(Math.random()*(i+1));
        [array[i],array[random]]=[array[random],array[i ]]
    }
}
