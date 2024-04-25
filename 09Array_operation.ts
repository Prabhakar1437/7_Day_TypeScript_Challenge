const fruits:string[] = ["apple", "orange","banana","mango"];
 
//(A) Adding elements to an array using push.

//  const newfruits=fruits.push("grapes");
// console.log(newfruits);

//(B)Removing elements from an array using pop.

// const newfruits1=fruits.pop();
// console.log(newfruits1);


//Iteration over elements

//(A) Using for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//(B) Using for of  loop

for(let fruit of fruits){
    console.log(fruit);
}
//(C) Using forEach loop
fruits.forEach(fruit=>{
    console.log(fruit);
})