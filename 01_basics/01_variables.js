const accountId = 14453
let accountEmail = "somjena@gmail.com"
var accountPassword = "2255"
accountCity = "Baleswar"
let accountState =  "Active"

// accountId = 2 // Not allowed to change
accountEmail = "Rintu@gmail.com"
accountPassword = "9238"
accountCity = "jaleswar"
accountState = "Deactivate"

console.log(accountId);

/* 
prefer Not to use var because of issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountCity,accountState])