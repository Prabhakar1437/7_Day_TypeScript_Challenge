//?          /Parent Class /Child Class /Outside Class/

//? public   /✅           /✅         /✅          /
//?Protected/✅           /✅       /❌             /
//?Private  /✅            /❌      /❌              /



// class Persons3 {
//     constructor(

//         public name: string ,
//         public age: number,
//         protected hobbies:string[]
//     ){}
   
//    introducesParent():string{
//        return `Hi, I am ${this.name} and I am ${this.age} 
//        years old. I love ${this.hobbies.join(",")}`;
//    }

// }

// class Students2 extends Persons3{
   
//    constructor(
//     name:string,
//     age:number,
//     hobbies:string[], 
//     public grade:number){
//        super(name,age,hobbies);
       
//    }
//    introduces():string[]{
//        //return ` ${super.introduces()}.I am in grade ${this.grade}`;
//        return this.hobbies;

//    }
// }
// // the below code fragment can be found in:
// const persons9:Persons3  = new Persons3("John",30,[ "Reading","Writing" ]);

// // const persons8:Persons2 =  new Persons1("Jo",56,[ "Reading","Writing" ]);

// console.log(persons9.introducesParent());

// const Student2:Students2=  new Students2(
//    "Vats",
//    30,
//    [ "Reading","Writing" ],
//    10);

// console.log(Student2.introduces());

