//? the boolean type represent a value that can be either true or false. This is different from other data types such as numbers, strings, and objects which have specific values. It is one of the basic primitive types in the language.
//* In JavaScript, Boolean values are created using the keywords true or false. */
var isBoolean = true; //*TypeScript allows us to specify that a variable should be of type "boolean" by adding ": boolean" after the variable 
var hasStarted = false;
//*👉 The type annotation is optional in TypeScript because it can infer the types from the value assigned to it 
//! Number is even or odd
function checkOddOrEven(num) {
    if (num % 2 === 0) {
        return "".concat(num, " is even");
    }
    else {
        return "".concat(num, " is odd");
    }
}
console.log(checkOddOrEven(10));
console.log(checkOddOrEven(15));
//*BigInt
//? BigInts are a built-in  data type in TypeScript that allows for whole numbers larger than what can be stored in a regular Number datatype.
//?BigInt literals are written by appending the n suffix to an integer literal.
//?In JS we can't read the whole numbers beyond 2 raise to power 53.
var maxNumber = 9007199254740991n;
console.log(maxNumber);
var anotherBigNumber = BigInt("9007199254740991");
console.log(anotherBigNumber);
var sum2 = maxNumber + anotherBigNumber;
console.log(sum2);
var maxNum = Number.MAX_SAFE_INTEGER;
