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
      books: mockBooks,
      status: BookStatus.success,
    };
  })
);

const mockBooks = [
  {
    id: 1,
    name: 'How to create a pickles',
    summary:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex fugit possimus, nihil labore modi ad voluptate officiis nulla, dolores ab magnam consequuntur perspiciatis. Ipsam distinctio, quis deleniti commodi eos ex?',
    author: 'Carl Snow',
  },
  {
    id: 2,
    name: 'Getting started with Angular',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid neque itaque repudiandae hic expedita. Optio quaerat molestias voluptatem animi soluta? Eos facilis ipsam commodi odit, nemo illum? Numquam, sed maiores!',
    author: 'Frank Birl',
  },
  {
    id: 3,
    name: 'Make your own destiny',
    summary:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae magni ab fuga expedita nulla aperiam adipisci officia voluptate tempora consequatur laboriosam soluta quisquam accusantium maiores laudantium aliquid, nemo doloribus molestias.',
    author: 'Jown Castle',
  },
];
