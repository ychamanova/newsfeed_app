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
    getSearch: (term, cb) => {
      axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${NYTimesKey}`, {
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          console.log(response.data.response)
          cb(null, response.data.response);
        })
        .catch((err) => {
          cb(err);
        });
    },
  },
};
