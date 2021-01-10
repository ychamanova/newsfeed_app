import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './styles.css';
import { categories } from './categories';
import { CollectionList } from './CollectionList';
import { SearchList } from './SearchList';
import { Article, SearchItem } from '../../types';

export const NewsCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [category, setCategory] = useState(categories.popularToday);

  const [newsItems, setNewsItems] = useState<Article[]>([]);

  const [searchItems, setSearchItems] = useState<SearchItem[]>([]);

  const [searchMode, setSearchMode] = useState(false);

  const getNews = (category: string) => {
    fetch(`/news/${category}`).then((data) =>
      data.json().then((converted) => {
        setSearchMode(false);
        setNewsItems(converted);
      })
    );
  };

  const performSearch = (term: string) => {
    fetch(`/search?searchTerm=${searchTerm}`).then((data) => {
      data.json().then((converted) => {
        setSearchMode(true);
        setSearchItems(converted.docs);
      });
    });
  };

  React.useEffect(() => {
    getNews(category);
  }, [category]);

  return (
    <main role='main' className='NewsCollection'>
      <ButtonGroup
        variant='text'
        color='primary'
        aria-label='outlined primary button group'
      >
        <Button>Latest News</Button>
        <Button onClick={(e) => setCategory(categories.popularToday)}>
          Popular Today
        </Button>
        <Button onClick={(e) => setCategory(categories.popularThisWeek)}>
          Popular in the Last Week
        </Button>
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
        <input
          type='submit'
          value='Submit'
          onClick={(e) => {
            e.preventDefault();
            performSearch(searchTerm);
          }}
        />
      </form>
      <div className='news-collection-container'>
        {!searchMode ? (
          <CollectionList articlesArray={newsItems} />
        ) : (
          <SearchList searchItems={searchItems} />
        )}
      </div>
    </main>
  );
};
