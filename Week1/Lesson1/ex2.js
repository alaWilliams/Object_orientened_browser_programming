// Ex1 Basic Average Calculation

// Write a program that calculates the average of five numbers. Do this without using functions.

// · Use individual variables to store the numbers, sum and count of numbers.

// · Calculate the average using the formula: average = sum / count.

// · Display the result to the user.



// Ex2 Basic Average Calculation Expanded

// Modify the exercise so that the numbers are stored in an array. Create an array of 10 numbers, calculate the average of the numbers in the array.



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let initialValue = 0;
let sum = numbers.reduce((accumulator, number) => accumulator + number)
let average = sum / numbers.length;

console.log(`Average is: ${average}`);