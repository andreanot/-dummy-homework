let unitPrice = 119.95;
let taxRate = 0.05;

let totalPrice = unitPrice * 30;
let totalTax = totalPrice * taxRate;

let finalPrice = totalPrice + totalTax;

console.log(`The Final Price for 30 phones is $${finalPrice.toFixed(2)}.`);
