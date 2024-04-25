//?Optional and default Parameters:
//*TypeScript allows you to define optional and default parameters in functions.
//* Optional parameters are denoted by appending a ? symbol after the parameter name
//* and default parameters are specified by providing a default value in the parameter
// const greeting = (name:string,id:number=1):string =>{
//     return `Welcome, ${name} and your id  is ${id}`;
// }
var greeting = function (name, id) {
    if (id) {
        return "Welcome, ".concat(name, " and your id  is ").concat(id);
    }
    else {
        return "Hello Guest!,".concat(name);
    }
};
console.log(greeting("Prabhakar"));
console.log(greeting("Prabhakar", 1234));
