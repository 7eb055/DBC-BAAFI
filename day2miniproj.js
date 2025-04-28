let numbers = [12, -5, 20, 7, -3, 15, 8];

const analyze ={
    posCount: 0,
    evenSum: 0,
    maxNum: numbers[0],
};

for (const num of numbers) {
    if (num > 0) {
        analyze.posCount++;
    }
    if (num % 2 === 0) {
        analyze.evenSum += num;
    }
    if (num > analyze.maxNum) {
        analyze.maxNum = num;
    }
}
console.log(analyze.posCount);
console.log(analyze.evenSum);   
console.log(analyze.maxNum);