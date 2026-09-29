declare const process: { stdin: unknown; stdout: unknown };
declare function require(moduleName: string): {
	createInterface(options: { input: unknown; output: unknown }): {
		question(prompt: string): Promise<string>;
		close(): void;
	};
};

async function main(): Promise<void> {
	const input = require("readline/promises").createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	try {
		const num: number = Number(await input.question("Enter a number: "));

		if (!Number.isInteger(num)) {
			console.log("Please enter a whole number.");
			return;
		}

		for (let i: number = 1; i <= 10; i++) {
			console.log(`${num} x ${i} = ${num * i}`);
		}
	} finally {
		input.close();
	}
}

main();

export {};
