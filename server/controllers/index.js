const models = require('../models');

module.exports = {
  news: {
    getToday: (req, res) => {
      models.news.getToday((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    getWeek: (req, res) => {
      models.news.getWeek((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },
  },

  search: {
    getSearch: (req, res) => {
      models.search.getSearch(req.query.searchTerm, req.query.page, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      });
    },
  },
}
