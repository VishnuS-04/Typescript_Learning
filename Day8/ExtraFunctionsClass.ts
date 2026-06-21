// Callback Functions - A function passed as an argument to another function and executed later

// Example_1
// Function that takes callback function as parameter
function fullName(firstName:string, callback:(lastName:string)=>void) {
    console.log(firstName);
    callback("Vishnu. S");
}
// Callback Function
function surName(lastName:string) {
    console.log(lastName);
}
// Calling the function by passing the callback function
fullName("Vishnu", surName);

// Overload Functions
 //step1: write a signatures of functions
 //step2: implement a function
 //step3: calling function

 //Example1: Different parameter Types(data types)
 function getInfo(id:number):string;
 function getInfo(name:string):string;

 function getInfo(param:number | string):string {
    if(typeof param === "number") {
        return(`User ID is ${param}`);
    }
    else {
        return(`User Name is ${param}`);
    }
 }
console.log(getInfo(1));
console.log(getInfo("Vishnu"));

// Example_2: Different number of parameter
function add(a:number, b:number):number;
function add(a:number, b:number, c:number):number;

function add(a:number, b:number, c?:number):number {
    if(c!==undefined) {
        return a+b+c;
    }
    else {
        return a+b;
    }
}
console.log("Two Number of total is", add(10,20));
console.log("Three Number of total is" ,add(10,20,50));

// Example_3: Different return types
function inputDetails(input:number): number;
function inputDetails(input:string): string;

function inputDetails(input:string | number): string | number {
    if(typeof input==="string") {
        return input.toUpperCase();
    }
    else {
        return input*5;
    }
}
console.log("The String input is", inputDetails("vishnu"));
console.log("The Number input is", inputDetails(10));

// Example_4:
function details(name:string):string;
function details(age:number):string;
function details(status:boolean):string;

function details(input:string | number | boolean):string {
    if(typeof input==="string") {
        return `I am ${input}`;
    }
    else if(typeof input==="number") {
        return `My age is ${input}`;
    }
    else {
        let marryStats:string = input?"Married":"Single";
        return `I am ${marryStats}`;
    }
}
console.log(details("Vishnu"));
console.log(details(24));
console.log(details(false));