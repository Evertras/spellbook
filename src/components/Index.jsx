'use strict';

const React = require('react');
const ClassLink = require('../containers/ClassLink');

module.exports = React.createClass({
  displayName: 'Index',
  render: function() {
    return (
      <div>
        <h1>Index</h1>
        <ul>
          <li><ClassLink selectedClass="wizard">Wizard</ClassLink></li>
        </ul>
      </div>
    );
  }
});
