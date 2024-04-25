//* In TypeScript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provides better readability , organization , and abstraction of complex types


//* To define a type alias , you use the type keyword followed by the alias name and the type definition:


type Person ={
    name:string;
    age:number;
    isStudent:boolean;
    class?:string;//Optional
    address:{city:string;state:string,country:string};

}
const person1:Person ={
     
    name: "Prabhakar",
    age: 25,
    isStudent: true,
    address:{
        city: "Begusarai",
        state: "Bihar",
        country: "India"
    }
    
}

const person2:Person ={
     
    name: "Lovlu",
    age: 25,
    isStudent: true,
    address:{
        city: "Begusarai",
        state: "Bihar",
        country: "India"
    }
    
}

const person3:Person ={
     
    name: "Chhotu",
    age: 25,
    isStudent: true,
    address:{
        city: "Begusarai",
        state: "Bihar",
        country: "India"
    }
    
}

// console.log(person1);

//todo Create a product object:
//? Define an interface or type representing a product with properties like name, price and quantity.
//*Create a product object with the following data
//Name:Laptop
//Price:1000$
//Quantity:5

type Product ={
    name:string;
    price:number;
    quantity:number;
}

let laptop :Product={
   name:"Laptop 2019",
   price:1000,
   quantity:5
};

console.log("This is the Laptop Details");
console.log(`The Name of the product is ${laptop.name}`);
console.log(`The Price of the product is ${laptop.price}$`);    

const calculateTotalPrice =()=>{
    return laptop.price * laptop.quantity;
}

console.log(`The Total Price of the product is ${calculateTotalPrice()}$`);