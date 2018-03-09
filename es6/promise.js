console.log("Creating promise");
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Eureka"), 2000);
});
console.log("Promise created");

promise.then((data) => {
    console.log("Got data from the promise >>>>> "+ data);
});

console.log("Promise.then called");



