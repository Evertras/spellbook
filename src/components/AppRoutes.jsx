'use strict';

const React = require('react');
const reactRouter = require('react-router');
const routes = require('../routes');

module.expots = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0,0)} />
    );
  }
});
