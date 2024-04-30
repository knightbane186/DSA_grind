'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
//now whioe using element by id we dont need to use the # 
const score1El = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


const diceEL= document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden')

//reacting to the roll button
btnRoll.addEventListener('click', function(){
    //1.Generating a random dice roll

    //2. then we diplay the dice

    //3.Check for rolled 1: if true, switch to next player

})


