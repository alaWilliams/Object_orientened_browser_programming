// Exercise 3: Updating Object Properties

// Objective:

// Update the properties of an object.

// Instructions:

// · Create an object car with the properties: make: "Toyota"

// · model: "Camry"

// · year: 2019

// Update the year property to 2021.

// Add a new property color with the value "blue".

// Delete the model property from the object.

// Print the updated object to verify changes.

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2019,
}

car.year = 2021;
car.color = 'blue';
delete car.model;

console.log(car)
