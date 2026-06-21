let a:number = 50, b:number = 25;
// Arithmetic Operators
console.log("**********Arithmetic Operators**********")
console.log("The Output of addition value is" ,a+b);
console.log("The Output of subtraction value is" ,a-b);
console.log("The Output of multiplication value is" ,a*b);
console.log("The Output of division value is" ,a/b);
console.log("The Output of modulus value is" ,a%b);
console.log("The Output of exponentiation value is" ,a**b);

// Assignemnt Operators
a = 10; b = 5;
console.log("**********Assignment Operators**********")
console.log("The Output of addition value is" ,a+=b);          //Instead of a=a+b
console.log("The Output of subtraction value is" ,a-=b);       //Instead of a=a+b
console.log("The Output of multiplication value is" ,a*=b);    //Instead of a=a+b
console.log("The Output of division value is" ,a/=b);          //Instead of a=a+b
console.log("The Output of modulus value is" ,a%=b);           //Instead of a=a+b

// Relational/Comparision Operators
// Always returs boolean value
a = 10; b = 20;
console.log("**********Relational Operators**********")
console.log("The Output of a>b is" ,a>b);       //Greater than
console.log("The Output of a<b is" ,a<b);       //Less than
console.log("The Output of a>=b is" ,a>=b);     //Greater than or equal
console.log("The Output of a<=b is" ,a<=b);     //Less than or equal
console.log("The Output of a==b is" ,a==b);     //Equal
console.log("The Output of a!=b is" ,a!=b);     //Not equal
console.log("**********Difference between Equality & Strict Equality**********")
let num1:any = 5;       //Number type
let num2:any = "5"   //String type
console.log("The Output of num1==num2 is" ,num1==num2);      //Equal (It's compare only the values)
console.log("The Output of num1===num2 is" ,num1===num2);    //Strict equal (It's compare values & types)

// Logical Operators
// Works between boolean variables, and returns true/false
let b1 = true;
let b2 = false;
console.log("**********Logical Operators**********")
console.log("The Output of && is" ,b1 && b2);   //Both should be true
console.log("The Output of || is" ,b1 || b2);   //Any one should be true
console.log("The Output of ! is" ,b1);          //Opposite of value
console.log("The Output of ! is" ,b2);          //Opposite of value
console.log("**********Combination of Logical & Relational Operators**********")
console.log("The Output of && is" ,20>10 && 10>5);
console.log("The Output of || is" ,10<20 || 5>10);

// Increment & Decrement Operators
// x++ (Post Increment) it's work as x=x+1
// ++x (Pre Increment)
let x = 25;
console.log("**********Increment Operators**********")
console.log("The Ouptut of before post increment" ,x);
let increspost = x++;
console.log("The Output of after post increment" ,increspost);
console.log("The Output of after post increment x value" ,x);
let increspre = ++x;
console.log("The Output of after pre increment" ,increspre);
let decrespost = x--;
console.log("**********Decrement Operators**********")
console.log("The Output of after post decrement" ,decrespost);
console.log("The Output of after post decrement x value" ,x);
let decrespre = --x;
console.log("The Output of after pre increment" ,decrespre);

// Ternary/Conditional Operators
console.log("**********Ternary/Conditional Operators**********")
let votersAge = 10;
let result = (votersAge>=18) ? "Eligable" : "Not Eligable"
console.log("The respective person will be" ,result, "for vote.")