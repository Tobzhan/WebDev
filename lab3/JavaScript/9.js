// let i = 3;

// while (i) {
//   alert( i-- );
// }

// let i = 3;

// alert(i--); // shows 3, decreases i to 2

// alert(i--) // shows 2, decreases i to 1

// alert(i--) // shows 1, decreases i to 0

// // done, while(i) check stops the loop

// for (let i = 0; i < 5; ++i) alert( i );

// for (let i = 0; i < 5; i++) alert( i );

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert( i );
//   }
// }

// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// For each i in the interval {
//   check if i has a divisor from 1..i
//   if yes => the value is not a prime
//   if no => the value is a prime, show it
// }

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }