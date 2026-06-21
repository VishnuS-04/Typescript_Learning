
// Variable : Container which can store some data.

// Variables = var  let  const

/* 
   Syntax = keyWord variableName : datatype (Optional) = value;
   Ex1    = var age:number = 10;
   Ex2    = var age = 10;
*/

// var vs let vs const
// --------Difference of five different factors---------
/*
1) Scope
2) Declaration/Value Assignment
3) Re-declaration
4) Re-initialization/Re-assignment
5) Hoisting
*/

// var - We do not use this in Modern JS/TS. Avoid var because it has function scope and can lead to unexpected issues.
// let - Use let when you need a variable that can change.
// const - Use const when the variable value should not change.

// 1) Scope = Accessible area (Functional Scope (var) & Block Scope (let, const))
// Example_1 : var (Functional Scope)

function functionScope()
{
    if(true)
    {
        var msg1 = "Hey var";
        console.log(msg1);
    }
    console.log(msg1);      // It will accessible in both block and fucntion
}
functionScope();

// Example_2 : let, const (Block Scope)

function blockScope()
{
    if(true)
    {
        let msg2 = "Hey let";
        const msg3 = "Hey const";
        console.log(msg2);
        console.log(msg3);
    }
    // console.log(msg2);          //It will not accessible in function
    // console.log(msg3);          //It will not accessible in function
}
blockScope();

// 2) Declaration/Value Assignment

// Example_1 : var can be declared without initialization
var v;  //declaration
console.log("The Output of v value is " + v);     //The output will be "undefined"
v = 10; //initialization
console.log("The Output of v value is " + v);

// Example_2 : let can be declared without initialization
let l;  //declaration
console.log("The Output of l value is " + l);     //The output will be "undefined"
l = 10;
console.log("The Output of l value is " + l);

// Example_3 : const must be initialized at the time of declaration
// const c;  //incorrect, the output will be error message
const c = 10;
console.log("The Output of c value is " + c);

// 3) Re-declaration
// Example_1 : var allows the Re-declaration
var userName = "S.Vishnu";
var userName = "Vishnu.S";
console.log("My Name is " + userName);

// Example_2 : let & const not allows the Re-declaration
/* 
let age = 24;
let age = 25;
console.log(age);
const city = "Tirunelveli";
const city = "Nellai";
console.log(city);
*/

// 4) Re-initialization/Re-assignment
// Example_1 : var & let allows re-assignment
var num = 123;
num = 321;
console.log(num);
let alpha = "abc";
alpha = "cba";
console.log(alpha);

// Example_2 : const not allows re-assignment
/* const language = "Tamil";
language = "English";   //Not allowed
console.log(language); */

// 5) Hoisting
// Example_1 : var (Hoisted with undefined)
/* console.log(x); //undefined
var x = 10;
console.log(x); */

// Example : let & const (Not intialized)
/* console.log(y);
let y = 10;
console.log(y);

console.log(z);
const z = 10;
console.log(z); */