let scores = [90, 97, 83, 100, 93];
let newScores = [];

scores.map((eachScore) => {
 newScores.push(eachScore + 5)
});

 console.log(newScores)


 let passed = newScores.filter(score =>score >= 90);
 let npassed = scores.filter(score => {return score >= 90});

 console.log(passed)
 console.log(npassed)


 // for

// for (let i = 0; i < scores.length; i++) {
 //       console.log(scores[i] + 5)
 //}


//lab2

let student ={name : "Emmas",
     age: 20,
      grade: "A", 
    subjects: ["Math", "Visual" ]};

    const {name, grade} = student;
    console.log(name, grade);

    let profile = {...student, school: "MatysSHS"};

    console.log(profile);

    