function celsiusToFahrenheit(celsius: number): number {
	return (celsius * 9) / 5 + 32;
}

let celsius: number = 25;
console.log(`${celsius} Celsius = ${celsiusToFahrenheit(celsius)} Fahrenheit`);

export {};
