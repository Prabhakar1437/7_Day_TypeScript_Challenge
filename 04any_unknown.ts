//*Any Type

//?Any type is a most flexible type in TypeScript.It essentially turns off all types checking for the variables or expressions it is applied to.

let typeChecker:any = 5;
typeChecker= "Vats"


//!useCases
//* Working with Dynamic Data:when dealing with data from dynamic sources like user inputs, network responses,or deserialized Json objects, the any type can be useful.

//*Migration from JavaScript: when migrating an existing JavaScript codebase to TypeScript, using the any type can be a convenient way to quickly annotate variables and functions without and functions without immediately specifying their precise types


//?UnKnown Type

//?The unknown type is safer alternative to any because it still enforces type checking and type safety.

//?Variables of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in specific ways.

let num2:unknown;

num2 = 10;
num2 ="Vats"
num2 = true

if(typeof num2 === "number"){
    console.log(num2 +5);
}
else (typeof num2 === "boolean")
{  
    console.log(num2 );
}



//!Type Assertion