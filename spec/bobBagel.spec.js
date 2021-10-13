const Customer = require('../src/bobBagel');
const assertEquals = require('../test-framework');

// console.log("Testing that you can add item to the basket")

//setup

let input = '';
let customer = new Customer();
let expectedOutput = customer.basket;
let actualOutput = [];
let result;

//execute

actualOutput = customer.addItem(input);

//verify

result = assertEquals(actualOutput, expectedOutput);
console.log(result);

// console.log("Testing that you can remove an item from basket")
//setup
customer.basket = ['potato', 'tomato'];
input = customer.basket;
expectedOutput = ['potato'].toString();

//execute
actualOutput = customer.removeItem().toString();

//verify
result = assertEquals(actualOutput, expectedOutput);
console.log(result);
// console.log(actualOutput);
// console.log(expectedOutput);
