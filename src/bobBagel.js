
class Customer {
    // var size = ();
    basket = [];
    constructor(basketSize = 2) {
    this.basketSize = basketSize;
    }

    addItem(item) {
        this.basket.push(item);
        return this.basket;
    }

    removeItem() {
        this.basket.pop();
        return this.basket;
    }
}

module.exports = Customer;