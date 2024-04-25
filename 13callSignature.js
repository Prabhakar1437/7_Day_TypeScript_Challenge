//*The function call signature refers to the declaration or definition of a function, which includes the function's name , parameters, and return type.It defines the structure and type information of  a function without including the function's implementation or body.
var student = {
    name: "John Doe",
    age: 25,
    rollNo: 101,
    greet: (function (country) { return "Hello! I am from ".concat(country, "."); })
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age, rollNo = student1.rollNo;
    return "Hello! My Name is ".concat(name, ". I am ").concat(age, " years old and Roll No is ").concat(rollNo);
};
console.log(introduction(student));
console.log(student.greet("India"));
