'use strict';
//constructor functions;
//contructor functions always start with capital letters
const Person = function(firstname,birthYear){
    this.firstname = firstname;
    this.birthYear = birthYear;
// this.calcAge = function(){
//     console.log(2037- this.birthYear)
};

const jonas = new Person('Jonas',1992);

console.log(jonas);

//1.New{} is created
//2.the new {} is called this, therefore, this = {}
//3.now this is linked to prototype
//4.Once the link is there, it will always return the {}


//so top keep it in a nutshell, what we created ont he top is a blueprint for the actual house and now we can just replicate. 
const matilda = new Person('Matilda',2017);
console.log(matilda);

//prototype
Person.prototype.calcAge = function(){
    console.log(2037- this.birthYear);
};

console.log(jonas.__proto__);

//prototype:
Person.prototype.calcAge = function(){
    console.log(2037 = this.birthYear)
}