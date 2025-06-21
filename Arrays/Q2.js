let items = [200,500,400,700,600,263]
let idx = 0;

for (let val of items) {

  let offer = val/10;
  items[idx]=items[idx]  - offer;
  console.log(`Value After offer is ${items[idx]}`);
  idx++;
  
}