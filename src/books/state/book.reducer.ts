import { createReducer, on } from '@ngrx/store';
import { Book } from '../books.model';
import { bookActions } from './book.actions';

enum BookStatus {
  loading = 'loading',
  pending = 'pending',
  error = 'error',
  success = 'success',
}

export interface BookStateInterface {
  books: Book[];
  error: '' | null;
  status: BookStatus;
}

const initialState: BookStateInterface = {
  books: [],
  error: null,
  status: BookStatus.pending,
};

export const bookReducer = createReducer(
  initialState,
  on(bookActions.loadBooks, (currentState) => {
    return {
      ...currentState,
      status: BookStatus.loading,
    };
  }),
  on(bookActions.loadedBooksSuccess, (currentState, payload) => {
    return {
      ...currentState,
      books: payload.books,
      status: BookStatus.success,
    };
  })
);
