function calculateGrade(average) {
    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else if (average >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
function checkResult(average) {
    if (average >= 40) {
        return "PASS";
    }
    else {
        return "FAIL";
    }
}
async function main() {
    const input = require("readline/promises").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    try {
        const studentName = await input.question("Enter student name: ");
        const studentAge = Number(await input.question("Enter student age: "));
        const subjects = ["Python", "SQL", "Maths", "Physics", "Biology"];
        const marks = [];
        for (const subject of subjects) {
            const mark = Number(await input.question(`Enter marks for ${subject}: `));
            marks.push(mark);
        }
        const total = marks.reduce((sum, mark) => sum + mark, 0);
        const average = total / marks.length;
        const grade = calculateGrade(average);
        const result = checkResult(average);
        console.log("\n========== STUDENT REPORT ==========");
        console.log(`\nName: ${studentName}`);
        console.log(`Age: ${studentAge}\n`);
        console.log("Marks:");
        for (let i = 0; i < subjects.length; i++) {
            console.log(`${subjects[i]}: ${marks[i]}`);
        }
        console.log(`\nTotal: ${total}`);
        console.log(`Average: ${average.toFixed(1)}`);
        console.log(`Grade: ${grade}`);
        console.log(`Result: ${result}`);
    }
    finally {
        input.close();
    }
}
main();

