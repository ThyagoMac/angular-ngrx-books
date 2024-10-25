import { createAction } from '@ngrx/store';

const loadBooks = createAction('[Books] Load Books');

export const bookActions = {
  loadBooks,
};
