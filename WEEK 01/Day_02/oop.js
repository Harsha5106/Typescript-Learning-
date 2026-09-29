"use strict";
class Student {
    name;
    studentId;
    marks;
    constructor(name, studentId, marks) {
        this.name = name;
        this.studentId = studentId;
        this.marks = marks;
    }
    displayStudent() {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Marks: ${this.marks}`);
    }
}
class Course extends Student {
    courseName;
    constructor(name, studentId, marks, courseName) {
        super(name, studentId, marks);
        this.courseName = courseName;
    }
    displayCourse() {
        this.displayStudent();
        console.log(`Course: ${this.courseName}`);
    }
}
const student1 = new Student("Harsha", 101, 85);
student1.displayStudent();
console.log("----------------");
const course1 = new Course("Harsha", 101, 85, "TypeScript");
course1.displayCourse();
