import React from 'react';
import { Article } from '../../../types';
import { ArticleCard } from './ArticleCard';

import './styles.css';

interface Props {
  articlesArray: Article[];
}

export const ArticleList: React.FC<Props> = ({ articlesArray }) => {
  return (
    <div className='article-list-container'>
      {articlesArray.map((a) => (
        <article key={a.id} className='article-list-item'>
          <ArticleCard title={a.title} url={a.url} abstract={a.abstract} />
        </article>
      ))}
    </div>
  );
};
