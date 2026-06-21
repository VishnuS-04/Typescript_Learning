// 1. forEach() - Executes a function once for each array element
// It Takes function as a parameter

// Syntax: array.forEach(function(currentValue, index, array){})
// currentValue - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array (optional) - The array the current element belongs to.

// Example_1: Get index of all the fruits along with value
let fruits:string[] = ["Mango", "Banana", "Orange", "Grapes", "Apple"];
console.log("**********Using for...in loop**********");
for(let i in fruits){
    console.log(i, fruits[i]);
}
console.log("**********Using forEach method**********");
fruits.forEach(function(fruitNames, indexId) {
    console.log(indexId, fruitNames);
})

// Example_2: Display the fruits names in uppercase
fruits.forEach((fruitNames)=> {
    console.log(fruitNames.toUpperCase());
})

// map() - Creates a new array with the result of calling the function on every element of an array.
// It takes function is a parameter.
// Return the same number of elements that we have in original array.

// Example_1: Double each numbers[1,2,3,4,5] --> [2,4,6,8,10]
let numbers:number[] = [1,2,3,4,5];
let doubleNumber:number[] = numbers.map(function(a){
    return (a+a);
})
console.log("Output of Double each number", doubleNumber);

// filter() - Create a new array with all the elements that pass/satisfy the function
// It takes function as a parameter
// Returns either same or fewer number of elements compared to original array

// Example_1: Get the only numbers greater than 3 from an array
let greaterNum:number[] = numbers.filter((num)=> {
    return (num>3);
})
console.log("Output of greater than three number", greaterNum);

// reduce() - Applies a function on every element of an array and retunrs a single value
// accumulator - The accumulated value from previous iteration
// currentValue - The current element being processed

// Example_1: Get the total of all elements in an array
let reduceOutput = numbers.reduce((total,num)=> {
    return (total+num);
})
console.log