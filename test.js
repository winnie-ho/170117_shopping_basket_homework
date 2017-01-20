
// var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]


// var counter = a.reduce(function (accumulator, current) {
//   if (typeof accumulator[current] == 'undefined') {
//     accumulator[current] = 1;
//   } else {
//     accumulator[current] += 1;
//   }

//   return accumulator;
// }, {});

// console.log(counter);


var tHash = {
  name: "n",
  date: "d",
  labels: "l" 
}

for (var key in tHash){
  console.log(key + " -> " + tHash[key]);   
  // if (key == "name") doSomething();
}