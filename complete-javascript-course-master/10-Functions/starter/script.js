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
