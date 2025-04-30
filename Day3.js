// function declaration
function add (){
    let a = 5;
    let b = 10;
    return a + b;
}
console.log(add());

function paramAdd(num1, num2){
   
    let a = num1;
    let b = num2;
    return a + b;

}
console.log(paramAdd(25, 32));

let sub = function (num1 =10, num2=12){
    let a = num1;
    let b = num2;
    return a - b;
}
console.log(sub(20, 10));



function  greeting(name){
    return `Hello ${name}`;

}

console.log(greeting('John'));

const addArrow = (num1, num2) => {
    let a = num1;
    let b = num2;
    return a + b;
}
console.log(addArrow(11,44));


//closures

function outerFunction() {
    let outerVariable = "I am OUTS1DE!";
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}       

const myinnerFunction = outerFunction();
myinnerFunction();

//console.log(outerFunction()); is an error -2                


let myEven = []
//push 
function evenNumbers(limit){
    for (let i = 0; i <= limit; i++){
        if (i % 2 === 0){
            myEven.push(i);
        }
    }
    return myEven;
}
evenNumbers(10);
console.log(myEven);