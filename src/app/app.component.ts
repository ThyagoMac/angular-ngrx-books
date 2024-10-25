import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { bookActions } from '../books/state/book.actions';
import { booksSelector } from '../books/state/book.selector';
import { Book } from '../books/books.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx-books';

  store = inject(Store);
  books$ = this.store.select(booksSelector);

  newBook: Book = {
    name: '',
    summary: '',
    author: '',
  };

  ngOnInit(): void {
    this.store.dispatch(bookActions.loadBooks());
  }

  addBook(e: Event) {
    e.preventDefault();
    this.store.dispatch(bookActions.addBookAction(this.newBook));
    this.newBook = {
      name: '',
      summary: '',
      author: '',
    };
  }

  deleteBook(id: number | undefined) {
    this.store.dispatch(bookActions.deleteBookAction({ id }));
  }

  /* APIO request with CommonModule
  bookService = inject(BookService);
  books$: Observable<Book[]> = this.bookService.getBooksApi();
  */
  /* common
  books: Book[] = [];
  bookService = inject(BookService);

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  } */
}
