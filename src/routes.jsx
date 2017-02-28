'use strict';

const React = require('react');
const reactRouter = require('react-router');
const Layout = require('./components/Layout');
const Index = require('./components/Index');
const About = require('./components/About');

const Route = reactRouter.Route;
const IndexRoute = reactRouter.IndexRoute;

module.exports = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Index} />
    <Route path="about" component={About} />
  </Route>
);
