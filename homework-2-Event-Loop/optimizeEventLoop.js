console.log("Hello synchrony - 1");

process.nextTick(() => console.log("Hello from process.nextTick - 3"));

console.log("Hello synchrony - 2");

Promise.resolve().then(() => console.log("Hello from promise - 4"));

Promise.resolve().then(() => {
    console.log("Hello from second promise - 5");
    process.nextTick(() => console.log("Hello from second nextTick - 6"));
});

setTimeout(() => console.log("Hello from second setTimeout - 7"), 0);

setImmediate(() => console.log("Hello from setImmediate - 9"));

setTimeout(() => console.log("Hello from setTimeout - 8"), 10);
