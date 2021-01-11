const axios = require('axios');
const { NYTimesKey } = require('../keys');

module.exports = {
  news: {
    getToday: (cb) => {
      axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${NYTimesKey}`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          cb(null, response.data.results);
        })
        .catch((err) => {
          cb(err);
        });
    },

    getWeek: (cb) => {
      axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${NYTimesKey}`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          cb(null, response.data.results);
        })
        .catch((err) => {
          cb(err);
        });
    },
  },
  search: {
    getSearch: (term, page, cb) => {
      axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&page=${page}&api-key=${NYTimesKey}`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          cb(null, response.data.response);
        })
        .catch((err) => {
          cb(err);
        });
    },
  },

  books: {
    getBooks: (cb) => {
      axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction?api-key=${NYTimesKey}`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          console.log(response.data.results.books)
          cb(null, response.data.results.books);
        })
        .catch((err) => {
          cb(err);
        });
    },
  },
};
