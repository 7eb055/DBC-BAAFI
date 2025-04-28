//Shopping Cart with Discounts
let cart = [
    { name: "shirt", price: 20, quantity: 2 },
    { name: "banana", price: 10, quantity: 2 },
    { name: "orange", price: 8, quantity: 1 }
];

let subtotal = 0;
let totalQuantity = 0;

for (let item of cart) {
    subtotal += item.price * item.quantity;
    totalQuantity += item.quantity;
}

let discount = 0;
if (totalQuantity > 10) {
    discount = 0.2;
 
} else if (totalQuantity > 5) {discount = 0.1;}

let discountAmount = subtotal * discount;
let finalTotal = subtotal - discountAmount;

console.log("Subtotal: GHC" + subtotal.toFixed(2));
console.log("Discount: GHC" + discountAmount.toFixed(2));
console.log("Final Total: GHC" + finalTotal.toFixed(2));

/// Type Validtor 
let values = [42, "hello", true, null, { name: "Bob" }, [1, 2]];

let counts = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    null: 0,
    array: 0
};

for (let value of values) {
    if (value === null) {
        counts.null++;
    } 
    else if (Array.isArray(value)) {
        counts.array++;
    } else {let type = typeof value;
        if (type === "object") {
            counts.object++;
        } else {
            counts[type]++;
        }   
    }

}

console.log("Counts: ", counts);

//Compound Interest Calculator
let principal = 200; 
let rate = 0.10;
let years = 5;

if (principal <= 0 || rate <= 0 || years <= 0) {
    console.log("Invalid input. Please enter positive values for principal, rate, and years.");
}
else {
    let amount = principal * Math.pow((1 + rate), years);
    let interest = amount - principal;
    console.log("Compound Interest: GHC" + interest.toFixed(2));
    console.log("Total Amount: GHC" + amount.toFixed(2));
}