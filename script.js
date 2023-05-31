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
  let bookTitle = document.querySelector('#book-title').value;
  let bookAuthor = document.querySelector('#book-author').value;
  const newBook = new BookList();
  newBook.addBooks(bookTitle, bookAuthor);
  newBook.displayBooks();
  document.querySelector('#book-title').value = ''; 
  document.querySelector('#book-author').value = '';
  event.preventDefault();
}

document.querySelector('#submit-button').addEventListener('submit', (e) => logSubmit(e));
const newBook = new BookList();
newBook.displayBooks();

// Getting date and time
const dateTime = document.getElementById('date');
const currentDate = new Date();
const date = currentDate.toDateString();
const time = currentDate.toLocaleTimeString();
dateTime.innerHTML = `${date} ${time}`;

// navigation links
const myLinksContainer = document.getElementById('list');
const addContainer = document.getElementById('new');
const contactContainer = document.getElementById('contact');
const list = document.getElementById('book-list');
const bookForm = document.getElementById('book-form');
const contactInfo = document.getElementById('contact-info');
myLinksContainer.addEventListener('click', (e) => {
  bookForm.style.display = 'none';
  contactInfo.style.display = 'none';
  list.style.display = 'block';
  addContainer.classList.remove("active");
  contactContainer.classList.remove("active");
  myLinksContainer.classList.add("active");


});
addContainer.addEventListener('click', (e) => {
  list.style.display = 'none';
  contactInfo.style.display = 'none';
  bookForm.style.display = 'block';
  myLinksContainer.classList.remove("active");
  contactContainer.classList.remove("active");
  addContainer.classList.add("active");

});
contactContainer.addEventListener('click', (e) => {
  bookForm.style.display = 'none';
  list.style.display = 'none';
  contactInfo.style.display = 'block';
  addContainer.classList.remove("active");
  myLinksContainer.classList.remove("active");
  contactContainer.classList.add("active");
});
