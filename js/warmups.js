// If the number is evenly divisible by three and five we get 'FizzBuzz', if the number is evenly divisible by three we get 'Fizz', if the number is evenly divisible by five we get 'Buzz'. If the number is not divisible by three or five we just get the number.

// for (let i = 1; i <= 30; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i);
//     }
// }
// Write a function that returns the number 7.
const returnSeven = () => 7;

const multiplyByFive = (num) => (typeof num === 'number') ? num * 5 : 0;
