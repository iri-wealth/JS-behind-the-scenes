'use strict';

const firstName = 'Jonas';
const job = 'teacher';

if (firstName === 'Jonas' && job === 'teacher') {
  const age = 2037 - 1991;
  console.log(firstName, job, age);
}

//Hoisting and TDZ in Practice

var me = 'Jonas';
let hisJob = 'teacher';
const year = 1991;
console.log(me);
console.log(hisJob);
console.log(year);

function addDecl(a, b) {
  return a + b;
}
console.log(addDecl(2, 3));

const addRow = (a, b) => a + b;
console.log(addRow(6, 20));

function deleteShoppingCart() {
  let numberProducts = 10;
  if (numberProducts === 0) {
    console.log('All products deleted!');
  } else {
    console.log(
      `You have ${numberProducts} products left in your Shopping Cart`
    );
  }
}
deleteShoppingCart();

//this keyword in Practice

//console.log(this) - it is simply the Window object;

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //console.log(this); - this keyword is undefined
};
//calcAge(1991);
const self = this; // self or that
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  firstName: 'Matilda NEW',
  year: 2017,
  greet: () => {
    console.log(`Hallo ${matilda.firstName}`);
  },
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();
matilda.greet();

//arguments keyword

function add(a, b) {
  console.log(arguments);
  return a + b;
}
console.log(add(2, 3));

function addExpr(a, b) {
  console.log(arguments);
  return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 12);

//primitives are numbers, strings, booleans, null, undefined
/*
let stockPrice = 100;
let lastPrice = stockPrice;
stockPrice = 200;
console.log(`The current stock price is ${stockPrice}`);
console.log(`The previous stock price was ${lastPrice}`);
*/

//objects are functions

const tickerData = {
  stockPrice: Number(100),
  lastPrice: Number(85),
};

console.log(tickerData, typeof tickerData, typeof tickerData.stockPrice);

const priceChange = tickerData.stockPrice - tickerData.lastPrice;
const changePercent = (priceChange / tickerData.lastPrice) * 100;
console.log(
  `The price change for this ticker is ${priceChange}, The % change in this ticker is ${changePercent}`
);

let lastName = 'Williams';
let oldLastName = lastName;
//lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['mother', 'father', 'Sister'],
};

let marriedJessica = {};
const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary', 'jogn');
console.log(
  `before was ${jessica.lastName}, after marrige is ${jessicaCopy.lastName}, family members are ${jessicaCopy.family}`
);
