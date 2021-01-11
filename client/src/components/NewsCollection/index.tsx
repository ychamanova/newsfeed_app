import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import { categories } from './categories';
import { ArticleList } from './ArticleList';
import { SearchList } from './SearchList';
import { Article, SearchItem } from '../../types';

import { fetchSearchResults, fetchNews } from '../../utility/';

export const NewsCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(categories.popularToday);
  const [newsItems, setNewsItems] = useState<Article[]>([]);
  const [searchItems, setSearchItems] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchPage, setSearchPage] = useState(1);

  const getNews = async (category: string) => {
    setSearchTerm('');
    setLoading(true);
    const results = await fetchNews(category);
    setNewsItems(results);
    setLoading(false);
  };

  const handleInitialSearch = async (term: string) => {
    setCategory(categories.search);
    setLoading(true);
    const results = await fetchSearchResults(term, 1);
    setSearchItems(results);
    setLoading(false);
    setSearchPage(2);
  };

  const handleGetMoreSearchResults = async () => {
    setSearchLoading(true);
    const results = await fetchSearchResults(searchTerm, searchPage);
    setSearchItems((prevItems) => prevItems.concat(results));
    setSearchPage((prev) => prev + 1);
    setSearchLoading(false);
  };

  //anytime category changes, perform search
  React.useEffect(() => {
    if (category === 'search') {
      handleInitialSearch(searchTerm);
    } else {
      getNews(category);
    }
    //Do not watch searchTerm to limit number of API requests
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <main role='main' className='NewsCollection'>
      <ButtonGroup
        variant='text'
        color='primary'
        aria-label='outlined primary button group'
      >
        <Button onClick={(e) => setCategory(categories.popularToday)}>
          Popular Today
        </Button>
        <Button onClick={(e) => setCategory(categories.popularThisWeek)}>
          Popular in the Last Week
        </Button>
      </ButtonGroup>
      <form>
        <label>
          Search Articles
          <input
            className='news-collection-input'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type='text'
          />
        </label>
        <input
          className='news-collection-submit'
          type='submit'
          value='Submit'
          onClick={(e) => {
            e.preventDefault();
            setSearchPage(1);
            handleInitialSearch(searchTerm);
          }}
        />
      </form>
      <div className='news-collection-container'>
        {loading ? (
          <div className='news-collection-loader'>
            <CircularProgress color='inherit' />
          </div>
        ) : category !== 'search' ? (
          <ArticleList articlesArray={newsItems} />
        ) : (
          <>
            <SearchList searchItems={searchItems} />
            {searchLoading ? (
              <CircularProgress color='inherit' />
            ) : (
              <button
                className='news-collection-load-more'
                onClick={handleGetMoreSearchResults}
              >
                Load more search results...
              </button>
            )}
          </>
        )}
      </div>
    </main>
  );
};
