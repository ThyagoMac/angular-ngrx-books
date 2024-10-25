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
  }),
  on(bookActions.addBookAction, (currentState, payload) => {
    const finalBook = {
      ...payload,
      id: Math.floor(Math.random() * 90000),
    };
    return {
      ...currentState,
      books: [finalBook, ...currentState.books],
      status: BookStatus.success,
    };
  }),
  on(bookActions.deleteBookAction, (currentState, { id }) => {
    return {
      ...currentState,
      books: currentState.books.filter((book) => book.id !== id),
      status: BookStatus.success,
    };
  })
);
