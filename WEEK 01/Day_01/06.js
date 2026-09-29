const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
input.question("Enter the marks of the student: ", (answer) => {
    const marks = Number(answer);
    if (!Number.isFinite(marks) || marks < 0 || marks > 100) {
        console.log("Please enter marks between 0 and 100.");
    }
    else if (marks >= 90) {
        console.log("The student got an A grade.");
    }
    else if (marks >= 80) {
        console.log("The student got a B grade.");
    }
    else if (marks >= 70) {
        console.log("The student got a C grade.");
    }
    else if (marks >= 60) {
        console.log("The student got a D grade.");
    }
    else {
        console.log("Unfortunately, the student has failed.");
    }
    input.close();
});

