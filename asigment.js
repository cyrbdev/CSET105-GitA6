const prompt = require('prompt-sync')();

// Code start here
// Question 1
let car = {
    make: "Toyota",
    model: `4Runner`,
    year: `2016`,
    color: `black`,

    start: function(){
        console.log(`The car has tarted`)
    }
}

console.log(car.start())


// Question 2
let person = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 25, 
    city: "Lancaster",

    greet: function(){
        console.log(`Hi my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`)
    }
}
console.log(person.firstName + ` ` + person.lastName)
console.log(`${person.firstName} ${person.lastName}`)

person.age = 30
person.occupation = `Student`
person.greet()

// Question 3
let student = {
    name: {
        first: `Christian`,
        last: `Rosado`
    },
    age: 18,
    courses: [`CSET`, `ENG`, `BUSS`],

    printInfo: function(){
        console.log(`The student is ${this.name.first} ${this.name.last}, he is ${this.age}, and he is involved in ${this.courses}`)
    }
}
student.printInfo()

// Question 4
let laptop = `{"type" = "Laptop", "model" = "MacBook"}`

JSON.parse(laptop)
