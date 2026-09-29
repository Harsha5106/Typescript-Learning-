"use strict";
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received successfully");
        }, 2000);
    });
}
async function fetchData() {
    console.log("Fetching data...");
    const result = await getData();
    console.log(result);
}
fetchData();
