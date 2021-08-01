import { Library } from "./library.js";
import { Book } from "./book.js";

let myLibrary = new Library();
const newBook = new Book("My CS life");
myLibrary.addBookToLibrary(newBook);
myLibrary.getAllBooks();