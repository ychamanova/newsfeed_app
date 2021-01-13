import {Request, Response} from 'express';
const models = require('../models');
import {Book, Article, SearchItem} from '../types';

module.exports = {
  news: {
    getToday: (req: Request, res: Response) => {
      models.news.getToday((err: Error | null, results?: Article[]) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    getWeek: (req: Request, res: Response) => {
      models.news.getWeek((err: Error | null, results?: Article[]) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },
  },

  search: {
    getSearch: (req: Request, res: Response) => {
      models.search.getSearch(req.query.searchTerm, req.query.page, (err: Error | null, results?: SearchItem[]) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      });
    },
  },

  books: {
    getBooks: (req: Request, res:Response) => {
      models.books.getBooks((err: Error | null, results?: Book[]) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      });
    },
  },
}
