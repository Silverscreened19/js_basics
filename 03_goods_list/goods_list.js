class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }

    setAvailable(available) {
        this.available = available;
    }
}

class GoodsList {
    #goods;
    constructor(filter, sortPrice, sortDir) {
        this.#goods = [];
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    get list() {
        const resultList = this.#goods.filter(good => this.filter.test(good.name));

        if (!this.sortPrice) {
            return resultList;
        }

        if (this.sortDir) {
            return resultList.sort((current, next) => (current.price - next.price));
        }
        return resultList.sort((current, next) => (next.price - current.price));
    }

    add(good) {
        this.#goods.push(good);
    }

    remove(id) {
        const index = this.#goods.findIndex(good => good.id === id);
        if (index >= 0) {
            this.#goods.splice(index, 1);
        }
        return index;
    }
}

class BasketGood extends Good {
    constructor(id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available, amount);
        this.amount = amount;
    }
}

class Basket {
    constructor(goods) {
        this.goods = [];
    }

    get totalAmount() {
        return this.goods.map(good => good.amount).reduce((sum, current) => (sum + current), 0);
    }

    get totalSum() {
        return this.goods.reduce((sum, current) => (sum + current.amount * current.price), 0);
    }

    add(good, amount) {
        let index = this.goods.findIndex(item => item.id === good.id);
        if (index >= 0) {
            this.goods[index].amount += amount;
        } else {
            let addGood = new BasketGood(good.id, good.name, good.description, good.sizes, good.price, good.available, amount);
            this.goods.push(addGood);
        }
    }

    remove(good, amount) {
        let index = this.goods.findIndex(item => item.id === good.id)
        if (index >= 0) {
            if (this.goods[index].amount - amount <= 0 || amount === 0) {
                this.goods.splice(index, 1);
            } else {
                this.goods[index].amount -= amount;
            }
        }
    }

    clear() {
        this.goods.splice(0, this.goods.length)
    }

    removeUnavailable() {
        this.goods = this.goods.filter(good => good.available === true);
    }
}


const first = new Good(1, 'Jeans', 'Slim black jeans', [42, 48, 50], 30, true);
const second = new Good(2, 'Shirt', 'Sheer white shirt', ['xs', 'm', 'l'], 20, false);
const third = new Good(3, 'Dress', 'Blue dress', ['xs', 'm', 'l'], 40, false);
const fourth = new Good(4, 'Chelsea boots', 'Brown chelsea boots', [6, 7, 8], 50, true);
const fifth = new Good(5, 'Jersey', 'Pink flower jersey', ['m', 'l', 'xs'], 100, true);
const sixth = new Good(6, 'Jacket', 'Blue boyfriend jacket', [38, 42, 50], 80, true);

const catalogue = new GoodsList(/[a-z]/i, true, true);

catalogue.add(first);
catalogue.add(second);
catalogue.add(third);
catalogue.add(fourth);
catalogue.add(fifth);
catalogue.add(sixth)

catalogue.filter = /[a-z]/i;
catalogue.sortPrice = true;
catalogue.sortDir = false;

console.log(`The catalogue contains:`, catalogue.list);

const basket = new Basket();

basket.add(first, 10)
basket.add(second, 20)
basket.add(third, 30)


basket.remove(first, 5)
console.log(`Total sum of goods in the basket:`,basket.totalSum)
console.log(`Total amount of goods in the basket:`, basket.totalAmount)


basket.removeUnavailable()
console.log(`Total sum of goods in the basket:`,basket.totalSum)
console.log(`Total amount of goods in the basket:`, basket.totalAmount)
basket.clear()
console.log(basket)
