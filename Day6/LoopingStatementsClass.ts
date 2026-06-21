// while loop: A while loop executes as long as the condition is true
// Print even numbers 1...10
console.log("**********While Loop**********")
let i:number = 2;
while(i<=10) {
    if(i%2==0) {
    console.log(i);
    }
     i++;
}

// Print odd numbers 1...10
i = 3;
while(i<=10) {
    console.log(i);
    i+=2;   //i=i+2;
}

// Print numbers 10...1
i = 10;
while(i>=1) {
    console.log(i);
    i--;
}

// do while loop: A do-while loop always executes at least once before checking the condition.
// Print numbers 10...1
console.log("**********Do-while Loop**********")
let a = 10;
do {
    console.log(a);
    a--;
}while(a>=1)

// for loop: A for loop is typically used when the number iterations is known beforehand.
// Print odd numbers 1...10
console.log("**********For Loop**********")
for(let f=1; f<=10; f+=2) {
    console.log(f);
}

// Print odd numbers in 10...1
for(let f=10; f>=1; f--) {
    if(f%2!==0) {
        console.log(f)
    }
}

// Break: To stop a loop early
for(let b=1; b<=10; b++) {
    // console.log(b);     We can use in that line also
    if(b==5) {
        break;         // Once the 5 number will be loop, then the loop will be break
    }
    console.log(b)
}

// Continue: To skip an iteration and proceed to the next one
for(let c=1; c<=10; c++) {
    // console.log(c);      We can use in that line also
    if(c==3 || c==5 || c==7 || c==9) {
        continue;
    }
    console.log(c);
}