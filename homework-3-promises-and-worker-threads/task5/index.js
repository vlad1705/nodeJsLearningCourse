const fs = require('fs');

async function readFromFile(filename) {
   return new Promise((resolve,reject)=>{
       const resultMap = new Map();

       fs.readFile(filename, 'utf8', (err,data)=> {
           if (err) {
               reject(err);
           } else {
               data.split("\r\n").forEach((res)=> {
                   resultMap.set(res.split(":")[0], res.split(":")[1])
               })
               resolve(resultMap)
           }
       })
   });
}

readFromFile("keyValues.txt").then((res)=>console.log(res))