const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genres: ["Fiction", "Classic"] },
    { title: "1984", author: "George Orwell", year: 1949, genres: ["Dystopian", "Science Fiction"] },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932, genres: ["Dystopian", "Science Fiction"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genres: ["Fiction", "Classic"] },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genres: ["Fiction", "Classic"] },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932, genres: ["Dystopian", "Science Fiction"] },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genres: ["Fantasy"] },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genres: ["Fantasy"] }
];

const uniqueBooks = Array.from(
    new Set(books.map(book => JSON.stringify({ ...book, rating: 5 }))))
    .map(bookStr => JSON.parse(bookStr))

// 1
function sortByYear() {
    return uniqueBooks.sort((curr,next) => curr.year - next.year);
}

//2
function returnOnlyNames() {
    return uniqueBooks.map((book)=>book.title);
}

//3
function averagePublicationYear() {
    let booksSum = uniqueBooks.reduce((acc, curr) => acc+curr.year, 0);
    return Math.floor(booksSum/uniqueBooks.length);
}

//4
function searchByGenres(genre) {
    return uniqueBooks.filter(book => book.genres.includes(genre));
}

console.log("Sorting by year: ", sortByYear())
console.log("Return names: ", returnOnlyNames())
console.log("Average publication year: ", averagePublicationYear())
console.log("Search by genre: ", searchByGenres('Dystopian'))



