function renderBook(book) {

  const cover = book.image
    ? `<img src="${book.image}" alt="Cover of ${book.title}" />`
    : '';

  return `
    <div class="book-entry">
      ${cover}
      <div class="book-info">
        <span class="book-title">${book.title}</span>
        <span class="book-author">${book.author}</span>
        ${book.opinions ? `<p class="book-opinions">${book.opinions}</p>` : ''}
      </div>
    </div>`;
}

async function loadBooks() {
  const res = await fetch('books.json');
  const books = await res.json();
  document.getElementById('books-container').innerHTML = books.map(renderBook).join('');
}

loadBooks();
