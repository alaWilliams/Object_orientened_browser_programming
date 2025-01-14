// Exercise 5: Accessing Properties with Variables

// Objective:

// Access object properties using variables.

// Instructions:

// · Create an object book with the properties: title: "The Great Gatsby"

// · author: "F. Scott Fitzgerald"

// · year: 1925

// Create a variable property and assign it the string "author".

// Access and print the value of the author property using the variable property.

// Change the value of the property variable to "title" and access and print the value of the title property.

const book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925
}

let property = 'author';

console.log(book[property])

property = 'title';

console.log(book[property])