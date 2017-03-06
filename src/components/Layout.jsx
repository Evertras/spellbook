'use strict';

const React = require('react');
const Link = require('react-router').Link;
const ClassLink = require('../containers/ClassLink');

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
          <li>
            <ClassLink selectedClass="wizard">Bard</ClassLink>
          </li>
          <li>
            <ClassLink selectedClass="cleric">Cleric</ClassLink>
          </li>
          <li>
            <ClassLink selectedClass="druid">Druid</ClassLink>
          </li>
          <li>
            <ClassLink selectedClass="paladin">Paladin</ClassLink>
          </li>
          <li>
            <ClassLink selectedClass="ranger">Ranger</ClassLink>
          </li>
          <li>
            <ClassLink selectedClass="sorcerer">Sorcerer</ClassLink>
          </li>
          <li>
            <ClassLink selectedClass="warlock">Warlock</ClassLink>
          </li>
          <li>
            <ClassLink selectedClass="wizard">Wizard</ClassLink>
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
