if (localStorage.getItem('collection')) {
  
    collection = JSON.parse(localStorage.getItem('collection'));
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
