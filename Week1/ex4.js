// Ex4 Average Calculator Function

// Create a function which accepts an array of integers, calculates the average of those integers and returns the result.

let array = [11, 12, 13, 14, 15, 16, 17, 18, 19]

let sum = 0

for (let i = 0; i < array.length; i++) {
  sum += array[i]
}

let average = sum / array.length
console.log(average)