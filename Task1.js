"use strict";

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    } else {
      throw new Error("This field should be a string!");
    }
  }

  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get gender() {
    return this._gender;
  }

  toString() {
    return `Ms. ${this.name} ${this.email} ${this.gender}`;
  }
}
let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender);
console.log(author1.name);
console.log(author1.toString());

try {
  author1.name = 12;
} catch (error) {
  console.log(error.message);
}

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this.price = price;
    this._quantity = quantity;
  }

  set title(value) {
    this._title = value;
  }
  set author(value) {
    this.author = value;
  }
  set price(value) {
    this._price = value;
  }
  set quantity(value) {
    this._quantity = value;
  }
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get price() {
    return this._price;
  }
  get quantity() {
    return this._quantity;
  }
  getProfit() {
    return this.price * this._quantity;
  }

  toString() {
    return `${this.title} ${this.author} ${this.price} ${this.quantity}`;
  }
}
let bookk = new Book("javascript", author1, 200, 20);
console.log(bookk.getProfit());
bookk.price = 30;
console.log(bookk.getProfit());
console.log(bookk.toString())
console.log(Object.getOwnPropertyNames(bookk))
