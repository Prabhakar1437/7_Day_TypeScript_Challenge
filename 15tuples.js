//?In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference:the types of elements in tuple are fixed and declared at the time of creation ,whereas arrays can hold elements of the same type, and their size can vary.
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name:".concat(name, " ,is ").concat(age, " years old. ").concat(hasDriverLicense ? 'Has' : 'Does not have', " a driver's license."));
};
var personInfo = ["Prabhakar", 25, true];
displayPersonInfo(personInfo);
