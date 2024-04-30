window.onload = function() {
  // Add event listener to the search form
  document.querySelector('.searchbar').addEventListener('submit', function(event) {
      event.preventDefault();
      searchBooks();
  });

  function searchBooks() {
      const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
      const books = document.querySelectorAll('.book');

      books.forEach(book => {
          const title = book.querySelector('h3').textContent.trim().toLowerCase();
          if (title.includes(searchTerm)) {
              book.style.display = 'block';
          } else {
              book.style.display = 'none';
          }
      });
  }
}