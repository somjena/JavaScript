alert("You Need to Enter Your Mark So i can Grade u some Award");
let mark =prompt("Enter Your Mark (Between  0 --- 100)")
let grade;
if(mark>=80 && mark<=100){
  grade="A";
}else if(mark>=70 && mark<=79){
  grade="B";
}else if(mark>=60 && mark<=69){
  grade="C";
}else if(mark>=50 && mark<=59){
  grade="D";
}else {
grade="F";
}

console.log("According to Your Mark Your Grade is ",grade);
