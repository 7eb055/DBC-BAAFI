    // Lab exercises go here
    //Exercise 1: If Statements for Grading
    let score = 88;
    let grade = score >= 90 ? 'A' :
    score >= 80 ? 'B' :
    score >= 70 ? 'C' :
                 'F';
    console.log(grade);

    //Exercise 2: For Loop with Arrays

let number = [10, 15, 20, 25, 30];
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 5 === 0) {
            console.log(number[i] );
        }
    }

    number.forEach(function(num) {
        if (num % 5 === 0) {
            console.log(num);
        }
    });


    //While Loop Countdown
let count = 10;
while (count > 0) {
    console.log(count);

    if (count === 5) {
        console.log("STOPPEX EARLY!");
        break
    }
    count--;
}

for (let i = 10; i > 0; i--) {
    console.log(i);
    if (i === 5) {
        console.log("STOPPEx EARLY!");
        break;
    }
}