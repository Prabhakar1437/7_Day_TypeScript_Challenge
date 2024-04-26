//*In TypeScript , a interface is powerful feature that allows you to define a contract for an object's shape.It specifies the properties and their types that an object must have to be considered at that particular interface type.Interface are Primarily used for type-checking during development and do not generate any JavaScript code at runtime.
var greets = {
    name: "Prabhakar",
    age: 25,
    rollNo: 123456,
    gender: "Male"
};
var product1 = {
    name: "Laptop",
    price: 1000,
    quantity: 10
};
// const product2= {...product1 ,price: 2000};
// console.log(product2);
// function checkProduct (prod :Products) {    
//    if( prod.price !== undefined){
//        return `${prod.name} is available at ${prod.price}`;
//    }else{
//       return `${prod.name} is   not available at ${prod.quantity}` ;
//    }
// }
var calculateTotalPrice1 = function (product1) {
    var price = product1.price, quantity = product1.quantity;
    return product1.price * product1.quantity;
};
console.log(calculateTotalPrice1(product1));
