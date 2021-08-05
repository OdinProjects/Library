class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary(newBook) {
        this.myLibrary.push(newBook);
        const collection = document.querySelector('.collection');

        const bookContainer = document.createElement('div');
        bookContainer.classList.add('card', 'mx-2', 'col-md-auto');

        const bookProfile = document.createElement('div');
        bookProfile.classList.add('card-text', 'overflow-hidden');
        bookProfile.textContent = newBook.title;

        bookContainer.appendChild(bookProfile);
        collection.appendChild(bookContainer);
    }
}

export {Library};