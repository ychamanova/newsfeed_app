import React, { useState } from 'react';
import './styles.css';
import { categories } from './categories';
import { ArticleList } from './ArticleList';
import { SearchList } from './SearchList';
import { BookList } from './BookList';
import { JumpToTopButton } from './JumpToTopButton';
import { Article, SearchItem, Book } from '../../types';
import { fetchSearchResults, fetchNews, fetchBooks } from '../../utility/';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CircularProgress from '@material-ui/core/CircularProgress';

export const NewsCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(categories.popularToday);
  const [newsItems, setNewsItems] = useState<Article[]>([]);
  const [searchItems, setSearchItems] = useState<SearchItem[]>([]);
  const [bookItems, setBookItems] = useState<Book[]>([]);
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

  const getBooks = async () => {
    setSearchTerm('');
    setLoading(true);
    const results = await fetchBooks();
    setBookItems(results);
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

  //sort books by rank
  const handleSortByRank = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const prev = [...bookItems];
    prev.sort((a: Book, b: Book) => {
      return a.rank - b.rank;
    });
    setBookItems(prev);
    setLoading(false);
  };

  //sort books by weeks on bestseller list
  const handleSortByWeeksOnTheList = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const prev = [...bookItems];
    prev.sort((a: Book, b: Book) => {
      return a.weeks_on_list - b.weeks_on_list;
    });
    setBookItems(prev);
    setLoading(false);
  };

  //when page loads, and anytime category changes, perform search
  React.useEffect(() => {
    // if (category === 'search') {
    //   handleInitialSearch(searchTerm);
    // } else
    if (category === 'books') {
      getBooks();
    }
    if (category === 'today' || category === 'thisWeek') {
      getNews(category);
    }
    //Do not watch searchTerm to limit number of API requests
  }, [category]);
  // eslint-disable-next-line
  return (
    <main role='main' id='top' className='NewsCollection'>
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
        <Button onClick={(e) => setCategory(categories.books)}>
          New York Times Bestsellers
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
        ) : category === 'search' ? (
          <>
            <SearchList searchItems={searchItems} />
            {searchLoading ? (
              <CircularProgress color='inherit' />
            ) : (
              <>
                <button
                  className='news-collection-load-more'
                  onClick={handleGetMoreSearchResults}
                >
                  Load more search results...
                </button>
                <JumpToTopButton show={true} customContent={'Go to top'} />
              </>
            )}
          </>
        ) : category === 'books' ? (
          <>
            <button
              className='news-collection-sort-button'
              onClick={(e) => handleSortByWeeksOnTheList(e)}
            >
              Sort By Weeks on the List
            </button>
            <button
              className='news-collection-sort-button'
              onClick={(e) => handleSortByRank(e)}
            >
              Sort By Rank
            </button>
            <BookList booksArray={bookItems} />
            <JumpToTopButton show={true} customContent={'Go to top'} />
          </>
        ) : (
          <ArticleList articlesArray={newsItems} />
        )}
      </div>
    </main>
  );
};
