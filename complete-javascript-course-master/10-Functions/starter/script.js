'use strict';
// // We are learnig about default parameters 

// // const bookings = [];

// // const  createBooking = function(flightNUm,
// // numPassenger = 1,price = 199){

 
// //     const booking = {
// //         flightNUm,
// //         numPassenger,
// //         price
// //     }
// //     console.log(booking);
// //     booking.push(booking);  
// // }


// // createBooking('LH123');
// // createBooking('LH123',2,800);




// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split('');
//     return [first.toUpperCase(), ...others].join('');
// };

// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// };

// // Example usage
// transformer('Javascript is the best', upperFirstWord);

// const high5 = function()
// {
//     console.log('🚀');
// }

// document.addEventListener('click',high5);
// ['Jonas','Martha','Adam'].forEach(high5);


// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');


// greet('Hello')('Jonas');



// const greetOne = () => {

// }

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jonas');

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],

//     book(flightNum,name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight:`${this.iataCode}${flightNum}`,name});
//     },
// };

// const euroWings = {
//     name: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],

// };

// const book = lufthansa.book;

// book.call(euroWings,23,'Sarah wills');
// console.log(euroWings);


// const swiss = {
//     name: 
// }

// book.call(swiss,...flightData);

// //

// lufthansa.planes = 300;
// l;ufthansa.buyPlane = function(){
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// }

// document.querySelector('.buy')
// .addEventListener('click',lufthansa. )

// //partially binding 
// const addTax = (rate,value) => value + value * rate;
// console.log(addTax(0.1,200));

// const addVAT = addTax.bind(null,0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));


// const addTaxRate = function(rate){
//     return function(value) {
//         return value + value * rate;
//     };
// };


// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]



const poll = {
    question: 'What is your favourite progamming language?',
    options: ['0: JavaScript', '1:Python','2:Rust','3: C++'],

    answers: new Array(4).fill(0),
registeredNewAnswer(){
    const answer = Number( prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
},

};



