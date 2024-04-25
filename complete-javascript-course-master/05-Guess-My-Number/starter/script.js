'use strict';


// document.querySelector('.message').textContent;

// document.querySelector('.message').textContent = '🦁Correct Number!';

// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value = 23);

//game logic

const secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = secretNumber ;


document.querySelector('.check').addEventListener('click', function(){

    //almost always the input we get from the web is in string so to convert it using Numbers. 
    const guess = Number(document.querySelector('.guess').value);
if (!guess){
    document.querySelector('.message').textContent = 'No Number';
}else if(guess === secretNumber){
    document.querySelector('.message').textContent = 'Correct Number💫';
}else if(guess > secretNumber){
    document.querySelector('.message').textContent = 'Too high!';
}else if(guess < secretNumber){
    document.querySelector('.message').textContent = 'Too low!';
}

});