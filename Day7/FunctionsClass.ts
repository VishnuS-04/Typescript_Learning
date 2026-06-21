// Named Functions: A function that is declared with a name

// Example_1: Named functions with no parameter and no return type
console.log("**********Named Functions*********")
function display():void {
    console.log("Functions Class");
}
display();      //Calling function/Invoking function

// Example_2: Named functions with parameter and return type
function addNumbers(x:number, y:number):number {
    return x+y;
}
console.log(`The addition number is`, addNumbers(5,10));

// Example_3: Named functions with rest parameter
// Rest parameters don't restirct the number of values that you can pass to a function
function multiNumbers(...num:number[]) {         //num is variable name
    let i;
    let sum:number = 0;
    for(i=0; i<num.length; i++) {
        sum = sum + num[i];
    }
    console.log(`Sum of the number is`, sum);
}
multiNumbers(10,20,50)

// Example_4: Named functions rest parameter - Multiple types
function findElements(...elements:(number | string)[]):number {
    return elements.length;
}
console.log(`The total count of elements is`, findElements(4,"Vishnu",8,"S",2001));

// Example_5: Named functions with optional parameter - Syntax is(?)
function empDetails(id:number, name:string, role?:string):void {
    console.log(`Employee Number is`, id);
    console.log(`Employee Name is`, name);
    console.log(`Employee Role is`, role);
    if(role!=undefined) {
        console.log(`Employee Role is`, role);
    }
}
empDetails(100, "Vishnu", "Tester");
empDetails(500, "VishnuS");

// Example_6: Named functions with default parameter
function totalAmount(price:number, discount:number = 0.50) {
    let totalAmt = price*discount;
    console.log(`Total Price is`, totalAmt)
}
totalAmount(1000,0.10);     //Current value will be executed
totalAmount(5000);          //Default value will be executed

// Anonymous Functions (Unnamed Functions/Nameless Function)
// An anonymous function is a that does not have a name.
// Instead, it is assigned to a variable, which acts as itms name.

// Example_1: Anonymous Function without parameter
console.log("**********Anonymous Functions**********")
let msgDisplay = function():string {
    return "Hello Vishnu";
}
console.log(msgDisplay());

// Example_2: Anonymous Function with parameter
let substract = function(a:number, b:number):number {
    return a-b;    
}
console.log(substract(10,20));

// Arrow/Lambda Functions
/* Lambda refers to anonymous functions in programming.
Lambda functions are a concise mechanism to represent anonymous functions.
These functions are also called as Arrow functions.
There are 3 parts to a Lambda function.
    1. Parameters – A function may optionally have parameters
    2. The fat arrow notation/lambda notation (=>) – It is also called as the goes to operator
    3. Statements – represent the functions instruction set */

// Example_1: Arrow Functions with no parameter and no return type
let msg = ():void => {
    console.log("Hey Vishnu");
}
msg();

// Example_2: Arrow Functions with parameter and return type
let add = (a:number, b:number):number => {
    return a+b;
}
console.log(`The output is`, add(10,60));

// Example_3: Arrow Functions with implicit return
// If the function have single return statement then the return and curly braces{} is optional
let plus = (a:number, b:number):number => a+b;
console.log(plus(10,20));

// Example_4: Arrow Functions with optional parameter
let details=(id:number, name:string, role?:string):void => {
    console.log(`Employee Number is`, id);
    console.log(`Employee Name is`, name);
    console.log(`Employee Role is`, role);
    if(role!=undefined) {
        console.log(`Employee Role is`, role);
    }
}
empDetails(100, "Vishnu", "Tester");
empDetails(500, "VishnuS");

// Example_5: Arrow Functions with default parameter
let totalPrice = (price:number, discount:number = 0.50) => {
    let totalAmt = price*discount;
    console.log(`Total Price is`, totalAmt)
}
totalAmount(1000,0.10);     //Current value will be executed
totalAmount(5000);          //Default value will be executed

// Example:6 Arrow Functions with rest parameter
let multiNums = (...num:number[]) => {         //num is variable name
    let i;
    let sum:number = 0;
    for(i=0; i<num.length; i++) {
        sum = sum + num[i];
    }
    console.log(`Sum of the number is`, sum);
}
multiNumbers(10,20,50)

// Example_7: Arrow Functions rest parameter - Multiple types
let findElemts = (...elements:(number | string)[]):number => {
    return elements.length;
}
console.log(`The total count of elements is`, findElemts(4,"Vishnu",8,"S",2001));