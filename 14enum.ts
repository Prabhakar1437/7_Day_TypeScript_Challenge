//*Enums in TS

//?Enum in Typescript are commonly used when you want to represent a set of related values and choose one value from multiple options. Enum provide a convenient way to define a set of named values and associate them with a specific meanings.

// * In TypeScript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default numeric value for the first enum constant is 0, and subsequent enum constants receive values incremented by 1.

enum Roles {
    user="user", 
    admin = "admin"
}
type LoginDetails ={
    username:string;
    password:string;
    email:string;
    phone:string;
    address:string;
    role:Roles
}

const loginDetails:LoginDetails = {
    username:"Prabhakar",
    password:"1234567890",
    email:"prabhakar@gmail.com",
    phone:"+91 9876543210",
    address:"Noida",
    role:Roles.admin

}

const loginDetails1:LoginDetails = {
    username:"Prabhakar",
    password:"1234567890",
    email:"prabhakar@gmail.com",
    phone:"+91 9876543210",
    address:"Noida",
    role:Roles.user

}

const isAdmin :(loginDetails1:LoginDetails)=> string = (loginDetails1:LoginDetails):string=> {
    const {username ,role}=loginDetails1;
   return role === 'admin' ? `Welcome Admin ${username}` : `Welcome User ${username} is not allow to edit the website` ;
}

console.log(isAdmin(loginDetails1));
