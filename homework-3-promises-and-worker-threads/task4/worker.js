const { parentPort } = require('worker_threads');

function heavyNumberComputation(numbers) {
    let result = 0;
    for (let i = 700000; i < 900000; i++) {
        result += numbers[i];
    }
    return result;
}

parentPort.on('message', (number) => {
    const result = heavyNumberComputation(number);

    parentPort.postMessage(result);
    process.exit(0);
});
