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

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284
}

const checkIn = function(flightNum, passenger){
    flightNum = 'Lh999';
    passenger.name = 'Mr.' + passenger.name;
    if(passenger.passport ===24739479284 ){
        alert('Check in')
    }else{
        alert('Wrong passport!')
    }
}

const newPassport = function(person){
    person.passport =Math.trunc(Math.random() * 10000);
    
}


// First class vs highher order function 
// // Functions are just another type of objects in JS:
// // Frist class citizens
// //Functions are another "type" of object

//  const add = (a,b) => a +b;
  

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){

};
