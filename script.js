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

  deleteBooks(index) {
    this.collection.splice(index, 1);
    this.displayBooks();
  }

  displayBooks() {
    const bookSection = document.querySelector('.books');
    bookSection.innerHTML = this.collection.map((book) => `
      <tr>
          <td>"${book.title}" by ${book.author}</td>
          <td><button type="button" class="btn btn-primary remove" >remove</button></td>
          
      </tr>
      `).join('');
    const bookItems = document.querySelectorAll('.remove');
    bookItems.forEach((bookItem) => {
      bookItem.addEventListener('click', this.deleteBooks.bind(this));
    });
    localStorage.setItem('collection', JSON.stringify(this.collection));
  }
}
const newBook = new BookList();

function logSubmit(event) {
  const bookTitle = document.querySelector('#book-title').value;
  const bookAuthor = document.querySelector('#book-author').value;
  newBook.addBooks(bookTitle, bookAuthor);
  newBook.displayBooks();
  document.querySelector('#book-title').value = '';
  document.querySelector('#book-author').value = '';
  event.preventDefault();
}

document.querySelector('#submit-button').addEventListener('submit', () => logSubmit());
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
myLinksContainer.addEventListener('click', () => {
  bookForm.style.display = 'none';
  contactInfo.style.display = 'none';
  list.style.display = 'block';
  addContainer.classList.remove('active');
  contactContainer.classList.remove('active');
  myLinksContainer.classList.add('active');
});
addContainer.addEventListener('click', () => {
  list.style.display = 'none';
  contactInfo.style.display = 'none';
  bookForm.style.display = 'block';
  myLinksContainer.classList.remove('active');
  contactContainer.classList.remove('active');
  addContainer.classList.add('active');
});
contactContainer.addEventListener('click', () => {
  bookForm.style.display = 'none';
  list.style.display = 'none';
  contactInfo.style.display = 'block';
  addContainer.classList.remove('active');
  myLinksContainer.classList.remove('active');
  contactContainer.classList.add('active');
});
