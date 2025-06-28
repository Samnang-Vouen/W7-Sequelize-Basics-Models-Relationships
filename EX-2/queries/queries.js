import { Author, Book } from '../models/index.js';

(async () => {
  // Fetch all books by a given author (e.g., Kim Ang)
  const kim = await Author.findOne({ where: { name: 'Kim Ang' } });
  const kimBooks = await kim.getBooks();
  console.log(`Books by Kim Ang:`);
  kimBooks.forEach(book => {
    console.log(`- ${book.title} (${book.publicationYear})`);
  });

  // Create a new book for an existing author using createBook()
  await kim.createBook({
    title: 'Kim Book 3',
    publicationYear: 2024,
    pages: 180
  });
  console.log(`New book added for Kim.`);

  // List all authors along with their books
  const allAuthors = await Author.findAll({
    include: Book
  });

  console.log(`All authors and their books:`);
  allAuthors.forEach(author => {
    console.log(`Author: ${author.name}`);
    author.Books.forEach(book => {
      console.log(`  - ${book.title} (${book.publicationYear}, ${book.pages} pages)`);
    });
  });
})();