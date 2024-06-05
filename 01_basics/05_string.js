const name = "Soumitra Kumar Jena"
const Repocount = 50

//Outdated Syntax 
//console.log(name + Repocount + "Value");


//New Syntax  (String Interpolation)
//console.log(`My Name Is ${name} and My Total Repositries in Github Is ${Repocount}`);

const GameName = new String ('somclub')
//console.log(GameName[3]);

console.log(GameName.length);
console.log(GameName.toUpperCase());

const NewString = GameName.substring(0,7)
console.log(NewString);


const anotherString = GameName.slice(-6,2)
console.log(anotherString)


const newStringOne = "        som jena         "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://hitesh.com"