// 'use strict';


// const player0EL = document.querySelector('.player--0');
// const player1EL = document.querySelector('.player--1');
// //Selecting elements
// const score0El = document.querySelector('#score--0');
// //now whioe using element by id we dont need to use the # 
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');


// const diceEL= document.querySelector('.dice');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEL.classList.add('hidden')

// const scores = [0,0];
// let currentScore = 0;
// let activePlayer = 0;

// //reacting to the roll button
// btnRoll.addEventListener('click', function(){
//     //1.Generating a random dice roll
//     const dice = Math.trunc(Math.random()*6) + 1;


//     //2. then we display the dice
// diceEL.classList.remove('hidden');
// diceEL.src = `dice-${dice}.png`;

//     //3.Check for rolled 1: if true, switch to next player
// if(dice !== 1){
// //Add dice to the current score
//  currentScore += dice;
// document.getElementById
// (`current--${activePlayer}`
// ).textContent = currentScore;
// }else{

//     //switch to the next player
// activePlayer = activePlayer === 0 ? 1 : 0;
// currentScore = 0;
// activePlayer = activePlayer === 0 ? 1 : 0;
// player0EL.classList.toggle('player--active');
// player1EL.classList.toggle('player--active');
// }
// })
// btnHold.addEventListener('click', function(){
//     //1.Add current score tyo active players scpore 
// scores[activePlayer] += 
//     //2. check if players scroe is >= 100
//     //Finish the game 

// })


// btnNew.addEventListener('click', function(){

// });


// function callAge(birthYear){
//     const age = 2037 - birthYear;

// function printAge(){
//     const output = `You are ${age}, born in ${birthYear}`
//     console.log(output);
// }

// if(birthYear >= 1981 && birthYear <= 1996){
//     const str = `Oh,and you're a millenial, ${firstName}`;
//     console.log(str);
// }

//     return age;
// }
// const firstName = 'Jones';
// calcAge(1991);

// //variable environment:
//  function addDwel(a,b){
//     return a + b;
//  }

//  const addExpr = function(a,b){
//     return a + b;
//  }
 
//  var addArrow =  (a,b) => a + b;



//  console.log(this);
//  const calAge = function(birthYear){
//     console.log(2037-birthYear);
//     console.log(this);
//  }



// var firstName = 'Matilda';
// const jonas = {
//     firstName:'Jonas',
//     year: 1991,
//     calAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     },
//      
//      const isMelle = function() {
// console.log(self);
// console.log(self.year >= 1981 && self.year <= 1996);
//      }; isMelle();
//     greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet(); 

//arguments keyword

// const addExpr = function(a, b){
//     console.log(arguments);
//     return a + b;
// };

// addExpr(2,5)

//primitives

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me ={
    name: 'Jonas',
    age: 30,
    
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me',me);


let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName,oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage ', jessica);
console.log('After Marriage', marriedJessica);


const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice','Bob'],
};
//Object Assign 
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before Marriage ', jessica2);
console.log('After Marriage', jessicaCopy);