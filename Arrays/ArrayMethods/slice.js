let nums = [1,2,3,4,5,6]
console.log(`Before Using The Slice() ${nums}`);
//Changing The Second Index Value
nums.splice(2,0,101);
console.log(`After Using The Slice() ${nums}`);


// Add At First
nums.splice(0,0,201);
console.log(`Inserting the Value Without Changing the Element ${nums}`);

// Act As Splice 
nums.splice(4);
console.log(nums);

