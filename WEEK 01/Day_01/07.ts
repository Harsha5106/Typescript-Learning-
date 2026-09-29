for (let i: number = 1; i <= 5; i++) {
	let row: string = "";

	for (let j: number = 1; j <= i; j++) {
		row += "*";
	}

	console.log(row);
}

export {};
