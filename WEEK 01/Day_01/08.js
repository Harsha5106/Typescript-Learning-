async function main() {
    const input = require("readline/promises").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    try {
        const num = Number(await input.question("Enter a number: "));
        if (!Number.isInteger(num)) {
            console.log("Please enter a whole number.");
            return;
        }
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }
    finally {
        input.close();
    }
}
main();

