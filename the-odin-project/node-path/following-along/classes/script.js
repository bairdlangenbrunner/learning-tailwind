// constructor function
// all CFs have a prototype
// the individual userOne, userTwo don't have prototypes
// instances of the User object don't have prototypes,
// only constructor functions have it
// BUT instances have the __proto__ property... which
// points towards the prototype
// function User(email, name) {
//   this.email = email,
//   this.name = name
// }

// let userOne = new User('email@email.com', 'Poopy')

// User.prototype.login = function() {
//   this.online = false
// }


// getters and setters
// accessor properties...
// let obj = {
//   get propName() { // when obj.propName is read

//   },
//   set propName(value) { // when obj.propName is assigned

//   }
// }


// let user = {
//   name: 'Baird',
//   surname: 'Langenbrunner',

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }
// alert(user.fullName)




// let user = {
//   name: 'Braid',
//   surname: 'Blahblahblah',

//   get fullName() {
//     return `${this.name} ${this.surname}`
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(' ');
//   }

// }

// // alert(user.fullName)
// user.fullName = 'Poo Poopy';
// alert(user.name)
// alert(user.surname)



// class myClass {
//   constructor () {}
//   method1() {}
//   method2() {}
// }

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }
// }

function User(name) {
  this.name = name;
  // this.sayHi = () => {alert(this.name)}
}
User.prototype.sayHi = function() {alert(this.name)}


let user = new User('Baird')
console.log(user)
user.sayHi()



// class User {
//   name = "Baird"
// }

// let user = new User();
// alert(user.name)



// class Button {
//   constructor(value) {
//     this.value = value;
//   }
//   click = () => {
//     alert(this.value);
//   }
// }

// let button = new Button('hello')
// setTimeout(button.click, 1000)


// class myClass {
//   prop = value;

//   constructor() {}

//   method() {}

//   get something() {}
//   set something() {}

//   [Symbol.iterator]() {}
// }