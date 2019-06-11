const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/index');
const helpers = require('./helpers/index');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.disable('x-powered-by');
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'hbs');

app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partial'),
    defaultLayout: 'main',
    helpers: {
     helpers: helpers,
    }
  })
);

app.set('port', process.env.PORT || 3000);
app.use(routes);

module.exports = app;
