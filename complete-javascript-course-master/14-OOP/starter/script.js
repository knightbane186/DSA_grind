'use strict';
//constructor functions;
//contructor functions always start with capital letters
const Person = function(firstname,birthYear){

}

const jonas = new Person('Jonas',1992);

console.log(jonas);

//1.New{} is created
//2.the new {} is called this, therefore, this = {}
//3.now this is linked to prototype
//4.Once the link is there, it will always return the {}
