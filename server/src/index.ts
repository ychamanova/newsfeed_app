import express, {Request, Response} from 'express';
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const controllers = require('./controllers')

var app = express();
const port = 8080;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'html');

app.get('/search', controllers.search.getSearch);
app.get('/news/today', controllers.news.getToday);
app.get('/news/thisWeek', controllers.news.getWeek);
app.get('/books', controllers.books.getBooks);

// catch 404 and forward to error handler
app.use(function (req: Request, res:Response, next) {
  next(createError(404));
});

// error handler
interface customError extends Error {
  status: number;
  message: string;
}

app.use(function (err: customError, req: Request, res: Response) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
module.exports = app;
