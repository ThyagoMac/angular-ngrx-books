import { createAction, props } from '@ngrx/store';
import { Book } from '../books.model';

const loadBooks = createAction('[Books] Load Books');
const loadedBooksSuccess = createAction(
  '[Books] Loaded Books Success',
  props<{ books: Book[] }>()
);
const addBookAction = createAction('[Books] Add Book', props<Book>());
//const addBookAction = createAction('[Books] Add Book', props<{ book: Book }>)
const deleteBookAction = createAction(
  '[Book] Delete Book',
  props<{ id: number | undefined }>()
);
export const bookActions = {
  loadBooks,
  loadedBooksSuccess,
  addBookAction,
  deleteBookAction,
};
