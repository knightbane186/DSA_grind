'use strict';


// document.querySelector('.message').textContent;

// document.querySelector('.message').textContent = '🦁Correct Number!';

// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value = 23);

//game logic

const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;

document.querySelector('.number').textContent = secretNumber ;


document.querySelector('.check').addEventListener('click', function(){

    //almost always the input we get from the web is in string so to convert it using Numbers. 
    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
if (!guess){
    document.querySelector('.message').textContent = 'No Number';
}else if(guess === secretNumber){
    document.querySelector('.message').textContent = 'Correct Number💫';
//turining the page green:

document.querySelector('body').style.backgroundColor = '#60b347';

document.querySelector('.number').style.width = '30rem';

    //when player wins
}else if(guess > secretNumber){
    if(score > 1) {
        document.querySelector('.message').textContent = 'Too high!';
        score--;
        document.querySelector('.score').textContent = score;
        //when player too high
    }else{
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
    }
    //when player is too low
}else if(guess < secretNumber){
    if(score > 1) {
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
    }
}
});

else if(guess > secretNumber){
    if(score > 1) {
        document.querySelector('.message').textContent = 'Too high!';
        score--;
        document.querySelector('.score').textContent = score;
        //when player too high
    }else{
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
    }
    //when player is too low
}else if(guess < secretNumber){
    if(score > 1) {
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
    }
}
});


}else if(guess < secretNumber){
    if(score > 1) {
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
    }
}
});