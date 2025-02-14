// Write a function that takes an array of numbers and returns a new array where each number is squared.
const squareNumbers = array => array.map(element => Math.pow(element, 2))
// console.log(squareNumbers([1, 2, 3, 4]))

// Write a function that takes an array of numbers and returns a new array containing only even numbers.
const getEvens = array => array.filter(element => element % 2 === 0)
// console.log(getEvens([1, 2, 3, 4, 5, 6]))

// Write a function that takes an array of numbers and returns the sum of all elements.
const sumArray = number => number.reduce((acc, currentValue) => acc + currentValue, 0)
// console.log(sumArray([1, 2, 3, 4]))

// Write a function that takes an array of names and returns a single string where all names are separated by a comma.
const formatNames = names => names.join(', ');
console.log(formatNames(["Alice", "Bob", "Charlie"]))

// Write a function applyOperation that takes two numbers and a function as arguments. The function should apply the given operation to the numbers.
const add = (a, b) => a + b;
const applyOperation = (num1, num2, func) => func(num1, num2)
// console.log(applyOperation(5, 3, add))

// Create two functions: --double that multiplies a number by 2. -- increment that adds 1 to a number. Then, write a function composeFunctions(f, g) that combines two functions and applies them in order.
const double = x => x * 2;
const increment = x => x + 1;
const composeFunctions = (function1, function2) =>  number => function1(function2(number));
const composed = composeFunctions(double, increment);
// console.log(composed(3));
