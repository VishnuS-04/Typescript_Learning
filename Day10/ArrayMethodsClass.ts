let numbers:number[]=[1,2,3,4];
let fruits:string[]=["Orange", "Grapes", "Banana", "Apple"];
console.log("The output of numbers are", numbers);
console.log("The output of fruits are", fruits);

// Length - Attribute (Not a method)
console.log("The length of numbers are", numbers.length);
console.log("The length of fruits are", fruits.length);

// Push() - Add single/multiple elements to the end of an array
numbers.push(5,6);
fruits.push("Watermelon", "Papaya");
console.log("After push, the numbers outputs are", numbers);
console.log("After push, the fruits outputs are", fruits);

// Pop() - Remove the last elements from an array
numbers.pop();
fruits.pop();
console.log("After pop, the numbers outputs are", numbers);
console.log("After pop, the fruits outputs are", fruits);

// Shift() - Remove the first elements from an array
numbers.shift();
fruits.shift();
console.log("After shift, the numbers outputs are", numbers);
console.log("After shift, the fruits outputs are", fruits);

// Unshift() - Add single/multiple elements to the first of an array
numbers.unshift(0);
fruits.unshift("Mango");
console.log("After unshift, the numbers outputs are", numbers);
console.log("After unshift, the fruits outputs are", fruits);

// Concat() - Combines two or more arrays of same type
let numConcat = numbers.concat([7,9], [10]);
let fruitConcat = fruits.concat(["Kiwi"]);
console.log("After concat, the numbers outputs are", numConcat);
console.log("After concat, the fruits outputs are", fruitConcat);

// Slice() - Extracts a section of an array
// Starting index starts from zero
// Ending index will be exclussive. Example: If 3 is an ending index it will consider 2 (3-1=2)
let extractNumber = numbers.slice(1,3);
let extractFruits = fruits.slice(2,6);
console.log("After slice, the numbers outputs are", extractNumber);
console.log("After slice, the fruits outputs are", extractFruits);

// Splice() - Add/Remove elements from an array(from everywhere)
console.log("Current values of numbers are", numbers);
console.log("Current values of fruits are", fruits);

// Ex_1: Remove
let removeFruits = fruits.splice(1,2);
console.log("After splice, the fruits outputs are", fruits);
console.log("Removed elements are", removeFruits);

// Ex_2: Added
numbers.splice(1,0,11,12);
console.log("After splice, the numbers outputs are", numbers);

// Ex_3: Remove & Added
fruits.splice(1,1,"Cherry");
console.log("After splice, the fruits outputs are", fruits);

// Indexof() - Finds the index of an element, if element not found them return -1
// Ex_1
let numberIndex = numbers.indexOf(2);
console.log("The index of given number is", numberIndex);

// Ex_2
let fruitIndex = fruits.indexOf("Apple");
console.log("The index of given fruit is", fruitIndex);

// Ex_3
numberIndex = numbers.indexOf(2,1);     //1 means starting index
console.log("The index of given number is,", numberIndex);

// Include() - Checks if an element exists(True or False)
let isNumberExist = numbers.includes(1);
let isFruitExist = fruits.includes("Watermelon", 1)
console.log("Is there enter value is available?", isNumberExist);
console.log("Is there enter fruit is available?", isFruitExist);

// Tostring() - Converts array to string
let numToString = numbers.toString();
console.log("After converted array to string", numToString);

let newArray:string[] = ["H","E","L","L","O"];
console.log("Before converting array to string", newArray);
let arrayString = newArray.toString();
console.log("After converted to array to string", arrayString);