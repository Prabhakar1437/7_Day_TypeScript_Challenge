var fruits = ["apple", "orange", "banana", "mango"];
//(A) Adding elements to an array using push.
//  const newfruits=fruits.push("grapes");
// console.log(newfruits);
//(B)Removing elements from an array using pop.
// const newfruits1=fruits.pop();
// console.log(newfruits1);
//Iteration over elements
//(A) Using for loop
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//(B) Using for of  loop
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
//(C) Using forEach loop
fruits.forEach(function (fruit) {
    console.log(fruit);
});
