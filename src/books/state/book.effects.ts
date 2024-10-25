import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookService } from '../book.service';
import { bookActions } from './book.actions';
import { catchError, map, switchMap } from 'rxjs';

export const fetchBookEffect = createEffect(
  (actions$ = inject(Actions), bookService = inject(BookService)) => {
    return actions$.pipe(
      ofType(bookActions.loadBooks),
      switchMap(() =>
        bookService.getBooksApi().pipe(
          map((books) => bookActions.loadedBooksSuccess({ books })) /*,
          catchError(err => call error action seeting status error)
          */
        )
      )
    );
  },
  { functional: true }
);
