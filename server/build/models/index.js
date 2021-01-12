"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require('axios');
var NYTimesKey = require('../keys').NYTimesKey;
module.exports = {
    news: {
        getToday: function (cb) {
            axios.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=" + NYTimesKey, {
                headers: {
                    Accept: 'application/json',
                },
            })
                .then(function (response) {
                cb(null, response.data.results);
            })
                .catch(function (err) {
                cb(err);
            });
        },
        getWeek: function (cb) {
            axios.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=" + NYTimesKey, {
                headers: {
                    Accept: 'application/json',
                },
            })
                .then(function (response) {
                cb(null, response.data.results);
            })
                .catch(function (err) {
                cb(err);
            });
        },
    },
    search: {
        getSearch: function (term, page, cb) {
            axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&page=" + page + "&api-key=" + NYTimesKey, {
                headers: {
                    Accept: 'application/json',
                },
            })
                .then(function (response) {
                cb(null, response.data.response);
            })
                .catch(function (err) {
                cb(err);
            });
        },
    },
    books: {
        getBooks: function (cb) {
            axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction?api-key=" + NYTimesKey, {
                headers: {
                    Accept: 'application/json',
                },
            })
                .then(function (response) {
                console.log(response.data.results.books);
                cb(null, response.data.results.books);
            })
                .catch(function (err) {
                cb(err);
            });
        },
    },
};
