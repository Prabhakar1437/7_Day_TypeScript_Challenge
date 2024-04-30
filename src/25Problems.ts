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
    private _celsius:number =0;

    public get celsius():number {
        return this._celsius;
    }

    public set celsius(newCelsius: number) {
        this._celsius = newCelsius;
    }

    public get fahrenheit():number {
        return this._celsius * 9 / 5 + 32;
    }
    
    public set fahrenheit(newFahrenheit: number) {
        this._celsius = (newFahrenheit - 32) *  5 / 9;
    }
}

const temperature = new Temperature();
temperature.celsius = 25;
console.log(`The temperature in Fahrenheit is ${temperature.fahrenheit}`); 