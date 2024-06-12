// // 'use strict';
// // //constructor functions;
// // //contructor functions always start with capital letters
// // const Person = function(firstname,birthYear){
// //     this.firstname = firstname;
// //     this.birthYear = birthYear;
// // // this.calcAge = function(){
// // //     console.log(2037- this.birthYear)
// // };

// // const jonas = new Person('Jonas',1992);

// // console.log(jonas);

// // //1.New{} is created
// // //2.the new {} is called this, therefore, this = {}
// // //3.now this is linked to prototype
// // //4.Once the link is there, it will always return the {}


// // //so top keep it in a nutshell, what we created ont he top is a blueprint for the actual house and now we can just replicate. 
// // const matilda = new Person('Matilda',2017);
// // console.log(matilda);

// // //prototype
// // Person.prototype.calcAge = function(){
// //     console.log(2037- this.birthYear);
// // };

// // console.log(jonas.__proto__);

// // //prototype:
// // Person.prototype.calcAge = function(){
// //     console.log(2037 = this.birthYear)
// // }
 

// // const Car = function(make,speed){

// // }

// // //1.Cl;asses are not hoisted
// // //2.class is first class citizxen
// // //3.Classes are executed in strict mode
// // // practising GET here;

// // const account = {
// //     owner:'Jonas',
// //     movements:[200,530,120,300],

// //     get latest(){
// // return this.movements.slice(-1).pop();
// //         }
// // ,

// // };
// // console.log(account.latest);



// var person = {
//     city: 'London',
//     calculateAge: function(){
//         var currentYear = new Date().getFullYear();
//         var age = currentYear = this.yearOfBirth;
//         console.log(age);
//     }
// }

// var john = Object.create(person);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.occupation = 'Teacher';


// console.log(john);


// // now we are trying to create a object but with only props that we need;

// var mark = Object.create(person,{
//     name:{value: 'Mark'},
//     yearOfBirth:{value: 1995}
// })
// console.log(mark);



// //




const Person = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

};
Person.prototype.calAge = function(){
    console.log(2037- this.birthYear);
};
const Student = function(firstName, birthYear,course){
Person.call(this,firstName,birthYear);
    this.course = course;
}

//this means the student object is truly pulling from Person object 
Student.prototype = Object.create(Person.prototype)



//here we are just adding a new method tot he student opbjecy

Student.prototype.introduction = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mke',2020,'Computer Science');


//in ES6 classes, if a class wants to adopt from a parent class we only have to type this extends

class Student extends PersonCL {
    constructor(fullName,birthYear,course){
        //super in a class comes from the parent class 
super(fullName,birthYear)
    }

}
// encapsulation for the basis

