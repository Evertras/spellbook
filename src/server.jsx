'use strict';

const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const http = require('http');
const Express = require('express');
const routes = require('./routes');

const RouterContext = ReactRouter.RouterContext;

const app = new Express();
const server = new http.Server(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
  ReactRouter.match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      if (err) {
        return res.status(500).send(err.message);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      let markup;

      if (renderProps) {
        markup = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
      } else {
        return res.send(404);
      }

      return res.render('index', { markup });
    }
  );
});

const port = process.env.PORT || 8080;
//const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  console.log('Started server...');
});
