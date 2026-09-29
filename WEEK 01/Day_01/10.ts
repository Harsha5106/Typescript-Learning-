declare const process: { stdin: unknown; stdout: unknown };
declare function require(moduleName: string): {
	createInterface(options: { input: unknown; output: unknown }): {
		question(prompt: string): Promise<string>;
		close(): void;
	};
};

function calculateGrade(average: number): string {
	if (average >= 90) {
		return "A";
	} else if (average >= 80) {
		return "B";
	} else if (average >= 70) {
		return "C";
	} else if (average >= 60) {
		return "D";
	} else {
		return "F";
	}
}

function checkResult(average: number): string {
	if (average >= 40) {
		return "PASS";
	} else {
		return "FAIL";
	}
}

async function main(): Promise<void> {
	const input = require("readline/promises").createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	try {
		const studentName: string = await input.question("Enter student name: ");
		const studentAge: number = Number(await input.question("Enter student age: "));
		const subjects: string[] = ["Python", "SQL", "Maths", "Physics", "Biology"];
		const marks: number[] = [];

		for (const subject of subjects) {
			const mark: number = Number(await input.question(`Enter marks for ${subject}: `));
			marks.push(mark);
		}

		const total: number = marks.reduce((sum, mark) => sum + mark, 0);
		const average: number = total / marks.length;
		const grade: string = calculateGrade(average);
		const result: string = checkResult(average);

		console.log("\n========== STUDENT REPORT ==========");
		console.log(`\nName: ${studentName}`);
		console.log(`Age: ${studentAge}\n`);
		console.log("Marks:");

		for (let i: number = 0; i < subjects.length; i++) {
			console.log(`${subjects[i]}: ${marks[i]}`);
		}

		console.log(`\nTotal: ${total}`);
		console.log(`Average: ${average.toFixed(1)}`);
		console.log(`Grade: ${grade}`);
		console.log(`Result: ${result}`);
	} finally {
		input.close();
	}
}

main();

export {};
