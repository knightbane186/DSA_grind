'use strict';
// We are learnig about default parameters 

const bookings = [];

const  createBooking = function(flightNUm,
numPassenger = 1,price = 199){

 
    const booking = {
        flightNUm,
        numPassenger,
        price
    }
    console.log(booking);
    booking.push(booking);  
}

