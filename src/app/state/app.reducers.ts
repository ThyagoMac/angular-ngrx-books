import { ActionReducerMap } from '@ngrx/store';
import { AppStateInterface } from './app.state';
import { bookReducer } from '../../books/state/book.reducer';

export const appReducers: ActionReducerMap<AppStateInterface> = {
  books: bookReducer,
};
