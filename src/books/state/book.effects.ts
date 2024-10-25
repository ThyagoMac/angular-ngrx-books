import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookService } from '../book.service';
import { bookActions } from './book.actions';
import { map, switchMap } from 'rxjs';

export const fetchBookEffect = createEffect(
  (actions$ = inject(Actions), bookService = inject(BookService)) => {
    return actions$.pipe(
      ofType(bookActions.loadBooks),
      switchMap(() =>
        bookService
          .getBooksApi()
          .pipe(map((books) => bookActions.loadedBooksSuccess({ books })))
      )
    );
  },
  { functional: true }
);
