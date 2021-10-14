
const Customer = require('../src/BobBagel');
const test = require('../test-framework');

/* const assertEquals = require('../test-framework'); */
//const greaterThan = require('../test-framework');

//TEST ONE
//------------------------------------------
test.it("Testing that you can add item to the basket", () => {

    //setup
    let input = '';
    let customer = new Customer();
    let expectedOutput = customer.basket;
    let actualOutput = [];

    //execute
    actualOutput = customer.addItem(input);

    //verify
    result = test.assertEquals(actualOutput, expectedOutput);

});

let input = '';
let customer = new Customer();
let expectedOutput = customer.basket;
let actualOutput = [];

//console.log("Testing that you can remove an item from basket")

//TEST TWO
//------------------------------------
//setup
//customer.basket = ['potato', 'tomato'];
//input = customer.basket;
//expectedOutput = ['potato'].toString();

//execute
//actualOutput = customer.removeItem().toString();

//verify
//result = assertEquals(actualOutput, expectedOutput);
//console.log(result);

// console.log(actualOutput);
// console.log(expectedOutput);

//TEST THREE
// -------------------------------

//setup
//input = customer.basketSize;
//expectedOutput = input;
//customer.basket = ['wine', 'lemons'];

//execute
//actualOutput = customer.basket.length;

//verify

//result = greaterThan(actualOutput, expectedOutput);
//console.log(result);
