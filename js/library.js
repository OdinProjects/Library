class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary(newBook) {
        this.myLibrary.push(newBook);
    }

    getAllBooks() {
        this.myLibrary.forEach(book => {
            const collection = document.querySelector('.collection');

            const bookContainer = document.createElement('div');
            bookContainer.className = 'bookContainer';

            const bookProfile = document.createElement('div');
            bookProfile.className = 'bookProfile'

            const title = document.createElement('h4');
            title.textContent = book.title;

            bookProfile.appendChild(title);
            bookContainer.appendChild(bookProfile);
            collection.appendChild(bookContainer);
        })
    }
}

export {Library};