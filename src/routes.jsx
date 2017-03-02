'use strict';

const React = require('react');
const Redux = require('redux');
const reactRouter = require('react-router');
const Layout = require('./components/Layout');
const Index = require('./components/Index');
const About = require('./components/About');
const Provider = require('react-redux').Provider;
const reducers = require('./reducers');

const Route = reactRouter.Route;
const IndexRoute = reactRouter.IndexRoute;

const store = Redux.createStore(reducers);

module.exports = (
  <Provider store={store}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index} />
      <Route path="about" component={About} />
    </Route>
  </Provider>
);
