const axios = require('axios');
const { NYTimesKey } = require('../config');

module.exports = {
  news: {
    getToday: (cb) => {
      axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=obama&api-key=f6IjnV1ULMhIiG6WtahhccSj1PTUqZCF`, {
        headers: {
          //'apikey': NYTimesKey,
          Accept: 'application/json',
        },
      })
        .then((results) => {
          cb(null, results.data.response.docs);
        })
        .catch((err) => {
          cb(err);
        });
    }
  }
};
