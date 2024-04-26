//?In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference:the types of elements in tuple are fixed and declared at the time of creation ,whereas arrays can hold elements of the same type, and their size can vary.



type PersonInfo =[string,number,boolean]


const displayPersonInfo:(person:PersonInfo)=>void = (person:PersonInfo): void => {
    const [name, age, hasDriverLicense] = person;
    console.log(`Name:${name} ,is ${age} years old. ${hasDriverLicense? 'Has' : 'Does not have'} a driver's license.`);
    
}

const personInfo:PersonInfo = ["Prabhakar",25,true];

displayPersonInfo(personInfo);

