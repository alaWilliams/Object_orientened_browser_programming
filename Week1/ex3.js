// Ex3 Calculate average GPA of a Student

// Create code which calculates the average GPA of a student who has completed the following courses with grades:

// · Introduction to Programming – 5

// · Computer Devices – 3

// · Engineering English – 4

// · Object Oriented Programming – 2

// · Mathematics Primer – 4

// let grade1 = 5;
// let grade2 = 3;
// let grade3 = 4;
// let grade4 = 2;
// let grade5 = 5;

let grades = [5, 3, 4, 2, 5]
function calculateAverageGrade(array) {
  let initialValue = 0;
  let sum = array.reduce((acc, currValue) => acc + currValue, initialValue);
  let average = sum / array.length;
  console.log(average);
}


calculateAverageGrade(grades)