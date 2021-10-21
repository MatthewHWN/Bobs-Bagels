class Item {
	itemList = [];

	addItem(basket, inBasket) {
		if ((basket.itemList.indexOf(inBasket)) != 1) {
			basket.itemList.push(inBasket);
			return basket.itemList;
		}
		return basket.itemList
	}

	removeItem(basket, inBasket) {
		if ((basket.itemList.indexOf(inBasket)) != -1) {
			basket.itemList.pop();
			return basket.itemList;
		}
		return basket.itemList;
	}

}

module.exports = Item;