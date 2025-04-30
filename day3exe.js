//Function Types Demo
function greetDeclar(name){
    return `Hello ${name}`;
}

const greetExpr = function(name){
    return `Hello ${name}`;
}   

const greetArrow = (name) => `Hello ${name}`;

console.log(greetDeclar("Max"));
console.log(greetExpr("Ben"));
console.log(greetArrow("Gwen"));


//  Default Parameters & Scope Demo
const message = "Hello World!"; 

const showMsg = (text = "Default Message") => {
    const message = "Local Message" + text;
    console.log(message);
};

showMsg();
showMsg("React");
console.log(message); 

//  Closure Demo (React State Preview)
const createCounter = () => {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    };
};

const counter = createCounter();
counter();
counter();