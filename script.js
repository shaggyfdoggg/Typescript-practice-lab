"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameofTallestMountain(allMountains) {
    var tallestMountain = allMountains[0];
    allMountains.forEach(function (m) {
        if (m.height > tallestMountain.height) {
            tallestMountain = m;
        }
    });
    return tallestMountain.name;
}
var mountainName = findNameofTallestMountain(mountains);
console.log(mountainName);
var products = [
    {
        name: "hard drive",
        price: 500.00
    },
    {
        name: "keyboard",
        price: 50.00
    },
    {
        name: "charger",
        price: 80.00
    }
];
function calcAveragePrice(allProducts) {
    var result = 0;
    var count = 0;
    allProducts.forEach(function (p) {
        result += p.price;
        count++;
    });
    return result / count;
}
var averageProducts = calcAveragePrice(products);
console.log(averageProducts);
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
function calcInventoryValue(allInventory) {
    var result = 0;
    allInventory.forEach(function (i) {
        result += i.product.price * i.quantity;
    });
    return result;
}
var inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
