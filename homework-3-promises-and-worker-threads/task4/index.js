const { Worker } = require('worker_threads');

function runWorker(numbers){
    return new Promise((resolve, reject) => {
        const worker = new Worker("./worker.js");

        worker.postMessage(numbers);
        worker.on('message', (result)=>{
            console.log("Got message from worker :)");
            resolve(result);
        });

        worker.on('error', (error)=>{
            reject(error);
        });

        worker.on('exit', (code)=>{
            if (code !== 0){
                reject(`Worker ended with code: ${code}`);
            }
        });
    });
}

function generateLargeArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100000));
}

runWorker(generateLargeArray(1000000))
    .then(result => console.log(`Result: ${result}`))
    .catch(err => console.error(`Error: ${err}`));
