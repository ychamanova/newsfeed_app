import React from 'react';
import { Article } from '../../../types';
import { ArticleCard } from './ArticleCard';

import './styles.css';

interface Props {
  articlesArray: Article[];
}

export const CollectionList: React.FC<Props> = ({ articlesArray }) => {
  return (
    <div>
      {articlesArray.map((a) => (
        <ArticleCard title={a.title} url={a.url} abstract={a.abstract} />
      ))}
    </div>
  );
};
