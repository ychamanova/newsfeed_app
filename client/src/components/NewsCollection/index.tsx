import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import { categories } from './categories';
import { ArticleList } from './ArticleList';
import { SearchList } from './SearchList';
import { Article, SearchItem } from '../../types';

const fetchSearchResults = async (searchTerm: string, searchPage: number) => {
  const data = await fetch(
    `/search?searchTerm=${searchTerm}&page=${searchPage}`
  );
  const converted = await data.json();
  return converted.docs;
};

export const NewsCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(categories.popularToday);
  const [newsItems, setNewsItems] = useState<Article[]>([]);
  const [searchItems, setSearchItems] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchPage, setSearchPage] = useState(1);

  const getNews = (category: string) => {
    setSearchTerm('');
    setLoading(true);
    fetch(`/news/${category}`).then((data) =>
      data.json().then((converted) => {
        setNewsItems(converted);
        setLoading(false);
      })
    );
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
    const results = await fetchSearchResults(searchTerm, searchPage);
    setSearchItems((prevItems) => prevItems.concat(results));
    setSearchPage((prev) => prev + 1);
  };

  //anytime category changes, perform search
  React.useEffect(() => {
    if (category === 'search') {
      handleInitialSearch(searchTerm);
    } else {
      getNews(category);
    }
    //To limit API calls on search Term, do not watch searchTerm
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
            <button onClick={handleGetMoreSearchResults}>Get more...</button>
          </>
        )}
      </div>
    </main>
  );
};
