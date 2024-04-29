//*Generic in TypeScript allow you to create reusable components or functions that can work with multiple data types.

// function logAndReturn(value:number | string){
//     console.log(value);
//     return value;
// }

// const numberResult:string|number = logAndReturn(42);

// const stringResult:string|number = logAndReturn("Hello");



// console.log(numberResult);

// console.log(stringResult);



function logAndReturn<T>(value:T):T{
    console.log(value);
    return value;
}

const numberResult:string|number = logAndReturn<number>(42);

const stringResult:string|number = logAndReturn<string>("Hello");

const booleanResult:boolean = logAndReturn<boolean>(true);



console.log(numberResult);

console.log(stringResult);

