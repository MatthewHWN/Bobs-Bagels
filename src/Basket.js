class Basket {
	itemList = [];
	basketSize;

	constructor(basketSize = 2) {
		this.basketSize = basketSize;
	}

	setBasketSize(input, integer) {
		input += integer;
		return input;
	}

	isFull() {
		return this.itemList.length === this.basketSize;
		// return this.itemList.length >= this.basketSize;
	}
}

module.exports = Basket;