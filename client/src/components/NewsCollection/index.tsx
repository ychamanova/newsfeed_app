import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import { categories } from './categories';
import { ArticleList } from './ArticleList';
import { SearchList } from './SearchList';
import { Article, SearchItem } from '../../types';

export const NewsCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(categories.popularToday);
  const [newsItems, setNewsItems] = useState<Article[]>([]);
  const [searchItems, setSearchItems] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(true);

  const performSearch = async (term: string) => {
    setCategory(categories.search);
    setLoading(true);
    const results = await fetchSearchResults(term);
    setSearchItems(results);
    setLoading(false);
  };

  const fetchSearchResults = async (searchTerm: string) => {
    const data = await fetch(`/search?searchTerm=${searchTerm}`);
    const converted = await data.json();
    return converted.docs;
  };

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
  //anytime category changes, perform search
  React.useEffect(() => {
    if (category === 'search') {
      performSearch(searchTerm);
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
            performSearch(searchTerm);
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
          <SearchList searchItems={searchItems} />
        )}
      </div>
    </main>
  );
};
