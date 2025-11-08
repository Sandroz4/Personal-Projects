// // Object Literal

// const person = {
//     name: 'sandro',
//     age: 17,
//     trait: 'persistence'
// }

// console.log(person.name, person.age, person.trait)

// let age = person.age
// console.log(age)



// // Constructor Objects


// function person(name, age) {
//     this.name = name,
//     this.age = age
// }

// let person1 = new person('sandro', 17)

// console.log(person1.name, person1.age)

// function person(name, age) {
//     this.name = name;  
//     this.age = age;
//     this.yearOfBirth = bornYear;
// }

// function bornYear() {
//     return 2016 - this.age;
// }

// let p = new person("Alice", 30);
// console.log(p.yearOfBirth())


// function car(color, seats, release) {
//     this.color = color
//     this.seats = seats
//     this.release = release
//     this.timePassed = lifetime
// }

// function lifetime() {
//     return 2025 - this.release
// }

// let p = new car('red', 5, 2005)
// console.log(p.timePassed())



// function Person(name, lastname) {
//     this.name = name
//     this.lastname = lastname   
// }

// let name = prompt('Enter your name: ')
// let lastname = prompt('Enter your lastname: ')

// const person1 = new Person(name, lastname)

// console.log(person1.name, person1.lastname)
// console.log(person1)


