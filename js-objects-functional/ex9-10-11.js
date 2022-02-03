class Person {
    constructor(name, birthplace, birthday, email) {
        this.name = name;
        this.birthday = birthday;
        this.email = email;
        this.birthplace = birthplace;
    }

    getName() { return this.name; }
    getBirthday() { return this.birthday; }
    getEmail() { return this.email; }
    getBirthplace() { return this.birthplace;}
}

class Student extends Person {
    constructor(name, birthplace, birthday, email, studentId, classId) {
        super(name, birthplace, birthday, email);

        this.studentId = studentId;
        this.classId = classId;
        
    }

    getStudentId() { return this.studentId; }
    getClassId() { return this.classId; }
}

class Teacher extends Person {
    constructor(name, birthplace, birthday, email, personnelId, employmentStartDate) {
        super(name, birthplace, birthday, email);

        this.personnelId = personnelId;
        this.employmentStartDate = employmentStartDate;
        this.skills = [];
        this.activeCourses = [];
    }

    getPersonnelId() { return this.personnelId; }
    getEmploymentStartDate() { return this.employmentStartDate; }
    addSkillTopic(skillDescription) { this.skills.push(skillDescription); }
    getSkillTopics() { return this.skills; }
    
    addCourse(course) {
        this.activeCourses.push(course);
    }

    printCourses() {
        console.log(this.name + " is teaching the following courses:")
        for(let i = 0; i < this.activeCourses.length; i++) {
            console.log(this.activeCourses[i].getName());
        }
        console.log("---- course list ends");
    }

}

let students = [
    new Student("John", "UK", "10-10-1990", "john@school.com", 1, "EXA22"),
    new Student("Diane", "UK", "17-06-1991", "diane@school.com", 2, "EXE22"),
    new Student("Maxine", "UK", "30-07-1989", "maxine@school.com", 3, "EXP22"),
    new Student("Ted", "UK", "10-10-1992", "ted@school.com", 4, "EXA22"),
    new Student("Jeff", "UK", "01-11-1993", "jeff@school.com", 5, "EXA22"),
];

let teachers = [
    new Teacher("Boris", "RU", "01-01-1960", "boris@school.com", "avas334ggsd", "01-01-2010"),
    new Teacher("Anne", "FI", "01-01-1970", "anne@school.com", "sdfbnn34D-23345", "01-01-2015"),
];


class Course {
    constructor(name, description, courseId) {
        this.name = name;
        this.description = description;
        this.courseId = courseId;
        this.teachers = [];
        this.students = [];
    }
    getName() { return this.name; }
    getDescription() { return this.description; }
    getCourseId() { return this.courseId; }

    addTeacher(teacher) {
        this.teachers.push(teacher);
        teacher.addCourse(this);
    }

    getTeachers() { return this.teachers; }

    addStudent(student) { 
        this.students.push(student);
    }
    getStudents() { return this.students; }
}

let courses = [
    new Course("Object oriented programming",
                "OOBP with JavaScript and Node.JS",
                923845),
    new Course("Finnish language 1",
                "Basics of finnish language, every day conversations",
                34567),
    new Course("React Fundamentals", 
                "Basics of React.JS, use of components to build an application",
                7844)
];

teachers[0].addSkillTopic("Frontend programming");
teachers[0].addSkillTopic("Javascript");
teachers[0].addSkillTopic("React");

teachers[1].addSkillTopic("Finnish");
teachers[1].addSkillTopic("Swedish");

let boris = teachers[0];

courses[0].addTeacher(teachers[0]);
courses[2].addTeacher(teachers[0]);
courses[1].addTeacher(teachers[1]);

courses[0].addStudent(students[0]);
courses[0].addStudent(students[1]);
courses[0].addStudent(students[2]);

courses[1].addStudent(students[3]);
courses[1].addStudent(students[4]);

courses[2].addStudent(students[0]);
courses[2].addStudent(students[1]);
courses[2].addStudent(students[2]);
courses[2].addStudent(students[3]);
courses[2].addStudent(students[4]);


/*console.log(courses[0].getName())
console.log(courses[0].getTeachers());
console.log(courses[0].getStudents());
**/

teachers[0].printCourses();



