'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
//now whioe using element by id we dont need to use the # 
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


const diceEL= document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden')

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

//reacting to the roll button
btnRoll.addEventListener('click', function(){
    //1.Generating a random dice roll
    const dice = Math.trunc(Math.random()*6) + 1;


    //2. then we display the dice
diceEL.classList.remove('hidden');
diceEL.src = `dice-${dice}.png`;

    //3.Check for rolled 1: if true, switch to next player
if(dice !== 1){
//Add dice to the current score
 currentScore += dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
 current0El.textContent = currentScore;
}else{

    //switch to the next player
activePlayer = activePlayer === 0 ? 1 : 0;
currentScore = 0;

}
})


