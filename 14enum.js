//*Enums in TS
//?Enum in Typescript are commonly used when you want to represent a set of related values and choose one value from multiple options. Enum provide a convenient way to define a set of named values and associate them with a specific meanings.
// * In TypeScript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default numeric value for the first enum constant is 0, and subsequent enum constants receive values incremented by 1.
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var loginDetails = {
    username: "Prabhakar",
    password: "1234567890",
    email: "prabhakar@gmail.com",
    phone: "+91 9876543210",
    address: "Noida",
    role: Roles.admin
};
var loginDetails1 = {
    username: "Prabhakar",
    password: "1234567890",
    email: "prabhakar@gmail.com",
    phone: "+91 9876543210",
    address: "Noida",
    role: Roles.user
};
var isAdmin = function (loginDetails1) {
    var username = loginDetails1.username, role = loginDetails1.role;
    return role === 'admin' ? "Welcome Admin ".concat(username) : "Welcome User ".concat(username, " is not allow to edit the website");
};
console.log(isAdmin(loginDetails1));
