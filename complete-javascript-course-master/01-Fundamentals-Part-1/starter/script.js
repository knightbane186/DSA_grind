let js = 'amazing';
if (js === 'amazing') alert ("Javascript is fun");
console.log(40+8);


let firstName = "Jonas";
// if its a constant only then write in upper case. 
let PI = 3.1415;

let myFirstJob = 'programmer';
let myCurrentJob = 'Teacher';

//assignment solution

let country = 'India';
let continent = 'Asia';
let population = 33;

console.log(country);
console.log(continent);
console.log(population);


//variable name conventions 

let isIsland = false;
let language;

console.log(isIsland);

let JavascriptIsFun = true;
console.log(JavascriptIsFun);

// okay this typeOf is a new thing; 
console.log(typeOf true);
console.log(typeOf JavascriptIsFun);
console.log(typeOf 23);
console.log(typeOf 'Jonas')


// not using the let or const keyword is still possible
lastName = 'Lopes';
console.log(lastName);

//operators:
const ageJonas = 2037-1991
console.log(age)



//type Operator
+
typeof
;
//assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;

console.log(x);

//comparison operators
console.log(ageJonas > ageSarah);
// >,<, >=, <=

// operator procedence:

//String, template literals 
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;

const jonas = "I'm " + firstName + ',a'

// template literals 

const jonasNew = `Im the new ${firstName}`

console.log(`String with `)

// if and else statment:
const age = 19;
const isOldEnough  = age >= 18;

const age = 15;

if(age >= 18){
    console.log(`what up Geeeeee`)
}else{
const yearsLeft = 18 - age;
console.log(`why are you doing that ${yearsLeft} motherfucker`);
}
const massMark = 78;
const heightMark = 1.69;
 
const massJohn = 92;
const heightJohn = 1.95;
 
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
 
console.log(BMIMark, BMIJohn);
 
let isHigherBMI = BMIMark > BMIJohn;
 
if (isHigherBMI) {
  // console.log("Mark's BMI is higher than John's !");
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  // console.log("John's BMI is higher than Mark's !");
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}


//Type conversion and coercion:


const inputYear = '1991';
//so the way to convert this to a number is 
// always start with a capital alphabet to begin with
console.log(Number(inputYear), inputYear);

// truthy and falsy values 

const money = 0;
if(money){
    console.log("Dont spend the money");
}else{
    console.log("Do spend the money");
}

const age = 18;
if(age === 18) console.log(`you just became an adult`)

const prompt("whats your favourite numbe? ");
// boolean logic:

const hasDriversLicence = true;
const hasGoodVision = true;
// this is and operator
console.log(hasDriversLicence && hasGoodVision);
//this is OR operator 
console.log(hasDriversLicence || hasGoodVision);

console.log(!hasDriversLicence);

const isTired = false;
console.log(hasDriversLicence && hasGoodVision && isTired);

if(hasDriversLicence && hasGoodVision && !isTired){
    console.log(`is able top drive`);
}else{
    console.log(`Someone else should drive...`);
}

// swtich statements
switch (day){
    case `monday`:
        console.log("Hello evertone");
        break;
        case `tuesday`:
            console.log("Why are we even here?");
            break;
            case `wednesday`:
                case `thursday`:
                console.log("Prepare theory videos");
                break;
                case `friday`:
                    console.log("But why would you do that");
                    break;
                    case `saturday`:
                        case `sunday`:
                        console.log("Record the vidoes and fix your goals");
}
 

const age = 23;

// thjis is call the terniary operator;
age>= 18 ? console.log("I like to drink the wine"): console.log("I like to drink water")



const bill = 275;
bill>= 50...300 ? console.log((bill/15)/100) : console.log((bill/20)/100);



