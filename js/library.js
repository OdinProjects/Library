class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary(newBook) {
        this.myLibrary.push(newBook);
    }

    getAllBooks() {
        this.myLibrary.forEach(book => console.log(book.title))
    }
}

export {Library};