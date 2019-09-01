/**
 * DOM Elements
 */
const form = document.getElementById("form-book");

/**
 * Book constructor
 */
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

/**
 * ACTIONS
 */
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookTitle = document.getElementById("title-book").value;
  const authorName = document.getElementById("author-book").value;
  const isbnNumber = document.getElementById("isbn-book").value;
  const book = new Book(bookTitle, authorName, isbnNumber);
})
