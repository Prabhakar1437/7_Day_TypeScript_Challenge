"use strict";
//?Bank Account Balance
// class BankAccount {
//     private _balance:number =0;
//     public get balance():number {
//         return this._balance;
//     }
//     public set balance(newBalance){
//         if(newBalance <0){
//             throw new Error("Invalid Balance");
//         }
//         this._balance = newBalance;
//     }
// }
// const bankAccount = new BankAccount();
// bankAccount.balance = 500;
// console.log(bankAccount.balance); // 500
//Temperature Converter
class Temperature {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    get fahrenheit() {
        return this._celsius * 9 / 5 + 32;
    }
    set fahrenheit(newFahrenheit) {
        this._celsius = (newFahrenheit - 32) * 5 / 9;
    }
}
const temperature = new Temperature();
temperature.celsius = 25;
console.log(`The temperature in Fahrenheit is ${temperature.fahrenheit}`);
