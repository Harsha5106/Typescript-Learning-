"use strict";
const students = [
    { name: "Harsha", marks: 85 },
    { name: "Rahul", marks: 90 },
    { name: "Anil", marks: 78 },
    { name: "Kiran", marks: 65 }
];
// 1. forEach()
students.forEach(student => {
    console.log(student.name);
});
// 2. map()
const names = students.map(student => student.name);
console.log("Names:", names);
// 3. filter()
const passedStudents = students.filter(student => student.marks >= 70);
console.log("Passed:", passedStudents);
// 4. find()
const student = students.find(student => student.name === "Rahul");
console.log("Found:", student);
// 5. reduce()
const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
}, 0);
console.log("Total Marks:", totalMarks);
