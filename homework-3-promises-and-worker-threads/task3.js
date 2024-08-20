const fs = require('fs');

async function returnAllCompletedPromises(...promises) {
    return await Promise.allSettled(promises);
}

function writeToFile(filename, data) {
    fs.appendFile(filename, data + '\n', 'utf8', err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Successful responses written to file");
        }
    });
}

returnAllCompletedPromises(
    new Promise(resolve => setTimeout(() => resolve("Succeed promise :)"), 1500)),
    new Promise(resolve => setTimeout(() => resolve("Succeed promise again :)"), 1200)),
    new Promise((resolve, reject) => setTimeout(() => reject("Failed promise :("), 1000))
).then(results => {
    results
        .filter(res => res.status === "fulfilled")
        .forEach(res => writeToFile('successResponses.txt', res.value));
});
