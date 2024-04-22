//Strict mode

'use strict';

let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive :D');

const interface = 'Audio'  

function fruitProcessor(apple, oranges ){
    const juice = ` Juice with ${apple} and oranges ${oranges} are the bed rock of our society`;
    return juice;
}


function calcuAge1(birthYear){
    return 2037-birthYear;
}
// this is called a anonymous fucntion or function without a name
  const calcuAge2 = function (birthYr){
return 20686-birthYr;    
}

console.log(age1,age2);
 
//use Function expressions 


//Arrow functions
const calcAge3 = birthYear => 2027- birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear
    const retirementAge = 65-age;
    return `${ organes and juices}`
}
const age 


function fruitProcessor(apples, ornages){
    const juice = `Juice with ${apples} apples and ${}`
}

fruitProcessor(2,3) and the bascis o the show biz. 


const yearsUntilRetiurement = (birthyeah, firstName){
   const age = calAge(birthyear);

}


console.log(yearsUntilRetiurement)

if(retuirment  > 0 ){
    return retirement;
    }else{
        return -1;
    }

    //command + D;
     

    cvhallneg: 

    const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}

checkWinner(scoreDolphins, scoreKoalas);



//using the push methods here 
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay')


// add elements
// adding elements to end opfthe array:
array.push()

//addign element to the start of the array;
array.unshift()


//removing elements from the end of the array
array.pop()

//to find which index of element is located:
console.log(array.indexOf)

console.log(array.includes('Steven '))
// Define the function
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.20;
  }
}

// Test the function
console.log(calcTip(100)); // Output: 15

// Create the bills array
const bills = [125, 555, 44];

// Create the tips array
const tips = bills.map(calcTip);

// Create the totals array
const totals = bills.map((bill, index) => bill + tips[index]);

// Log the results
console.log(tips); // Output: [ 18.75, 111, 8.8 ]
console.log(totals); // Output: [ 143.75, 666, 52.8 ]

// Objects methods

const mark = {
  fullName: 'mnark miller',
  mass:78,
  height: 1.69,
  calcBMI: function() {

  }
}

for(let rep = 1; rep  <= 10; rep++){
  console.log(`Lifting weight repetion ${rep}`)
}

const jonasArray = [
  'Jonas',
  'Lopes',
  2037-1991,
  'teacher',
  ['Michael','Peter','Steven']
];

const types = [];


for (let i =0; i < jonasArray.length;i++){
  console.log(jonas[i], typeOf jonas[i]);
}

console.log(types);
 


//continue and break

Looping backwards and forward 

 for( let exercise = 1; exercise < 4; exercise++){
  console.log('-------- Starting exercise'
 };

 for(let rep =1; rep <6;rep++){
  console.log(`Exercise ${exercise}: Lifting weight repetion ${rep}`);
 }


 while(rep <= 10){
  console.log(`Lifting weigts repetition ${rep}`);
  rep++
 }

 let dice = Math.trunc(Math.random() * 6)+1;

 while(dice !==6){
  console.log(`Yo rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6)+1;
  if(dice === 6) console.log(`Loop is about to end...`);
 }