


function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function Author(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.books = [];
}

Author.prototype.addBook = function(book) {
  this.books.push(book);
}


var author1 = new Author("Kgomotso", "Nkosi");
var author2 = new Author("Leonard", "Nkosi");

var firstBook = new Book("Physics Class 12", author1, 1996);
var secondBook = new Book("Calculus B", author1, 1998);
var thirdBook = new Book("Biology", author2, 2001);


author1.addBook(firstBook);
author1.addBook(secondBook);
author2.addBook(thirdBook);
author1.addBook(firstBook);

console.log(author1.firstName + " " + author1.lastName);
console.log("Books:");
author1.books.forEach(function(book) {
  console.log("# " + book.title + " (" + book.year + ")");
});

author2.addBook(thirdBook);

console.log("\n" + author2.firstName + " " + author2.lastName);
console.log("Books:");
author2.books.forEach(function(book) {
  console.log("# " + book.title + " (" + book.year + ")");
});
