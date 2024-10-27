const fs = require('fs');

async function readFromFile(filename) {
    return new Promise((resolve, reject) => {
        const resultObject = {};

        try {
            const data = fs.readFileSync(filename,
                {encoding: 'utf8'});

            data.split("\r\n").forEach((res) => {
                resultObject[res.split(":")[0]] = res.split(":")[1];
            })
            resolve(resultObject)
        } catch (err) {
            reject(err);
        }

    });
}

readFromFile("keyValues.txt").then((res) => console.log(res)).catch((err)=> console.error("Error reading, reason:", err));