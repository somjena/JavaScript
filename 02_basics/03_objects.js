// singleton 

//object literals

let Mysym = Symbol("Religion")

const jsUser = {
    name: "Soumitra",
    "FullName": "Soumitra Kumar Jena",
    [Mysym]: "Hindu",
    age: 24,
    location: "Jaleswar",
    email: "jenasoumitra@gmal.com",
    isLoggedIn: true,
    LastLoginDays: ["Monday", "Tuesday"]
}

//console.log(jsUser.email);
//console.log(jsUser["FullName"]);
//console.log(jsUser[Mysym]);

//Acess object

jsUser.email = "som@gmaiil.com"
//Object.freeze(jsUser)
jsUser.email = "som@github@gmail.com"

//console.log(jsUser);

jsUser.greeting = function name(params) {
    console.log("Hello Js User");
}


jsUser.greetingTwo = function(){
    console.log(`Hello My Dear Friend, ${this.FullName}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());