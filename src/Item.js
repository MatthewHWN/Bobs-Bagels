class Item {
	itemList = [];

	addItem(basket, item) {
		basket.itemList.push(item);
		return basket.itemList;
	}

	removeItem(basket) {
		basket.itemList.pop();
		return basket.itemList;
	}
}

module.exports = Item;