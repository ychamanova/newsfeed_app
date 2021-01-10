import React from 'react';
import { SearchItem } from '../../../types';
import { SearchCard } from './SearchCard';

interface Props {
  searchItems: SearchItem[];
}

export const SearchList: React.FC<Props> = ({ searchItems }) => {
  return (
    <div>
      {searchItems.map((item) => (
        <article>
          <SearchCard
            abstract={item.abstract}
            snippet={item.snippet}
            web_url={item.web_url}
            lead_paragraph={item.lead_paragraph}
          />
        </article>
      ))}
    </div>
  );
};
