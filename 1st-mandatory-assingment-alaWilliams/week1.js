/* Task 1 - Fix the function below. It should operate as a calculator, 
which takes two numbers and an operator as arguments, and returns the result of the operation. 

For example calculator(1, 2, "+") should return 3.
*/
function calculator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  }else if (operator === '*') {
    return num1 * num2;
  }else if (operator === '/') {
    return num1 / num2;
  }
}

/* Task 2 - Write a function, which creates objects describing a person.
The function should take three arguments: name, surname and age. 
The function should return an object with the following properties:
1. name - the name of the person
2. surname - the surname of the person
3. age - the age of the person
4. fullName - the full name of the person (name + surname)
5. isAdult - true if the person is an adult (age >= 18), false otherwise 

  For example createPerson("John", "Doe", 30) should return:
  {
    name: "John",
    surname: "Doe",
    age: 30,
    fullName: "John Doe",
    isAdult: true,
  }
*/
function createPerson(name, surname, age) {
  let person = {
    name: name,
    surname: surname,
    age: age,
    fullName: `${name} ${surname}`,
    isAdult: age >= 18
  }
  return person;
}

/*
Task 3 - Write a function, which takes an object as a parameter. The object given as a parameter should have the following properties:
1. name - the name of the person
2. surname - the surname of the person
3. age - the age of the person
4. fullName - the full name of the person (name + surname)
5. isAdult - true if the person is an adult (age >= 18), false otherwise

The function should return a string in the following format:
"The person <name>, <surname> is <age> years old, and is an adult" 
or "The person <name>, <surname> is <age> years old, and is an minor" 
if the person is not an adult.

Notice that <name>, <surname> and <age> fields should be replaced with the actual values from the object.
*/
function personToString(person) {
  if (person.isAdult) {
    return `The person ${person.name}, ${person.surname} is ${person.age} years old, and is an adult`
} else {
  return `The person ${person.name}, ${person.surname} is ${person.age} years old, and is an minor`
}
}

/* Task 4 - Write a function, which takes an object as a parameter. 
   The object given as a parameter should describe the information of a city.
   The city object should have the following properties:
    1. name - the name of the city
    2. population - the population of the city
    3. country - the country the city is located in
    4. isCapital - true if the city is a capital, false otherwise

    The function should return the name and population of the city in the following format:
    "<name> has a population of <population>"
*/
function cityNameAndPopulationToString(city) {
  return `${city.name} has a population of ${city.population}`
}

/* Task 5 - Write a function, which takes the same kind of object as parameter as the function in Task 4.
   The function should return boolan value true if the city is a capital, false otherwise.
*/
function isCapital(city) {
  return city.isCapital
    
}

/* Task 6 - Write a function, which takes the same kind of object as parameter as the function in Task 4.
   The function should return the name of the country the city is located in.
*/
function getCountryName(city) {
  return city.country;
}

/* Task 7 - Write a function, which takes two parameters. Both parameters are of the same city object type as the function in Task 4.
   The function should return the city with the larger population.
*/
function getLargerPopulation(city1, city2) {
  if (city1.population > city2.population) {
    return city1
  } else {
    return city2
  }
}

/* Task 8 - Write a function, which takes the same parameters as the function in Task 7.
   The function should return a string in the following format:
   "<name of the city with larger population> has larger population than <name of the city with smaller population>"
*/
function getLargerPopulationString(city1, city2) {
  if (city1.population > city2.population) {
    return `${city1.name} has larger population than ${city2.name}`
  } else {
    return `${city2.name} has larger population than ${city1.name}`
  }
  }


/* Export all the functions you have written above. 
   The export is used to make the functions available to the tests. With this same logic, you 
   can also import these functions in other files.
 */
module.exports = {
  calculator,
  createPerson,
  personToString,
  cityNameAndPopulationToString,
  isCapital,
  getCountryName,
  getLargerPopulation,
  getLargerPopulationString,
};
