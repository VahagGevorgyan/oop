"use strict";

class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }

  toString() {
    return `${this._title} ${this._author}`;
  }
  isTheSameBook(book) {
    if (this._title === book._title && this._author === book._author) {
      return true;
    } else {
      return false;
    }
  }
}
class LibraryBookBase extends Book {
  constructor(title, author, bookId) {
    super(title, author);
    this._bookId = bookId;
  }

  get bookId() {
    return this._bookId;
  }

  toString() {
    return `${this._bookId} ${super.toString()}`;
  }
}

class LibraryBook extends Book {
  constructor(title, author, bookId, quantity) {
    super(title, author);
    this._bookId = bookId;
    this._quantity = quantity;
  }
  set bookId(value) {
    this._bookId = value;
  }
  set quantity(value) {
    this._quantity = value;
  }
  get bookId() {
    return this._bookId;
  }
  get quantity() {
    return this._quantity;
  }
  toString() {
    return `${this._bookId} ${this._quantity} ${super.toString()}`;
  }
  increaseQuantityBy(amount) {
    return this._quantity - amount;
  }
  decreaseQuantityBy(amount) {
    return this._quantity - amount;
  }
}
class ReaderBook extends Book {
  constructor(title, author, bookId, expirationDate, isReturned) {
    super(title, author);
    this._bookId = bookId;
    this._expirationDate = expirationDate;
    this._isReturned = isReturned;
  }
  set bookId(value) {
    this._bookId = value;
  }
  set expirationDate(value) {
    this._expirationDate = value;
  }
  set isReturned(value) {
    this.toString._isReturned = value;
  }
  get bookId() {
    return this._bookId;
  }
  get expirationDate() {
    return this._expirationDate;
  }
  get isReturned() {
    return this._isReturned;
  }
  toString() {
    return `${this._bookId} ${this._expirationDate} ${
      this._isReturned
    } ${super.toString()}`;
  }
}
class Reader {
  constructor(firstName, lastName, readerId, books) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._readerId = readerId;
    this._books = books;
  }
  set firstName(value) {
    this._firstName = value;
  }
  set lastName(value) {
    this._lastName = value;
  }
  set readerId(value) {
    this._readerId = value;
  }
  set books(value) {
    this._books = value;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get readerId() {
    return this._readerId;
  }
  get books() {
    return this._books;
  }

  toString() {
    return `${this._firstName} ${this._lastName} ${this._readerId} ${this._books}`;
  }
  borrowBook(book, library) {}
}
class Library {
  constructor(books, readers) {
    this_books = books;
    this._readers = readers;
  }

  get books() {
    return this._books;
  }
  get readers() {
    return this._readers;
  }
}
let aa = new Book("ttt", "ooo");
console.log(bb.title);
