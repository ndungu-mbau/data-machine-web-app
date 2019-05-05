const exphbs = require('express-handlebars');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Hemera = require('nats-hemera');
const nats = require('nats').connect({
  url: process.env.NATS_URL,
});

const hemera = new Hemera(nats, {
  logLevel: 'info',
});

hemera.ready(() => {
  console.log('hemera is for use');
});

const app = express();

const { NODE_ENV: env, API_URL } = process.env;

app.use(morgan());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.engine(
  '.hbs',
  exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    partialsDir: 'views/partials/',
  }),
);

app.set('view engine', '.hbs');

if (env !== 'development') {
  app.use(
    helmet(),
    // minifyHTML({
    //   override: true,
    //   exception_url: false,
    //   htmlMinifier: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     collapseBooleanAttributes: true,
    //     removeAttributeQuotes: true,
    //     removeEmptyAttributes: true,
    //     minifyJS: true,
    //   },
    // }),
    // compression(),
    // minify({
    //   // cache: './bin',
    //   uglifyJsModule: null,
    //   errorHandler: null,
    //   jsMatch: /javascript/,
    //   cssMatch: /css/,
    //   jsonMatch: /json/,
    //   sassMatch: /scss/,
    //   lessMatch: /less/,
    //   stylusMatch: /stylus/,
    //   coffeeScriptMatch: /coffeescript/,
    // }),
  );
}

const config = {
  env,
  API_URL,
};

app.get(['/'], (_, res) =>
  res.render('pages/auth', {
    dev: env === 'development',
    config,
    layout: false,
  }),
);

const spaRoutes = ['/project/:id', '/reports/:id'];

app.get(spaRoutes, (_, res) =>
  res.render('pages/index', {
    dev: env === 'development',
    config: {
      env,
      API_URL,
    },
  }),
);

app.use(express.static('public'));

app.get('*', (_, res) =>
  res.status(404).render('pages/404', {
    layout: false,
  }),
);

module.exports = app;
