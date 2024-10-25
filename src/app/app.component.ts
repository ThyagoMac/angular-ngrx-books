import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from '../books/books.model';
import { BookService } from '../books/book.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent /* implements OnInit */ {
  title = 'angular-ngrx-books';

  bookService = inject(BookService);
  books$: Observable<Book[]> = this.bookService.getBooksApi();

  /* common
  books: Book[] = [];
  bookService = inject(BookService);

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  } */
}
