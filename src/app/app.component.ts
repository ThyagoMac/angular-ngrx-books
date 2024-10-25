import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from '../books/books.model';
import { BookService } from '../books/book.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { bookActions } from '../books/state/book.actions';
import { booksSelector } from '../books/state/book.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx-books';

  store = inject(Store);

  books$ = this.store.select(booksSelector);

  ngOnInit(): void {
    this.store.dispatch(bookActions.loadBooks());
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
