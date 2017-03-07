'use strict';

const React = require('react');
const Link = require('react-router').Link;
const ClassDropMenu = require('./ClassDropMenu');

module.exports = React.createClass({
  displayName: 'Layout',
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  },
  getDefaultProps: function() {
    return {
      children: []
    };
  },
  render: function() {
    return (
      <div>
        <nav>
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
            <li>
              Classes
              <ClassDropMenu />
            </li>
          </ul>
        </nav>
        <div>{this.props.children}</div>
      </div>
    );
  }
});
