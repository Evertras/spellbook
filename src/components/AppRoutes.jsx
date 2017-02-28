'use strict';

const React = require('react');
const reactRouter = require('react-router');
const routes = require('../routes');

const Router = reactRouter.Router;
const browserHistory = reactRouter.browserHistory;

module.exports = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0,0)} />
    );
  }
});
