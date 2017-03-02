'use strict';

const path = require('path');
const React = require('react');
const Redux = require('redux');
const Provider = require('react-redux').Provider;
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const http = require('http');
const Express = require('express');
const routes = require('./routes');
const reducers = require('./reducers');
const spellActions = require('./actions/spells');
const allSpells = require('./data/allSpells');

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
      let preloadedState;

      if (renderProps) {
        const store = Redux.createStore(reducers);
        const unsub = store.subscribe(() => {
          markup = ReactDOMServer.renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );
          preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
        });
        store.dispatch(spellActions.spellsLoaded(allSpells));
        unsub();
      } else {
        return res.sendStatus(404);
      }

      return res.render('index', { markup, preloadedState });
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
