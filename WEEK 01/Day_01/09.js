const marks = [85, 72, 91, 68, 88];
const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;
const highest = Math.max(...marks);
const lowest = Math.min(...marks);
console.log("Total:", total);
console.log("Average:", average);
console.log("Highest:", highest);
console.log("Lowest:", lowest);

