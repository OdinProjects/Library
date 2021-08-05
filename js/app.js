import { Library } from "./library.js";
import { Book } from "./book.js";

let myLibrary = new Library();

const addBook = document.getElementById('addTheBook');
const title = document.getElementById('title');
addBook.onclick = () => {
    const newBook = new Book(title.value);
    myLibrary.addBookToLibrary(newBook);
}