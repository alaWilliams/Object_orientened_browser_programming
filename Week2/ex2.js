// Exercise 2: Nested Objects

// Objective:

// Access properties from a nested object.

// Instructions:

// · Create an object company with the properties: name: "TechCorp"

// · location: "San Francisco"

// · employees: count: 100

// · details: { CEO: "Jane Smith", CTO: "Mike Brown" }

// Access and print the name of the company.

// Access and print the number of employees.

// Access and print the name of the CTO.

let company = {
  name: 'TechCorp',
  location: 'San Francisco',
  employeesCount: 100,
  details: {
    CEO: 'Jane Smith',
    CTO: 'Mike Brown'
  }
}

console.log(company.name)
console.log(company.employeesCount)
console.log(company.details.CTO)