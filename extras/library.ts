class Book {
  title: string;
  author: string;
  pages: number;

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  };

  getTitle(): string {
    return this.title;
  }
  getBookInfo(): string {
    return `${this.title} by ${this.author}, ${this.pages} pages.`}
};

class Library {
  books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }
  addBook(book: Book): void {
    this.books.push(book);
  };
  getBooks(): string[] { 
    return this.books.map(book => book.title)
  }
  borrowBook(bookTitle: string): string {
    let bookIndex = this.books.findIndex(book => book.title === bookTitle);
    if (bookIndex === -1) {
      return `The book ${bookTitle} is not available in the library`
    } else {
      let desiredBook = this.books.splice(bookIndex, 1)[0]
      return `You borrowed ${desiredBook.title} by ${desiredBook.author}.`
    }
  }
    getTotalPages() : number {
      return this.books.reduce((totalPages, book) => totalPages + book.pages, 0)
    }

    getNumberOfBooks() : number {
      return this.books.length
    }

  }

