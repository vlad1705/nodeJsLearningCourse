async function makeFewApiCalls(...links) {
    const responses  = await Promise.all(links.map((link)=> fetch(link)))
    const jsonedResult = await Promise.all(responses.map(response => response.json()));
    return jsonedResult;
}

// positive scenario

makeFewApiCalls(
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
).then(data => console.log(data)).catch(error => console.error('Error:', error));

// negative scenario

makeFewApiCalls(
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "notexistedlinkthatshoulcauseanerror"
).then(data => console.log(data)).catch(error => console.error('Error:', error));