import axios from 'axios';
import React from 'react';
import { Article } from '../../../types';
import { ArticleCard } from './ArticleCard';

import './styles.css';

interface Props {
  articlesArray: Article[];
}

export const CollectionList: React.FC<Props> = ({ articlesArray }) => {
  return (
    <div className='collection-list-container'>
      {articlesArray.map((a) => (
        <article className='collection-list-item'>
          <ArticleCard title={a.title} url={a.url} abstract={a.abstract} />
        </article>
      ))}
    </div>
  );
};
