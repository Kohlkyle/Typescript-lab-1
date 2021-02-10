"use strict";
let mountains = [
    {
        name: 'kilimanjaro',
        height: 19341,
    },
    {
        name: 'Everest',
        height: 29029,
    },
    {
        name: 'Denali',
        height: 20310,
    },
];
const findNameOfTallestMountain = (arrayOfMountain) => {
    let tallestMountain = arrayOfMountain[0];
    arrayOfMountain.forEach((mountain) => {
        if (tallestMountain.height < mountain.height) {
            tallestMountain = mountain;
        }
    });
    return tallestMountain.name;
};
console.log(findNameOfTallestMountain(mountains));
let products = [
    {
        name: 'toothbrush',
        price: 20,
    },
    {
        name: 'Floss',
        price: 3,
    },
    {
        name: 'mouthwash',
        price: 5,
    },
];
const calcAverageProductPrice = (arrayOfProducts) => {
    let averagePrice = 0;
    arrayOfProducts.forEach((product) => {
        averagePrice += product.price / arrayOfProducts.length;
    });
    return Math.round(averagePrice);
};
console.log(calcAverageProductPrice(products));
let inventory = [
    {
        product: { name: 'motor', price: 10.0 },
        quanity: 10,
    },
    {
        product: { name: 'sensor', price: 12.5 },
        quanity: 4,
    },
    {
        product: { name: 'LED', price: 1.0 },
        quanity: 20,
    },
];
const calcInventoryValue = (arrayOfInventoryValues) => {
    let counter = 0;
    arrayOfInventoryValues.forEach((item) => {
        let itemValues = item.product.price * item.quanity;
        counter += itemValues;
    });
    return counter;
};
console.log(calcInventoryValue(inventory));
