let purchases = [
    {
        name: `Milk`,
        quantity: 2,
        sell: false,
        cost: 50,
        sum: this.quantity * this.cost
    },
    {
        name: `Bread`,
        quantity: 2,
        sell: true,
        cost: 25,
        sum: this.quantity * this.cost
    },
    {
        name: `Sausage`,
        quantity: 7,
        sell: true,
        cost: 40,
        sum: this.quantity * this.cost
    },
    {
        name: `Apples`,
        quantity: 10,
        sell: false,
        cost: 10,
        sum: this.quantity * this.cost
    }
];

// minimum

function displayPurchases () {
    function displayPurchasesBySell(sell) {
        const sellPurchases =  purchases.filter((purchases) => purchases.sell === sell);
        sellPurchases.forEach((purchases) => console.log(purchases));
    }
    displayPurchasesBySell(false);
    displayPurchasesBySell(true);
}
// displayPurchases();

function buy (productName) {
    const product = purchases.find((purchases) => purchases.name === productName);
    if (product) {
        product.sell = !product.sell;
    }
    console.log(product);
}
// buy(`Apples`);

// normal

function removeProduct (productName) {
    purchases = purchases.filter((purchases) => purchases.name !== productName);
}
// removeProduct(`Bread`);

function addProduct (newProduct) {
    const product = purchases.find((purchases) => purchases.name === newProduct.name);
    if (!product) {
        purchases.push(newProduct);
        return;
    }
    product.quantity += 1;
}

addProduct (
    {
        name: `Bananas`,
        quantity: 10,
        sell: false,
        cost: 10,
        sum: this.quantity * this.cost
    }
);

addProduct(
    {
        name: `Bread`,
        quantity: 2,
        sell: true,
        cost: 25,
        sum: this.quantity * this.cost
    }
);

console.log(purchases);