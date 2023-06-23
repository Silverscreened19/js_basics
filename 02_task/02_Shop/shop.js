const goods = [
    {
        id: 1,
        name: "Куртка компактная UV Protection UNIQLO",
        description: "UV Protection Компактная куртка с капюшоном выполнена из водонепроницаемого материала с функцией защиты от УФ-лучей.",
        sizes: ['m', 'xl'],
        price: 2999,
        available: true
    },

    {
        id: 2,
        name: "Блуза Settimo Senso",
        description: "80% вискоза с рисунком",
        sizes: [40, 42, 44, 46, 48, 50],
        price: 3290,
        available: false
    },

    {
        id: 3,
        name: "Платье I Am Studio",
        description: "50% вискоза синее",
        sizes: [40, 42, 44, 46, 48, 50],
        price: 18500,
        available: true
    },

    {
        id: 4,
        name: "Кроссовки New Balance 2002",
        description: "Кроссовки выполнены из натуральной замши и текстиля. Минималистичная цветовая гамма, классический силуэт нулевых",
        sizes: [37, 38, 39, 40, 41],
        price: 21990,
        available: true
    },

    {
        id: 5,
        name: "Кеды Vans UA OLD SKOOL",
        description: "Кеды выполнены из натуральной кожи и текстиля. Эксклюзивный вафельный рисунок протектора Classic VULK для превосходного сцепления",
        sizes: [37, 38, 39, 40, 41],
        price: 8399,
        available: true
    },
];

let cart = [
    {
        good: goods[0],
        amount: 5,
    },
    {
        good: goods[3],
        amount: 2,
    },
];


function addToCart(i, amount) {
    if (goods[i]['available'] == false) {
        console.log("товара нет в наличии");
        return cart
    } else {
        cart.push(
            {
                good: goods[i],
                amount: amount,
            })
        console.log(`товар ${goods[i]['name']} добавлен в корзину`);
    }
    return cart
}

function clearCart() {
    cart.splice(0, cart.length);
    console.log(cart)
    return cart
}

function removeFromCart(i, amount) {
    if (i <= (cart.length - 1)) {
        if (amount >= cart[i].amount) {
            cart.splice(i, 1);
            return cart
        }
        cart[i].amount -= amount;
    }
    else {
        console.log("товара нет в корзине")
    }
}

function getTotal() {
    result = {
        totalAmount: 0,
        totalSum: 0,
    }
    cart.forEach(function (item) {
        result.totalAmount += item.amount;
        result.totalSum += item.amount * item.good.price;
    });
    return result

}

function resultCart() {
    clearCart()
    addToCart(0, 1)
    addToCart(1, 10)
    addToCart(3, 11)
    removeFromCart(1, 1)
    console.log(getTotal())
}

resultCart()
