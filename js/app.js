import { Library } from "./library.js";
import { Book } from "./book.js";

let myLibrary = new Library();
const newBook = new Book("My CS life");
const newBook1 = new Book ("Software Engineering 101");
const newBook2 = new Book ("Serious Cryptography");
const newBook3 = new Book ("Cryptography Engineering");
myLibrary.addBookToLibrary(newBook);
myLibrary.addBookToLibrary(newBook1);
myLibrary.addBookToLibrary(newBook2);
myLibrary.addBookToLibrary(newBook3);
myLibrary.getAllBooks();