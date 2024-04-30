//****************************** 
//* INTERFACE VS TYPE
//******************************

// 1:
//* Use custom types when you need unions , intersections, or mapped types.
//*Use interface when defining object shapes or class that adhere to a contract.

// 2:
//* Interface can extended other interfaces to inherit their members.
//*Custom types can use unions and intersections for more complex type compositions.

//*same Interface name treated as one


// type Stud = {
//     name: string;
//     age: number;
// }
// type StudAddr = {
//     city: string;
//     state: string;
// }

// type Data = Stud & StudAddr;

// const BioData:Data = {
//     name:'Prabhakar',
//     age:25,
//     city:"Begusarai",
//     state:'Bihar'
// }

// console.log(BioData);


interface Stud  {
        name: string;
        age: number;
    }
interface StudArr {
        city: string;
        state: string;
    }
    
interface Data extends Stud ,StudArr{};
class BioData implements Data {
    constructor(
        public name: string,
        public age: number,
        public city: string,
        public state: string,
    ){}
    
    }

    const Std1 = new BioData('Prabhakar', 25, 'Begusarai','Bihar');
    
    console.log(Std1);





