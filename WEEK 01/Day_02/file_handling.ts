import * as fs from "fs";

const fileName = "students.csv";

// Write data to CSV
const csvData = `id,name,marks
101,Harsha,85
102,Rahul,90
103,Anil,78
`;

fs.writeFileSync(fileName, csvData);

console.log("CSV file created successfully.");

// Read CSV file
const data = fs.readFileSync(fileName, "utf-8");

console.log("\nCSV Data:");
console.log(data);