const pass_student = ["soumitra","Shrabana","Abhisek"]
const fail_student = ["Rahul","Shatish","Hrudesh"]

//pass_student.push(fail_student)

//console.log(pass_student);

// const allstdnt = pass_student.concat(fail_student)
//console.log(allstdnt);

//Spread Method
const allpfstudent = [...pass_student, ...pass_student]
//console.log(allpfstudent);
//Flat Method
const new_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array = new_array.flat(Infinity)

console.log(real_array);

//Convert Array
console.log(Array.isArray("Soumitra"));
console.log(Array.from("Soumitra"));
console.log(Array.from({name :"Soumitra"})); // intresting


//Convert into Array from multiple variable

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


