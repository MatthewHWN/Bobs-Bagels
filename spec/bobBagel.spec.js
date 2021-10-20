const Item = require('../src/Item');
const Basket = require('../src/Basket');
// const Customer = require('../src/BobBagel');
const test = require('../test-framework');

/* const assertEquals = require('../test-framework'); */
//const greaterThan = require('../test-framework');

//TEST ONE
//------------------------------------------
test.it("Test One - Testing that you can add item to the basket", () => {

	//setup
	let input = 'test';
	let item = new Item();
	let basket = new Basket();
	let expectedOutput = ['test'].toString();
	let actualOutput = basket.itemList;

	//execute
	actualOutput = item.addItem(basket, input).toString();

	//verify
	test.assertEquals(actualOutput, expectedOutput);


});

//TEST TWO
//------------------------------------
test.it("Test Two - Testing that you can remove an item from basket", () => {

	//setup
	let basket = new Basket();
	let item = new Item();
	basket.itemList = ['potato', 'tomato'];
	input = basket.itemList;
	expectedOutput = ['potato'].toString();

	//execute
	actualOutput = item.removeItem(basket).toString();

	//verify
	test.assertEquals(actualOutput, expectedOutput);

});


//TEST THREE
// -------------------------------

// setup
test.it("Test three - Testing when the basket is full", () => {
	let basket = new Basket();
	input = basket.basketSize;

	expectedOutput = true;
	basket.itemList = ['wine', 'cheese'];

	// execute
	actualOutput = basket.isFull();

	// verify
	test.assertEquals(actualOutput, expectedOutput);
})

// TEST 4
// -------------------------------

// setup
test.it("Test Four - Testing that the manager can increase basket capacity", () => {
	let input, expectedOutput, actualOutput;
	let basket = new Basket();
	input = basket.basketSize;
	expectedOutput = 5;

	// execute
	actualOutput = basket.setBasketSize(input, 3);

	// verify
	test.assertEquals(actualOutput, expectedOutput);
})


