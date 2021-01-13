import React from 'react';
import { Book } from '../../../types';
import Modal from '@material-ui/core/Modal';

import './styles.css';

interface Props {
  booksArray: Book[];
}

export const BookList: React.FC<Props> = ({ booksArray }) => {
  const [open, setOpen] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpen(true);
    setActiveIdx(index);
  };
  const handleClose = () => {
    setOpen(false);
    setActiveIdx(null);
  };

  return (
    <div className='book-list-container'>
      {booksArray.map((b, index) => (
        <div className='book-list-item' key={b.primary_isbn10}>
          <h2>{b.title}</h2>
          <div>{b.author}</div>
          <img
            className='book-list-image'
            alt={`${b.title}`}
            src={b.book_image}
          />
          <div>{b.description} </div>
          <button
            className={'book-list-modal-button'}
            onClick={() => handleOpen(index)}
          >
            Purchase Options
          </button>

          {activeIdx !== null ? (
            <Modal
              open={open}
              onClose={handleClose}
              BackdropProps={{
                style: { backgroundColor: 'rgba(52, 52, 52, 0.1)' },
              }}
            >
              <ul className='book-list-modal'>
                {booksArray[activeIdx].title}
                {booksArray[activeIdx].buy_links.map((e) => (
                  <li className='book-list-purchase-item' key={e.url}>
                    {e.name}
                    <br />
                    <br />
                    <a href={e.url} target='_blank' rel='noreferrer'>
                      Purchase link
                    </a>
                  </li>
                ))}
              </ul>
            </Modal>
          ) : null}
        </div>
      ))}
    </div>
  );
};
