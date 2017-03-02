'use strict';

const React = require('react');
const ClassSpells = require('../containers/ClassSpells');

module.exports = React.createClass({
  displayName: 'Index',
  render: function() {
    return (
      <div>
        <ClassSpells selectedClass="Cleric" />
      </div>
    );
  }
});
