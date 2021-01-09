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
  }
}
