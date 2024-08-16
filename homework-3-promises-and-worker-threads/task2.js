async function returnFirstResolvedPromise(...promises) {
    try {
        let result = await Promise.race(promises);
        return result;
    }catch (error){
        console.error('Error:', error);
    }
}


returnFirstResolvedPromise(new Promise(resolve => setTimeout(() => resolve("First promise"), 1500)),
                new Promise(resolve => setTimeout(() => resolve("Second promise"), 1000)))
                .then(res=>console.log(res));
