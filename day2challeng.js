// Task 1: Prime Number Finder
let limit = 20;
let primeNum = [];

for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeNum.push(num);
    }
}

primeNum.forEach(prime => console.log(prime));


//Task 2: Unique Character Counter
let text = "Hello, World!";
let counts = {};

text.toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .forEach(char => {
        counts[char] = (counts[char] || 0) + 1;
    });

    console.log(JSON.stringify(counts, null, 2));


//Task 3: FizzBuzz with Custom Rules
let rules = { 3: "Fizz", 5: "Buzz", 7: "Bang" };
let limit2 = 21;
Array.from({ length: limit }, (_, i) => i + 1)
    .forEach(num => {
        let output = '';
        Object.entries(rules).forEach(([divisor, label]) => {
            if (num % parseInt(divisor) === 0) {
                output += label;
            }
        });
        console.log(`${num}: ${output || num}`);
    });
