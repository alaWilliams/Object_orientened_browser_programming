// Exercise 4: Looping Through Object Properties
// Objective:
// Use a loop to iterate over object properties.
// Instructions:
// · Create an object student with the properties: name: "Alice"
// · grade: "A"
// · subject: "Mathematics"
// · year: "Sophomore"
// Write a function that takes an object as an argument and uses a for...in loop to print each key and its corresponding value.
// Call the function with the student object to test it

const student = {
  name: 'Alice',
  grade: 'A',
  subject: 'Mathematics',
  year: 'Sophomore'
}

function printStudent(object) {
  for (const property in object) {
    console.log(`${property} : ${object[property]}`)
  }}

  printStudent(student)