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


class Account {
    constructor(owner,currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        //protected
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);

        //Public interface
        deposit(val) {
            this._movements.push(val);
        }

        withdraw(val){
            this.deposit(-val);
        }
     
    }
}

const acc1 = new Account('Jonas','EUR',1111);



//Public fields


//Private fields
//SO to add a private fuielkd we just need to add a # in front og the variable.
class MyCounter{
    #count = 30;
}

//Public methods 


//Private methods


// this is cool exaomple of the private method:

class Person {
    #age; // Private field

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    #calculateBirthYear() { // Private method
        return new Date().getFullYear() - this.#age;
    }

    getBirthYear() {
        return this.#calculateBirthYear(); // Calling the private method within the class
    }
}

const person = new Person('Alice', 30);
console.log(person.getBirthYear()); // Accessing the result of the private method via a public method
// console.log(person.#calculateBirthYear()); // SyntaxError: Private field '#calculateBirthYear' must be declared in an enclosing class

class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Assuming some methods and properties of Person class
}

class Student extends Person {
    university = 'University of Lisbon';
    #studyHours = 0;
    #course;
    static numSubjects = 10;

    constructor(fullName, birthYear, startYear, course) {
        super(fullName, birthYear);
        this.startYear = startYear;
        this.#course = course;
    }

    introduce() {
        console.log(`I study ${this.#course} at ${this.university}`);
    }

    study(h) {
        this.#makeCoffee();
        this.#studyHours += h;
    }

    #makeCoffee() {
        return 'Here is a coffee for you';
    }

    get testScore() {
        return this._testScore;
    }

    set testScore(score) {
        this._testScore = score < 20 ? score : 0;
    }

    static printCurriculum() {
        console.log(`There are ${this.numSubjects} subjects`);
    }
}