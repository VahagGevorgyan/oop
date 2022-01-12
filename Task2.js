"use strict";
let id = 0;
class Account {
  constructor(name, balance) {
    this._id = id++;
    this._name = name;
    this._balance = balance;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }

  get balance() {
    return this._balance;
  }
  set name(value) {
    this._name = value;
  }
  set balance(value) {
    this._balance = value;
  }
  credit(amount) {
    this._balance = this._balance + amount;
    return this._balance;
  }
  debit(amount) {
    if (amount < this._balance) {
      return this._balance - amount;
    } else {
      return "Amount exceeded balance";
    }
  }

  static identifyAccounts(accountFirst, accountSecond) {
    if (
      accountFirst._name === accountSecond._name &&
      accountFirst._balance === accountSecond._balance
    ) {
      return true;
    } else {
      return false;
    }
  }
  
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);


console.log(savingAcc);
console.log(cardAcc);
console.log(savingAcc.balance);
console.log(savingAcc.credit(400));
console.log(savingAcc.balance);
console.log(savingAcc.debit(9000));

let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); 
console.log(Account.identifyAccounts(savingAcc, cardAcc));
