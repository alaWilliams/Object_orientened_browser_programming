// Exercise 1: Accessing Object Properties

// Objective:

// Access and print the properties of a given JavaScript object.

// Instructions:

// · Create an object person with the properties: name: "John Doe"

// · age: 30

// · city: "New York"

// Access and print each property of the object using dot notation.

// Access and print each property of the object using bracket notation

let person = {
  name: "John Doe",
  age: 30,
  city: "New York"
}

console.log(`${person.name} ${person.age} ${person.city}`)

console.log(`${person['name']} ${person['age']} ${person['city']}`)