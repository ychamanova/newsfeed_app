"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var controllers = require('./controllers');
var app = express_1.default();
var port = 8080;
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'html');
app.get('/search', controllers.search.getSearch);
app.get('/news/today', controllers.news.getToday);
app.get('/news/thisWeek', controllers.news.getWeek);
app.get('/books', controllers.books.getBooks);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err,
    });
});
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port);
});
module.exports = app;
