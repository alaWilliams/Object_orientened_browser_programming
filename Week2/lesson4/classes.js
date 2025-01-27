// Class declaration
class Student {
  //define a structure
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.studentID = Math.floor(Math.random() * 1000)
  };
  
  // methods
  printNameAndStudentID() {
    console.log(`Name: ${this.name} and Student ID: ${this.studentID}`)
  }
};

let student1 = new Student('John Doe', 20, 'Helsinki');
let student2 = new Student('Mary Smith', 25, 'Oulu');

console.log(student1);
console.log(student2);


student1.printNameAndStudentID();