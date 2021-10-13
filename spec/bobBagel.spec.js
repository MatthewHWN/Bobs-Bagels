const Basket = require('../src/bobBagel');
const assertEquals = require('../test-framework');

// console.log("Testing that you can add item to the basket")

//setup

let input = '';
let basket = new Basket();
let expectedOutput = [];
let actualOutput = [];

//execute

actualOutput = basket.addItem(input);

//verify

let result = assertEquals(actualOutput, expectedOutput);
console.log(result);