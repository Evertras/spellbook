'use strict';

const React = require('react');
const Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <h1>Hi there</h1>
        </header>
        <div>{this.props.children}</div>
        <footer>
          <p>Done!</p>
        </footer>
      </div>
    );
  }
});
