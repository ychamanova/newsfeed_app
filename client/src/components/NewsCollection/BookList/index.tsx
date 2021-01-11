import React from 'react';
import { Book } from '../../../types';

import './styles.css';

interface Props {
  booksArray: Book[];
}

export const BookList: React.FC<Props> = ({ booksArray }) => {
  return (
    <div className='book-list-container'>
      {booksArray.map((b) => (
        <div className='book-list-item'>
          <h2>{b.title}</h2>
          <div>{b.author}</div>
          <img
            className='book-list-image'
            alt={`${b.title}`}
            src={b.book_image}
          />
          <div>{b.description} </div>
        </div>
      ))}
    </div>
  );
};
