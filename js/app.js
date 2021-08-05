import { Library } from "./library.js";
import { Book } from "./book.js";

let myLibrary = new Library();
const newBook = new Book("My CS life");
const newBook1 = new Book ("Software Engineering 101");
const newBook2 = new Book ("Serious Cryptography");
const newBook3 = new Book ("Cryptography Engineering");
const newBook4 = new Book ("Introduction to Algorithms");
const newBook5 = new Book ("Introduction to Algorithms");
const newBook6 = new Book ("Introduction to Algorithms");
const newBook7 = new Book ("Introduction to Algorithms");
myLibrary.addBookToLibrary(newBook);
myLibrary.addBookToLibrary(newBook1);
myLibrary.addBookToLibrary(newBook2);
myLibrary.addBookToLibrary(newBook3);
myLibrary.addBookToLibrary(newBook4);
myLibrary.addBookToLibrary(newBook5);
myLibrary.addBookToLibrary(newBook6);