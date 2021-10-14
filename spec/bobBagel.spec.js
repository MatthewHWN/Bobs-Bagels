
const Basket = require('../src/Basket');
const Customer = require('../src/BobBagel');
const test = require('../test-framework');

/* const assertEquals = require('../test-framework'); */
//const greaterThan = require('../test-framework');

//TEST ONE
//------------------------------------------
test.xit("Testing that you can add item to the basket", () => {

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

// setup
test.it("Testing when the basket is full", () => {
	let basket = new Basket();
	input = basket.basketSize;

	expectedOutput = true;
	basket.itemList = ['wine', 'cheese', 'water'];

	// execute
	actualOutput = basket.isFull();

	// verify
	test.assertEquals(actualOutput, expectedOutput);
})



// TEST 4
// -------------------------------

// setup
test.it("Testing that the manager can increase basket capacity", () => {
	let input, expectedOutput, actualOutput;
	let basket = new Basket();
	input = basket.basketSize;
	expectedOutput = 5;

	// execute
	actualOutput = basket.setBasketSize(input, 3);

	// verify
	test.assertEquals(actualOutput, expectedOutput);
})


