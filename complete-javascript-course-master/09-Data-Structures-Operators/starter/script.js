'use strict';

// // Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0,3).toUpperCase();


  for(const flight of flights.split('+')){
 const [type, from, to, time] = flight.split(';');
 const output = `${type.startsWith('_Delayed') ? '🧀' : ''}${type.replaceAll('_',' ')} ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(50);
 console.log(output);

  }
  for(const flight of flights.split('+')){
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🧀' : ''}${type.replaceAll('_',' ')} ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(50);
    console.log(output);
   
     }





// // Data needed for the first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // Fixed the function to avoid duplicate and correct 'startMenu' to 'starterMenu'
//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
  
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };


// //so this is creating a object 
// // const restaurant = {name,openingHours, categories};

// //so now i am assigning new names for the variables 
// const {name,openingHours, categories} = restaurant;
// const {
// name : restaurantName,
// openingHours: hours,
// categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const{menu = [], starterMenu: starters = []}= restaurant;
// console.log(menu, starters);
// //mutating variables 

// let a = 111;
// let b = 999;
// const obj = {a: 23, b:7, c:14};
//  ({a,b} = obj);
//  console.log(a,b);

//  //Nested Objects
//  const {
//   fri: {open, close},
//  } = openingHours;
//  console.log(open,close);


// // and this is destructuring an already exisiting object nad pullin goput varriables from it


// //destructuring arrays

// // const arr = [2,3,4];

// // const a  = arr[0];
// // const b  = arr[0];
// // const c  = arr[0];


// // const[x,y,z] = arr;
// // console.log(x ,y, z);
// // console.log(arr);

// // const[first,second] = restaurant.categories;
// // console.log(first, second);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // const [starter, mainCourse] = restaurant.order(2,0);
// // console.log(starter,mainCourse);

// restaurant.orderDelivery({
//   time: '22.30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //lets try destructuring this now: 

// // orderDelivery: function({ starterIndex, mainIndex, time, address
// // }){
// //   co
// // }

// const arr = [7,8,9];
// const badNewArr = [1,2, arr[0], arr[1],arr[2]];
// console.log(badNewArr);

// //spread operator
// const newArr = [1,2,...arr];

// //WE CAN UPEND AN ELEMENT USING THE SPREAD OPERATOR AND ADD ELEMENTS TO THE EXISTING BLOCK
// const newMenu = [...restaurant.mainMenu,'Gnocchi'];

// //Joining two arrays;
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);


// /// THIS IS SPREAD OPERATOR
// const artr = [1,2,...]

// // THIS IS REST OPERATOR;
// const [pizza, risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.startMenu,
// ];

// console.log(pizza, risotto, otherFood);


// const guests1 = restaurant.numbeGeust ? restaurant.numbGuest : 10;
// console.log(guests1);

// const guests2 = restaurant.numbeGeust || 10;


// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// }



// //FOR OF LOOP 
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

// for(const item of menu) console.log(item);
// for(const item of menu.entries()){
//   console.log(item);
// }

// //SETS

// const orderSet = new Set(['Pasta', 'Pizza', 'Risotto','Pasta'])

// console.log(orderSet);


// //MAP

// const rest = new Map();
// rest.set('name','Classico');
// rest.set(1,'Firenze');
// rest.set(2,'Lisbon');


// const question = new Map([
//   []
// // ])


// const airline = 'Tap Air Portugal';
// const plane = 'A320';

// console.log(plane[


//   document.querySelector('button')  







