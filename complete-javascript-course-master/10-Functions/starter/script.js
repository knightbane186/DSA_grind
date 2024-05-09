'use strict';
// We are learnig about default parameters 

// const bookings = [];

// const  createBooking = function(flightNUm,
// numPassenger = 1,price = 199){

 
//     const booking = {
//         flightNUm,
//         numPassenger,
//         price
//     }
//     console.log(booking);
//     booking.push(booking);  
// }


// createBooking('LH123');
// createBooking('LH123',2,800);

//



const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split('');
    return [first.toUpperCase(), ...others].join('');
};

const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

// Example usage
transformer('Javascript is the best', upperFirstWord);

const high5 = function()
{
    console.log('🚀');
}

document.addEventListener('click',high5);
['Jonas','Martha','Adam'].forEach(high5);


const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');


greet('Hello')('Jonas');



const greetOne = () => {

}

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');










