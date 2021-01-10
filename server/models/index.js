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
  }
};
