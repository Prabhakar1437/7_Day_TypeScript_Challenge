//*In TypeScript , a interface is powerful feature that allows you to define a contract for an object's shape.It specifies the properties and their types that an object must have to be considered at that particular interface type.Interface are Primarily used for type-checking during development and do not generate any JavaScript code at runtime.

//!Interface

interface Greet {
    name:string;
    age:number;
    gender:string;
    rollNo:number;

}

const greets :Greet ={

    name: "Prabhakar",
    age: 25,
    rollNo: 123456,
    gender: "Male"
}


interface Products{
    name:string;
    price: number;
    quantity:number;
}

const product1:Products ={
    name: "Laptop",
    price: 1000,
    quantity: 10
}

// const product2= {...product1 ,price: 2000};
// console.log(product2);

// function checkProduct (prod :Products) {    
//    if( prod.price !== undefined){
//        return `${prod.name} is available at ${prod.price}`;
//    }else{
//       return `${prod.name} is   not available at ${prod.quantity}` ;
//    }
// }

const calculateTotalPrice1 :(product1:Products) => number =(product1:Products):number =>{

    const {price, quantity} = product1;
    return product1.price * product1.quantity;
}

console.log(calculateTotalPrice1(product1));

//Interface


//!TypeScript Compiler and Project Configuration Vedio -22
//*lib,target,rootdir,outdir,include,exclude