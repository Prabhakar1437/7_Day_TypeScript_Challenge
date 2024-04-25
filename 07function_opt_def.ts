//?Optional and default Parameters:

//*TypeScript allows you to define optional and default parameters in functions.
//* Optional parameters are denoted by appending a ? symbol after the parameter name
//* and default parameters are specified by providing a default value in the parameter


// const greeting = (name:string,id:number=1):string =>{
//     return `Welcome, ${name} and your id  is ${id}`;
// }

const greeting = (name:string,id?:number):string =>{
    if(id){
        return `Welcome, ${name} and your id  is ${id}`;
    }else {
        return `Hello Guest!,${name}`;
    }
}

console.log(greeting("Prabhakar"));

console.log(greeting("Prabhakar",1234));
