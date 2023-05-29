if (localStorage.getItem('collection')) {
  
    collection = JSON.parse(localStorage.getItem('collection'));
    displayBooks(collection);
  } else {
    collection = [];
  }
  
  const button = document.getElementById('submit');
  
  function addBooks(title, author) {
    collection.push({ title, author });
  }
  
  button.addEventListener('click', () => {
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
  
    addBooks(title, author);
    localStorage.setItem('collection', JSON.stringify(collection));
 
  });
  console.log(collection)

function displayBooks(collection){
  // const bookElement = document.getElementById("container");
  // bookElement.innerHTML = collection.map((book, index) =>
  // `<div>
  //     <p>${book.title}</p>
  //     <p>${book.author}</p>
  //     <button onclick="deleteBooks(${index})" id="remove" >remove</button>
  //   </div>
  //   <hr><br>`
  // )
  // .join('');
  collection.forEach((book, index) => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `<p>Title: ${book.title}</p><p>Author: ${book.author}</p>`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteBooks(index);
      displayBooks(); // Refresh the display after deletion
    });

    bookElement.appendChild(deleteButton);
    document.getElementById('container').appendChild(bookElement);
  });
}

function deleteBooks(index){
  collection.splice(index, 1);
}