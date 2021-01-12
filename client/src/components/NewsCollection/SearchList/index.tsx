import React from 'react';
import { SearchItem } from '../../../types';
import { SearchCard } from './SearchCard';

import './styles.css';

interface Props {
  searchItems: SearchItem[];
}

export const SearchList: React.FC<Props> = ({ searchItems }) => {
  return (
    <div className='search-list-container'>
      {searchItems.map((item) => (
        <article key={item._id} className='search-list-item'>
          <SearchCard
            headline={item.headline.main}
            abstract={item.abstract}
            web_url={item.web_url}
            lead_paragraph={item.lead_paragraph}
          />
        </article>
      ))}
    </div>
  );
};
