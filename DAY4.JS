let array = [1,2,3,4];
    array.push(6);
    console.log(array);

let obj ={num1:1,
        num2:3,
        num3:4
} 

obj.num4=5;
console.log(obj)



let mixed =[1,2,3,"hello",true];
mixed=[...mixed,15,20];

console.log(mixed);

let person = {name:"John", age:30};
    person= {...person, isMarried:true};
console.log(person);

//destructuring
//let newNum = mixed[0];
//let newNum2 = mixed[1];
//let newNum3 = mixed[2];
//let newString = mixed[3];

let [newNum, newNum2, newNum3, newString] = mixed;
console.log(newNum);
console.log(newNum2);
console.log(newNum3);   
console.log(newString);

let {name, age, isMarried} = person;
console.log(name, age);
