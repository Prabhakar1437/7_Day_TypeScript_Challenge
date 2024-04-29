//?          /Parent Class /Child Class /Outside Class/

//? public   /✅           /✅         /✅          /
//?Protected/✅           /✅       /❌             /
//?Private  /✅            /❌      /❌              /



class Persons2 {
     public name: string ;
    age: number;
    protected hobbies:string[];

    constructor(name:string,age:number,hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introducesParent():string{
        return `Hi, I am ${this.name} and I am ${this.age} 
        years old. I love ${this.hobbies.join(",")}`;
    }

}

class Students1 extends Persons2{
    grade : number;
    constructor(name:string,age:number,hobbies:string[],grade:number){
        super(name,age,hobbies);
        this.grade = grade;
    }
    introduces():string[]{
        //return ` ${super.introduces()}.I am in grade ${this.grade}`;
        return this.hobbies;

    }
}
    


// the below code fragment can be found in:
const persons7:Persons2  = new Persons2("John",30,[ "Reading","Writing" ]);

// const persons8:Persons2 =  new Persons1("Jo",56,[ "Reading","Writing" ]);

console.log(persons7.introducesParent());

const Student1:Students1=  new Students1(
    "Vats",
    30,
    [ "Reading","Writing" ],
    10);




console.log(Student1.introduces());

