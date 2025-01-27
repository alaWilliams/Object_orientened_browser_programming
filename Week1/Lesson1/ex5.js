// Ex5 Calculate GPA averages of three students

// Create code which stores the course data of three individual students, like in Ex3, then uses the function, or adaptation of it, created in Ex4 to calculate the average GPAs of each student.

// Print to console the grades of each student and the GPA of each student.

// Name the students to be Joe, Lisa and Max.

const joeHistory = 4;
const joeEnglish = 3.5;
const joePhysics = 3;

const lisaHistory = 3;
const lisaEnglish = 3.5;
const lisaPhysics = 5;

const maxHistory = 5;
const maxEnglish = 5;
const maxPhysics = 5;

const joeGrades = {
  name: 'Joe',
  history: 4,
  english: 3.5,
  physics: 3
}

const lisaGrades = {
  name: 'Lisa',
  history: 3,
  english: 4,
  physics: 5
}

const maxGrades = {
  name: 'Max',
  history: 5,
  english: 5,
  physics: 5
}

// console.log(lisaGrades)

function calculateAverageGrades(grades) {
  let averageGrades = (grades.history + grades.english + grades.physics) / 3
  console.log(`Grades of ${grades.name}: ${grades.history}, ${grades.english}, ${grades.physics}. The average is ${averageGrades}.`)
  }

calculateAverageGrades(joeGrades);
calculateAverageGrades(lisaGrades);
calculateAverageGrades(maxGrades);