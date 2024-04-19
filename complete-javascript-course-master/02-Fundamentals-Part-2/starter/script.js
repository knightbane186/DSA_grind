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
    return `${}`
}
const age 
