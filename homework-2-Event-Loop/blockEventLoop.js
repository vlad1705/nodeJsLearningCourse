// Task 1

// Here i define number of milliseconds since January 1 1970 an add 5 seconds to it
const futureDate = Date.now()+5000;

console.log("Hello before synchrony operation")

while (Date.now() < futureDate){

}

console.log("Hello after synchrony operation")

setInterval(()=> console.log("Hello from interval"), 1000)
