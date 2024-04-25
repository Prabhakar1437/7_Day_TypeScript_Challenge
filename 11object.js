//*In TypeScript , objects are used to represent data with key-values pairs.Each key in object is a string (or a symbol in ES6 )that maps to a value.
var person = {
    name: "Prabhakar",
    age: 25,
    isStudent: true,
    address: {
        city: "Begusarai",
        state: "Bihar",
        country: "India"
    }
};
//todo Accessing the object data
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.address.city);
console.log(person.address.state);
//todo updating object data
person.name = "Rahul";
console.log(person.name);
