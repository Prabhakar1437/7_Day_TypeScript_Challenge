//?Union types allow you to specify that a variable can hold values of multiple types. You use the /(pipe) symbol to define a union type.In
//*In TypeScript, when using a union type, It is essential to ensure that at least one of the types in the union includes all the required properties.Failure to do so will result in a type error during compilation.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var inputValue = function (value) { };
var userInput = function (value) {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error('Invalid Input');
    }
};
console.log(userInput(10));
var employeeDetails = {
    name: 'John',
    age: 34,
    emp_id: 5678,
    department: "IT"
};
var myPersonalInfo = {
    name: 'Prabhakar',
    age: 25
};
var user = {
    name: 'Prabhakar',
    age: 25
};
var location1 = {
    city: 'Begusarai',
    country: 'India'
};
var createUserProfile = function (user, location1) {
    // return `my name is ${user.name} and my location is ${location1.city}`;
    return __assign(__assign({}, user), location1);
};
var myCompleteInfo = createUserProfile(user, location1);
console.log(myCompleteInfo);
