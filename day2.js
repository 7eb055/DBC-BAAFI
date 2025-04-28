//control FLOW
// 1. if else statement
let age =18;
if (age >= 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}

// ternary operator
let T_age = age = 16;
let result = (T_age >= 18) ? "You are an adult." : "You are A minor.";
console.log(result);

//if else if statement
let score = 85;
if (score >= 90) {
    console.log("Grade: Awesome!");
}
else if (score >= 80) {
    console.log("Grade: Bold!");
}
else if (score >= 70) { 
    console.log("Grade: Caution");
}
else if (score >= 60) {
    console.log("Grade: Dissmal!");
}
else {
    console.log("Grade: Fraud!");
}

//Ternary operator
let T_score = 75;
let T_result = (T_score >= 90) ? "Grade: Awesome!" :
    (T_score >= 80) ? "Grade: Bold!" :
    (T_score >= 70) ? "Grade: Caution" :
    (T_score >= 60) ? "Grade: Dissmal!" : "Grade: Fraud!";
console.log(T_result);

//for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let mIXED = [1,2,5,'hello',true,2.5];
for (let i = 0; i < mIXED.length; i++) {
    console.log(mIXED[i]);
}

//while loop
let b = 0;
while (b <= 10) {
    console.log(b);
    b++;
}

let subscription =true;
while (subscription) {
    console.log("You are subscribed ");
   
    subscription = false;
}
for (;subscription; subscription = false) {
    console.log("You are subscribed ");
    
}


//do while loop

