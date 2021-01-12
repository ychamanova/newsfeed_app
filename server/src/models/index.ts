const axios = require('axios');
const { NYTimesKey } = require('../keys');
import {NewYorkTimesBookListApiResponse, NewYorkTimesNewsApiResponse, NewYorkTimesSearchApiResponse, News, SearchResults, Book} from '../types';

module.exports = {
  news: {
    getToday: (cb:(err: Error | null, response?: News[]) => void) => {
      axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${NYTimesKey}`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response: NewYorkTimesNewsApiResponse) => {
          cb(null, response.data.results);
        })
        .catch((err: Error) => {
          cb(err);
        });
    },

    getWeek: (cb:(err: Error | null, response?: News[]) => void) => {
      axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${NYTimesKey}`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response: NewYorkTimesNewsApiResponse) => {
          cb(null, response.data.results);
        })
        .catch((err:Error) => {
          cb(err);
        });
    },
  },
  search: {
    getSearch: (term: string, page: string, cb:(err: Error | null, response?: SearchResults[]) => void) => {
      axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&page=${page}&api-key=${NYTimesKey}`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response: NewYorkTimesSearchApiResponse) => {
          cb(null, response.data.response);
        })
        .catch((err: Error) => {
          cb(err);
        });
    },
  },

  books: {
    getBooks: (cb:(err: Error | null, response?: Book[]) => void) => {
      axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction?api-key=${NYTimesKey}`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response: NewYorkTimesBookListApiResponse) => {
          cb(null, response.data.results.books);
        })
        .catch((err: Error) => {
          cb(err);
        });
    },
  },
};
