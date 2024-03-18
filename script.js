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

// let j = 55;
// while(true) {
//   let isPrime = true;
//   for (let k = 2; k < j; k++) {
//     if (j % k === 0) {
//       //not prime
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(j, "is prime");
//     break;
//   }
//   j++;
// }

//Part
let cell = '';
let row = '';
let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
for (const char of csvData){
    if (char !== ',' && char !== '\n'){
        cell += char;
        //console.log(cell)
    } 

    if(char ===','){
        row+=cell;
        cell = "";
    }

    if(char === `\n`){
        row += cell;
        console.log(row);
        cell = "";
        row = "";
    }

}
if (cell !== '') {
    row += `${cell}`;
    console.log(row);
  }





