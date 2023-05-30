
class bookList {
  constructor()
  {
    this.collection = [];

  }
  addBooks(title, author) {
    collection.push({
      title,
      author,
    });
  }
  displayBooks(collection) {
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
    deleteBooks(index) {
    collection.splice(index, 1);
    
  }
  

}


function deleteBooks(index)
{
  const book = new bookList();
  book.deleteBooks(index);
  book.displayBooks(collection);
  localStorage.setItem('collection', JSON.stringify(collection));
}


 function  logSubmit(event) {
  const bookTitle = document.querySelector('#book-title').value;
  const bookAuthor = document.querySelector('#book-author').value;
  const newBook = new bookList();
  newBook.addBooks(bookTitle, bookAuthor);
  newBook.displayBooks(collection);
  localStorage.setItem('collection', JSON.stringify(collection));
  event.preventDefault();
}

document.querySelector('#submit-button').addEventListener('submit', (e) => logSubmit(e));
const newBook = new bookList();
if (localStorage.getItem('collection') !== null) {
  collection = JSON.parse(localStorage.getItem('collection'));
  newBook.displayBooks(collection);
} else {
  newBook.displayBooks(collection);
}
