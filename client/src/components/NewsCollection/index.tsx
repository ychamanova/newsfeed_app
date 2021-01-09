import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './styles.css';
import { categories } from './categories';

interface Items {
  url: string;
  title: string;
  abstract: string;
  media: Media[];
}

interface Media {
  type: string;
  caption: string;
  'media-metadata': MediaMeta[];
}

interface MediaMeta {
  url: string;
  height: number;
  width: number;
}

export const NewsCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [category, setCategory] = useState(categories.popularToday);

  const [newsItems, setNewsItems] = useState<Items[]>([]);

  const getNews = (category: string) => {
    fetch(`/news/${category}`).then((data) =>
      data.json().then((converted) => {
        console.log(converted);
        setNewsItems(converted);
      })
    );
  };

  React.useEffect(() => {
    getNews(category);
  }, [category]);

  return (
    <div className='NewsCollection'>
      <ButtonGroup
        variant='text'
        color='primary'
        aria-label='outlined primary button group'
      >
        <Button>Latest News</Button>
        <Button>Popular Today</Button>
        <Button>Popular in the Last Week</Button>
        <Button>Arts</Button>
        <Button>Technology</Button>
        <Button>Design</Button>
      </ButtonGroup>
      <form>
        <label>
          Search Articles
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type='text'
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};
