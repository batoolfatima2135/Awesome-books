class BookList {
  constructor() {
    if (localStorage.getItem('collection') !== null) {
      this.collection = JSON.parse(localStorage.getItem('collection'));
    } else {
      this.collection = [];
    }
  }

  addBooks(title, author) {
    this.collection.push({
      title,
      author,
    });
  }

  displayBooks() {
    const bookSection = document.querySelector('.books');
    bookSection.innerHTML = this.collection.map((book, index) => `
      <tr>
          <td>"${book.title}" by ${book.author}</td>
          <td><button type="button" class="btn btn-primary" onclick="deleteBooks(${index})" id="remove" >remove</button></td>
          
      </tr>
      `).join('');
    localStorage.setItem('collection', JSON.stringify(this.collection));
  }

  /* eslint-disable no-unused-vars */
  deleteBooks(index) {
    this.collection.splice(index, 1);
  }
}

function deleteBooks(index) {
  const book = new BookList();
  book.deleteBooks(index);
  book.displayBooks();
}

function logSubmit(event) {
  const bookTitle = document.querySelector('#book-title').value;
  const bookAuthor = document.querySelector('#book-author').value;
  const newBook = new BookList();
  newBook.addBooks(bookTitle, bookAuthor);
  newBook.displayBooks();

  event.preventDefault();
}

document.querySelector('#submit-button').addEventListener('submit', (e) => logSubmit(e));
const newBook = new BookList();
newBook.displayBooks();

//Getting date and time
dateTime = document.getElementById('date');
var currentDate = new Date();
var date = currentDate.toDateString();
var time = currentDate.toLocaleTimeString();
dateTime.innerHTML = date +" " + time

