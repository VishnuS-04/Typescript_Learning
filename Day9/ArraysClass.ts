/*
    -An array is a special type of variable that stores multiple values.
    -The values can be of the same data type or different data types.
    -Arrays are declared using `[]` or generic `Array<T>` type.
    -Indexing starts from 0.
    -Arrays are an ordered collection of elements.
*/

// Approach 1: using leteral
let names:string[]=[];   //Declaration
// Initilization/Assigning values
names[0] = "Vishnu";
names[1] = "Vishnu. S";
names[2] = "S. Vishnu";
console.log("One by one output values", names);

let outputs:string[]=["Vishnu", "Vishnu. S", "S. Vishnu"];  //declaration+initilization
console.log("Single line output values", outputs);

// Approach 2: using generic type (Array<T>)
let empIDs:Array<number>=[100, 101, 102];
let empNames: Array<string>=["Vishnu", "Vishnu. S", "S. Vishnu"];
let data:Array<number | string>=[100, "Vishnu", 102, "Vishnu. S", 103, "S. Vishnu"];
let empDetails:Array<any>=[100, "Vishnu", false, 101, "Vishnu. S", true]
console.log("Basic output - ", empIDs);
console.log("Get specific data - ", data[1]);

// Example_1: Iterating over an array using a traditional for loop
for(let i=0; i<empDetails.length; i++) {        //or use i<=empDetails.length-1
    console.log("Get the values in one by one", empDetails[i]);
}

// Example_2: Iterating using the for...in loop (It gives you the index value inside the array)
for(let i in empNames) {
    console.log("Get the values in one by one", empNames[i]);
}

// Example_3: Iterating using the for...of loop (It gives you the actual value inside the array)
for(let value of empIDs) {
    console.log("Get the values in one by one", value);
}

// Example_4: Passing an array to the function
// Search an element in a array using funtion
function search(num1:number, num2:number[]):boolean {
    for(let i=0; i<num2.length; i++) {
        if(num2[i]==num1) {
            return true;
        }
    }
    return false;
}
let num2:number[] = [10,20,30,40,50];
console.log("Is there two numbers are equal?", search(10,num2));
console.log("Is there two numbers are equal?", search(100,num2));

// Example_5: A functions takes an array and return as array
function persons(names:string[]): string[] {
    let result:string[]=[];
    for(let i=0; i<names.length; i++) {
        result[i] = names[i].toUpperCase();
    }
    return result;
}
let personNames:string[] = ["Vishnu", "vishnu. s", "s. ViShNu"];
console.log(persons(personNames));

/*
 * Tuples in TypeScript:
 * A tuple is a fixed-length array where each element has a specific type.
 * It helps in storing multiple fields of different data types together.
 */

// Example_1: Tuple with 2 values of string, number
let person:[string,number]=["Vishnu",50];
console.log(person[0]);
console.log(person[1]);
console.log(person);

// Example_2: Tuple with multiple values
let user:[number,string,boolean,number,string]=[10,"Vishnu", true,101,"welcome"];
console.log(user);

// Example_3: Iterating over a tuple using a traditional for loop
for(let i=0; i<user.length; i++) {
    console.log(user[i]);
}

// Example_4: Iterating over a tuple using a for...in loop
for(let i in user) {
    console.log(user[i]);
}

// Example_5: Iterating over a tuple using a for...of loop
for(let value of user) {
    console.log(value);
}

// Example_6: Tuple array (Array of tuples)
let students:[number, string][]=[[10, "Vishnu"], [20, "Vish"], [50, "Vishnu. S"]];
console.log(students.length);
console.log(students);
console.log(students[0]);

let tp = students[0];
console.log(tp[0]); // 10
console.log(tp[1]); // Vishnu