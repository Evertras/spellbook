'use strict';

const React = require('react');
const Link = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'Layout',
  propTypes: {
    children: React.PropTypes.arrayOf(React.PropTypes.node)
  },
  getDefaultProps: function() {
    return {
      children: []
    };
  },
  render: function() {
    return (
      <div>
        <header>
          <h1>Hi there</h1>
        </header>
        <ul>
          <li>
            <Link to="/">
              Index
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
        <div>{this.props.children}</div>
        <footer>
          <p>Done!</p>
        </footer>
      </div>
    );
  }
});
