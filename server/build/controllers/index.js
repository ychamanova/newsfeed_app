"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models = require('../models');
module.exports = {
    news: {
        getToday: function (req, res) {
            models.news.getToday(function (err, results) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(results);
                }
            });
        },
        getWeek: function (req, res) {
            models.news.getWeek(function (err, results) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(results);
                }
            });
        },
    },
    search: {
        getSearch: function (req, res) {
            models.search.getSearch(req.query.searchTerm, req.query.page, function (err, results) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(results);
                }
            });
        },
    },
    books: {
        getBooks: function (req, res) {
            models.books.getBooks(function (err, results) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(results);
                }
            });
        },
    },
};
