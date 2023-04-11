const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const logger = require('morgan');
const PORT = process.env.PORT || 8080 || 5000 || 3000

const app = express();

// Settings
app.set('port', PORT);
app.set("json spaces",2)
//app.set('views', path.resolve(__dirname, 'views'));
//app.set('view engine', 'ejs');

// Middlewares
//app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/assets/images/logo.ico')));

// Routes
app.use(require('./routes/api'));
app.use(require('./routes/main'));

// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});


module.exports = app;