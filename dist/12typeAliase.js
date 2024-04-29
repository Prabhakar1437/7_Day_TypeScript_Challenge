"use strict";
//* In TypeScript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provides better readability , organization , and abstraction of complex types
const person1 = {
    name: "Prabhakar",
    age: 25,
    isStudent: true,
    address: {
        city: "Begusarai",
        state: "Bihar",
        country: "India"
    }
};
const person2 = {
    name: "Lovlu",
    age: 25,
    isStudent: true,
    address: {
        city: "Begusarai",
        state: "Bihar",
        country: "India"
    }
};
const person3 = {
    name: "Chhotu",
    age: 25,
    isStudent: true,
    address: {
        city: "Begusarai",
        state: "Bihar",
        country: "India"
    }
};
let laptop = {
    name: "Laptop 2019",
    price: 1000,
    quantity: 5
};
console.log("This is the Laptop Details");
console.log(`The Name of the product is ${laptop.name}`);
console.log(`The Price of the product is ${laptop.price}$`);
const calculateTotalPrice = () => {
    return laptop.price * laptop.quantity;
};
console.log(`The Total Price of the product is ${calculateTotalPrice()}$`);
