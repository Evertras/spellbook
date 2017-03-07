'use strict';

const React = require('react');

module.exports = React.createClass({
  displayName: 'DropMenu',
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.arrayOf(React.PropTypes.node)
    ])
  },
  render: function() {
    return(<ul></ul>);
  }
});
