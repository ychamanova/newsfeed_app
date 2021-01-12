import {Request, Response} from 'express';
const models = require('../models');

module.exports = {
  news: {
    getToday: (req: Request, res: Response) => {
      models.news.getToday((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    getWeek: (req: Request, res: Response) => {
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

  books: {
    getBooks: (req, res) => {
      models.books.getBooks((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      });
    },
  },
}