const myPromise = new Promise<string>((resolve, reject) => {

    const success = false;

    if (success) {
        resolve("Data received successfully");
    } else {
        reject("Something went wrong");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });