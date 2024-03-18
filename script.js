//Part 1
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(`For number ${i}: Fizz`);
    }
    if (i % 5 === 0) {
      console.log(`For number ${i}: Buzz`);
    }
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`For number ${i} Buzz Fizz`);
    }
    if (i % 3 != 0 && i % 5 != 0) {
      console.log(`For number ${i} Not divisible by 3 or 5 `);
    }
  }

//Part 2
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

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

//Part 3
// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

let cell = '';
let row = '';
let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
for (const char of csvData){
    if (char !== ',' && char !== '\n'){
        cell += char;
    } 

    if(char ===','){
        row+=cell;
        cell = ""; //Clears the cell
    }

    if(char === `\n`){
        row += cell;
        console.log(row);
        cell = ""; //Clears the cell
        row = ""; //Clears the row
    }

}
// Prints the last row
if (cell !== '') {
    row += `${cell}`;
    console.log(row);
  }





