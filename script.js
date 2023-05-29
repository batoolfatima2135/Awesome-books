let collection = [
  {
    title: 'Lorem Ipsum',
    author: 'Testero Testyy',
  },
  {
    title: 'Second Book',
    author: 'Testero Testyy',
  },
];

function addBooks(title, author) {
  collection.push({
    title,
    author,
  });
}

function displayBooks(collection) {
  const bookSection = document.querySelector('.books');
  bookSection.innerHTML = collection.map((book, index) => `
    <div>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button type="button" onclick="deleteBooks(${index})" id="remove" >remove</button>
        <hr>
    </div>
    `).join('');
}
/* eslint-disable no-unused-vars */
function deleteBooks(index) {
  collection.splice(index, 1);
  displayBooks(collection);
  localStorage.setItem('collection', JSON.stringify(collection));
}

function logSubmit(event) {
  const bookTitle = document.querySelector('#book-title').value;
  const bookAuthor = document.querySelector('#book-author').value;
  addBooks(bookTitle, bookAuthor);
  displayBooks(collection);
  localStorage.setItem('collection', JSON.stringify(collection));
  event.preventDefault();
}

document.querySelector('#submit-button').addEventListener('submit', (e) => logSubmit(e));
if (localStorage.getItem('collection') !== null) {
  collection = JSON.parse(localStorage.getItem('collection'));
  displayBooks(collection);
} else {
  displayBooks(collection);
}
