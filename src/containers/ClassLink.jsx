'use strict';

const React = require('react');
const Link = require('react-router').Link;

const ClassLink = React.createClass({
  displayName: 'ClassLink',
  propTypes: {
    selectedClass: React.PropTypes.string.isRequired,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  },
  render: function() {
    return (
      <Link to={'/spells/' + this.props.selectedClass} activeClassName="active">
        {this.props.children}
      </Link>
    );
  }
});

module.exports = ClassLink;
