import { AppStateInterface } from '../../app/state/app.state';

export const booksSelector = (appState: AppStateInterface) =>
  appState.books.books;
