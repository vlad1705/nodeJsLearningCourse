async function returnFirstResolvedPromise(...promises) {
    try {
        return await Promise.race(promises);;
    }catch (error){
        console.error('Error:', error);
    }
}

returnFirstResolvedPromise(new Promise(resolve => setTimeout(() => resolve("First promise"), 1500)),
                new Promise(resolve => setTimeout(() => resolve("Second promise"), 1000)))
                .then(res=>console.log(res));
