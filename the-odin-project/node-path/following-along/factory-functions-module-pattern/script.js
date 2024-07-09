// let globalAge = 23; // This is a global variable

// // This is a function - and hey, a curly brace indicating a block
// function printAge(age) {
//   var varAge = 34; // This is a function scoped variable

//   // This is yet another curly brace, and thus a block
//   if (age > 0) {
//     // This is a block-scoped variable that exists
//     // within its nearest enclosing block, the if's block
//     const constAge = age * 2;
//     console.log(constAge);
//   }

//   // ERROR! We tried to access a block scoped variable
//   // not within its scope
//   console.log(constAge);
// }

// printAge(globalAge);

// ERROR! We tried to access a function scoped variable
// outside the function it's defined in
// console.log(varAge);

// const name = "bob";
// const age = 28;
// const color = "red";

// const thatObject = { name: name, age: age, color: color };
// console.log(thatObject);
// const fancyObject = { name, age, color };
// console.log(fancyObject);

// console.log(name, age, color);
// console.log({ name, age, color });
// console.table(fancyObject);

// // destructuring
// const obj = { a: 1, b: 2 };
// const { a, b } = obj;

// //

// function createUser(name) {
//   const discordName = "@" + name;

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => reputation++;

//   return { name, discordName, getReputation, giveReputation };
// }

// function createPlayer(name, level) {
//   const user = createUser(name);
//   const increaseLevel = () => level++;
//   return { name, getReputation, giveReputation, increaseLevel };
//   // to extend it:
//   // return Object.assign({}, user, {increaseLevel});
// }

// const braid = createUser("braid");
// braid.giveReputation();
// braid.giveReputation();

// console.log({
//   discordName: braid.discordName,
//   reputation: braid.getReputation(),
// });
// console.log(braid);

// // module
// const calculator = (function () {
//   const add = (a, b) => a + b;
//   const sub = (a, b) => a - b;
//   const mul = (a, b) => a * b;
//   const div = (a, b) => a / b;
//   return { add, sub, mul, div };
// })();

// console.log(calculator(3, 5));

// const { add, ...rest } = calculator(3, 5);
// console.log(add);

// console.log(calculator.add(3,5))

// function sayHi() {
//   console.log("hi");
// }

// sayHi();

// const age = 100;

// function go() {
//   const age = 200;
//   const hair = "blonde";
//   console.log(hair);
//   console.log(age);
// }

// console.log(age);
// go();

// let cool;
// if (1===1) {
//   cool = true;
// }
// console.log(cool)

//

// function isCool(name) {
//   let cool;

//   if (name==='baird') {
//     cool = true;
//   }

//   console.log(cool)
//   return(cool)
// }

// isCool('baird')
// console.log(isCool('baird'))

// const dog = 'snickers'
// function logDog() {
//   console.log(dog);
// }

// function go() {
//   const dog = 'sunny';
//   logDog();
// }

// go()

// function outer() {
//   const outerVar = "hi outer var here";
//   function inner() {
//     const innerVar = "inner var";
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   inner();
// }

// outer();

// function outer() {
//   const outerVar = "hi outer var here";
//   return function inner() {
//     const innerVar = "inner var";
//     console.log(innerVar);
//     console.log(outerVar);
//   }

//   return inner
// }

// const innerFn = outer()
// innerFn()

function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();

  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const sayWhaddup = createGreeting("whaddup");
console.log(sayWhaddup("baird"));

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `your name ${gameName} score is ${score}`;
  };
}

const hockeyGame = createGame("cropduster");
console.log(hockeyGame());

const soccerGame = createGame("soccer");
console.log(soccerGame());

const Formatter = (function (doc) {
  console.log("hmm");
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log("making uppercase");
    return text.toUpperCase();
  };

  const writeToDOM = (selector, message) => {
    if (!!document && "querySelector" in doc) {
      document.querySelector(selector).innerHTML = message;
    }
  };

  return { makeUppercase, writeToDOM };
})(document || documentMock);

console.log(Formatter.makeUppercase("hmm"));
Formatter.writeToDOM("div", "hihihi");

const documentMock = (() => ({
  querySelector: (selector) => ({
    innerHTML: null,
  }),
}))();

let score = (function () {
  let points = 0;
  return function() {
    points +=1;
    return points
  }
})();

console.log(score());
console.log(score());
console.log(score());
 