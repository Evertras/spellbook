'use strict';

const React = require('react');
const reactRouter = require('react-router');
const Layout = require('./components/Layout');
const Index = require('./components/Index');

const Route = reactRouter.Route;
const IndexRoute = reactRouter.IndexRoute;

module.exports = (
  <Route path="/" components={Layout}>
    <IndexRoute components={Index}/>
  </Route>
);
