import { createAction, props } from '@ngrx/store';
import { Book } from '../books.model';

const loadBooks = createAction('[Books] Load Books');
const loadedBooksSuccess = createAction(
  '[Books] Loaded Books Success',
  props<{ books: Book[] }>()
);

export const bookActions = {
  loadBooks,
  loadedBooksSuccess,
};
