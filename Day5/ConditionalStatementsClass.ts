// if Condition
let compare = 50;
if(compare>5) {
    console.log("High value");
}

// if else Condition
let num = 25;
if(num%2 ==0) {
    console.log(`${num} is a Even Number`);
}
else {
    console.log(`${num} is a Odd Number`);
}

// Nested if else Condition
let mark:number = 34;
if(mark >= 85 && mark <= 100) {
    console.log("The studend gets A rank");
}
else if(mark >= 70 && mark <=84) {
    console.log("The student gets B rank");
}
else if(mark >= 35 && mark <= 69) {
    console.log("The student gets C rank");
}
else {
    console.log("The student has failed");
}

// Switch case Condition
let day:number = 10;
switch(day) {
    case 1:
        console.log(`${day}'st day is Monday`);
        break;
    case 2:
        console.log(`${day}'nd day is Tuesday`);
        break;
    case 3:
        console.log(`${day}'rd day is Wednesday`);
        break;
    case 4:
        console.log(`${day}'th day is Thursday`);
        break;
    case 5:
        console.log(`${day}'th day is Friday`);
        break;
    case 6:
        console.log(`${day}'th day is Saturday`);
        break;
    case 7:
        console.log(`${day}'th day is Sunday`);
        break;
    default:
        console.log(`${day} is the Invalid Week`);
}