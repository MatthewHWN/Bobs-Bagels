const Item = require('../src/Item');
const Basket = require('../src/Basket');
// const Customer = require('../src/BobBagel');

/* const assertEquals = require('../test-framework'); */
//const greaterThan = require('../test-framework');


describe("Test suite for Basket class", () => {
	let input, item, basket, expectedOutput, actualOutput;
	beforeEach(() => {
		item = new Item();
		basket = new Basket();

	})

	afterEach(() => {
		input = null;
		item = null;
		basket = null;
		expectedOutput = null;
		actualOutput = null;
	})

	//TEST ONE
	//------------------------------------------
	it("Test One - Testing that you can add item to the basket", () => {
		//setup
		expectedOutput = 'potato,tomato';
		actualOutput = basket.itemList;
		basket.itemList = ['potato'];
		inBasket = 'tomato'

		//execute
		actualOutput = item.addItem(basket, inBasket).toString();

		//verify
		expect(actualOutput).toBe(expectedOutput);
	})

	//TEST TWO
	//------------------------------------
	it("Test Two - Testing that you can remove an item from basket", () => {
		//setup
		basket.itemList = ['potato', 'tomato'];
		input = basket.itemList;
		expectedOutput = ['potato'].toString();
		inBasket = 'potato' //fill with arbitrary value

		//execute
		actualOutput = item.removeItem(basket, inBasket).toString();

		//verify
		expect(actualOutput).toBe(expectedOutput);
	});

	//TEST THREE
	// -------------------------------
	it("Test three - Testing when the basket is full", () => {
		// setup
		input = basket.basketSize;
		expectedOutput = true;
		basket.itemList = ['wine', 'cheese'];

		// execute
		actualOutput = basket.isFull();

		// verify
		expect(actualOutput).toBe(expectedOutput);
	})

	// TEST 4
	// -------------------------------
	it("Test Four - Testing that the manager can increase basket capacity", () => {
		// setup
		input = basket.basketSize;
		expectedOutput = 5;

		// execute
		actualOutput = basket.setBasketSize(input, 3);

		// verify
		expect(actualOutput).toBe(expectedOutput);
	})

	// TEST 5
	// -------------------------------
	it("Test Five - Testing that you can't remove a non existent item", () => {
		// setup
		basket.itemList = ['potato', 'tomato'];
		expectedOutput = ['potato', 'tomato'];
		inBasket = 'lemon' // For any item to test if in basket
		//execute
		actualOutput = item.removeItem(basket, inBasket);
		//verify
		expect(actualOutput).toEqual(expectedOutput);
	})

	//TEST ONE
	//------------------------------------------
	it("Test Six - Testing that you are adding the same item again", () => {
		//setup
		input = 'test';
		expectedOutput = 'test,test'
		actualOutput = basket.itemList;
		inBasket = 'test'

		//execute
		actualOutput = item.addItem(basket, input, inBasket).toString();

		//verify
		expect(actualOutput).not.toBe(expectedOutput);

	})


})
