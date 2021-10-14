
class Customer {
    // var size = ();

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