let Companies = ["BloomBerg","Microsoft","Uber","Google","IBM","Netflix"]
Companies.shift();
console.log(`After Removing the First Company ${Companies}`);

//Add Ola in the Position of Uber
Companies.splice(1,1,"Ola");
console.log(`After replace of The Uber we Plaaced Ola ${Companies}`);

//Add Amazon At the End Of the Array 

Companies.push("Amazon");
console.log(`After Adding Amazon At the Last the result Array Will Be ${Companies}`);


