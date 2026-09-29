const marks: number[] = [85, 72, 91, 68, 88];

const total: number = marks.reduce((sum, mark) => sum + mark, 0);
const average: number = total / marks.length;
const highest: number = Math.max(...marks);
const lowest: number = Math.min(...marks);

console.log("Total:", total);
console.log("Average:", average);
console.log("Highest:", highest);
console.log("Lowest:", lowest);

export {};
