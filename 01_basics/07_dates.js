// Dates In JavaScript 

let MyDate = new Date ()
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toISOString());
console.log(MyDate.toJSON());
console.log(MyDate.toLocaleString());

// Print a Specific Date in JavaScript

let CreatedDate = new Date(2022, 0, 24)
console.log(CreatedDate.toDateString());

// Spicific Date A per DD/MM/YY format & MM/DD/YY
let formatdate = new Date("2023-02-12")
console.log(formatdate.toLocaleString());

// Timestamp 
let Timestamp = Date.now()
console.log(Timestamp);

let newDate = new Date()
console.log(newDate.getDay() + 1 );


