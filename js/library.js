class Library {
    constructor() {
        this.myLibrary = [];
    }
    
    addBookToLibrary(newBook) {
        this.myLibrary.push(newBook);
        const collection = document.querySelector('.collection');

        const bookContainer = document.createElement('div');
        bookContainer.classList.add('card', 'mx-2', 'col-md-auto');

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('data-dismiss', 'alert');
        deleteButton.setAttribute('aria-label', 'Close');
        deleteButton.classList.add('close');
        deleteButton.addEventListener('click', () => {
            deleteButton.parentElement.remove();
        })

        const symbol = document.createElement('span');
        symbol.setAttribute('aria-hidden', 'true');
        symbol.classList.add('float-right', 'delete');
        symbol.textContent = 'x';

        const bookProfile = document.createElement('div');
        bookProfile.classList.add('card-text', 'overflow-hidden');
        bookProfile.textContent = newBook.title;

        deleteButton.appendChild(symbol);
        bookContainer.appendChild(deleteButton);
        bookContainer.appendChild(bookProfile);
        collection.appendChild(bookContainer);
    }
}

export {Library};