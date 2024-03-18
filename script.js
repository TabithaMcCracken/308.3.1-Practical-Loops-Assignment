//Part 1
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//       console.log(`For number ${i}: Fizz`);
//     }
//     if (i % 5 === 0) {
//       console.log(`For number ${i}: Buzz`);
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`For number ${i} Buzz Fizz`);
//     }
//     if (i % 3 != 0 && i % 5 != 0) {
//       console.log(`For number ${i} Not divisible by 3 or 5 `);
//     }
//   }

//Part 2

let j = 55;
while(true) {
  let isPrime = true;
  for (let k = 2; k < j; k++) {
    if (j % k === 0) {
      //not prime
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(j, "is prime");
    break;
  }
  j++;
}


