//?Union types allow you to specify that a variable can hold values of multiple types. You use the /(pipe) symbol to define a union type.In
//*In TypeScript, when using a union type, It is essential to ensure that at least one of the types in the union includes all the required properties.Failure to do so will result in a type error during compilation.

const inputValue:(value:string | number | boolean)=>void = (value:string | number | boolean):void=> {}

const userInput:(value:string|number)=>void =(value:string|number):string | number=>{
    if(typeof value === 'number'){
        return value *2
    }
    else if(typeof value === 'string'){
        return value.toUpperCase();
    }else {
        throw new Error('Invalid Input');
    }
}


console.log(userInput(10));



//!Intersection types allow you to combine multiple types into single type.You use the &(ampersand) to define an intersection type

type Person1 ={
    name:string;
    age?:number;

}
type Employee={
    emp_id:number;
    department:string;
}

type EmployeeDetails = Person1 & Employee; // Union  type

const employeeDetails :EmployeeDetails= {
    name:'John',
    age:34,
    emp_id:5678,
    department :"IT"
} 

const myPersonalInfo:Person1={
    name:'Prabhakar',
    age:25
}


//Question

type User ={
    name:string;
    age?:number;

} 

type MyLocation ={
    city:string;
    country:string;
}

const user:User = { 
    name:'Prabhakar',
    age:25
}

const location1:MyLocation = {
    city:'Begusarai',
    country:'India'
}


const createUserProfile :(user:User,location1:MyLocation) =>any = (user:User,location1:MyLocation) => {
    // return `my name is ${user.name} and my location is ${location1.city}`;
    return{...user,...location1}
}


  const myCompleteInfo:User& MyLocation=createUserProfile(user, location1)
  console.log(myCompleteInfo);