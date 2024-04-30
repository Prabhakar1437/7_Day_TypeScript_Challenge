"use strict";
//****************************** 
//* INTERFACE VS TYPE
//******************************
;
class BioData {
    name;
    age;
    city;
    state;
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
const Std1 = new BioData('Prabhakar', 25, 'Begusarai', 'Bihar');
console.log(Std1);
