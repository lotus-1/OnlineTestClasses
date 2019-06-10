const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const routes = require('./routes/index');
const helpers = require('./views/helpers/index');

const app = express();

app.set('views', path.join(__dirname, 'veiws'));
app.set('veiws engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'veiws', 'layouts'),
    partialsDir: path.join(__dirname, 'veiws', 'partial'),
    defaultLayout: 'main',
    helpers: helpers,
  })
);

app.set('port', process.env.PORT || 3000);
app.use(routes);

module.exports = app;
