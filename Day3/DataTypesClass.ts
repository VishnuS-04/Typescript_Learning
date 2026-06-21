/* 
1) Premitive Data Types(Built in) - Stored only one data
    1) Number
    2) String
    3) Boolean
    4) Null
    5) Undefined
    6) Any
    7) Union Type
    8) Void

2) Non-Premitive Data Types(Objects) - Stored more than one data
Array   Class   Function    Interface   Touple  etc...
*/
// 1) Number Type
// Represents both integers and floating-point numbers
let price:number = 255.5;
let total:number = 10000;
let balance:number = 9744.5;
console.log(typeof total);
console.log("I have" , total , "amount, but the price is" , price , "amount, so my remaining amount is" , balance);

// 2) String Type
// Represents textual data
/* 
1) SingleQuote (' ')
2) DoubleQuote (" ")
3) Backtick (` `)
*/
const initial:string = "S";
const fullName:string = 'Vishnu';
let greetings:string = `Hello ${initial} ${fullName}`;
console.log(greetings);

// 3) Boolean Type
// Represents true/false values
let correct:boolean = true;
let wrong:boolean = false;
console.log("Is Narendra Modi is current PM?" ,correct, "Is Jayalalitha is current CM?" ,wrong);

// 4) Null & Undefined Type
// Special types for absence of value
let emptyValue:null = null;
let notAssigned:undefined = undefined;
console.log("My pocket money is" ,emptyValue, "and my happy life is" ,notAssigned);

// 5) Any Type
// Losses Typescript benefits
let value:any = "ABC";
console.log(typeof (value));    //() is optional
value = 123;
console.log(typeof value);
value = true;
console.log(typeof value)
console.log(value);

// 6) Union Type
// Combine multiple types
let id:string | number | boolean
id = "ABC";
console.log(id);
id = 123;
console.log(id);
id = true;
console.log(id);

// Void Type
// Uses for function that don't return anything
function test():void    //void is not mandatory
{
    console.log("Test run");
}
test();