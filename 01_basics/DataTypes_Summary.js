// Primitive Type Of Data 

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const socre = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let UserEmail;


const Id = Symbol('123')
const AnotherId = Symbol('123')

console.log(Id);
console.log(AnotherId);

console.log(Id === AnotherId);  //False

const bigNumber = 6371326214n

console.log(typeof bigNumber);

// Reference Type [Non Premitive]

 // Types: Array, Onjects, Functions

 const heros = ["SahktiMan","Nagraj","doga"];
 let myObj =
 {
    name:"som jena",
    age :22,
 }


 const MyFunction = function(){
    console.log("Hello World");
 }




 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

 //Stack (Primitive)   &       Heap (Non-Primitive)

 let MyWebsiteName = "som vlogs.in"
 let anotherwebsite = MyWebsiteName

 anotherwebsite = "soms world"

 console.log(MyWebsiteName);
 console.log(anotherwebsite);



 let UserOne = {
   email :"somjena@gmail.com",
   upi:"6371326214@ybl"
 }

 let UserTwo = UserOne
 UserOne.email = "Rintu@gmail.com"
UserOne.upi = "som@paytm"

 console.log(UserOne);
 console.log(UserTwo);