// const playerOne = {
//   name: 'one',
//   marker: 'X'
// }

// const playerTwo = {
//   name: 'two',
//   marker: 'O'
// }

//  object constructor
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  //this.sayName = () => console.log(this.name); // arrow function ok here, inherits this
  this.sayName = function() {
    console.log(this.name)
  };
}

// arrow function doesn't work here, it doesn't have a this
Player.prototype.sayHello = function() {
  console.log(`hello, my name is ${this.name} and I'm a player`);
}

// constructor function:
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = () => {
// }
}

Book.prototype.info = function() {
  return `${title}, by ${author}, ${pages} pages, ${
    read ? `already read` : `not read yet`
  }`;
};

const book1 = new Book(
  (title = "Slouching towards Bethlehem"),
  (author = "Joan Didion"),
  (pages = 268),
  (read = true)
);

const player1 = new Player("baird", "X");
console.log(player1.name);
player1.sayName();

console.log(book1.info());
console.log(Book.prototype);
console.log(player1.sayHello());
console.log(Object.getPrototypeOf(book1))
console.log(Object.getPrototypeOf(player1))

// 

// let animal = {
//   eats: true,
//   walk() {
//     alert('animal walk')
//   }
// }

// let rabbit = {
//   jumps: true
// }

// let earDetails = {
//   earLength: 10
// }

// rabbit.getPrototypeOf(animal)
// console.log(animal.prototype)

// Object.setPrototypeOf(rabbit.prototype, animal.prototype)

// console.log(Object.getPrototypeOf(rabbit))
// //  same as rabbit.__proto__

// Object.setPrototypeOf(rabbit, animal)
// Object.setPrototypeOf(earDetails, rabbit)
// console.log(Object.getPrototypeOf(rabbit))
// console.log(rabbit.earLength)
// // rabbit.__proto__ = animal

// alert(rabbit.eats)
// alert(rabbit.jumps)
// rabbit.walk()
// earDetails.walk()
// alert(earDetails.jumps)

// 

let animal = {
  eats: true,
  walk: () => {}
}

let rabbit = {}

Object.setPrototypeOf(rabbit, animal)

rabbit.walk = function() {
  alert('rabbit walk function')
}

let dog = {
}

Object.setPrototypeOf(dog, rabbit)

rabbit.walk()

console.log(animal)
console.log(rabbit)
console.log(dog)

dog.walk()