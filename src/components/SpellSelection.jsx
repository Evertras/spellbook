'use strict';

const React = require('react');
const ClassSpells = require('../containers/ClassSpells');

module.exports = React.createClass({
  displayName: 'SpellSelection',
  propTypes: {
    params: React.PropTypes.shape({
      selectedClass: React.PropTypes.string.isRequired
    })
  },
  render: function() {
    return (
      <div>
        <ClassSpells selectedClass={this.props.params.selectedClass} />
      </div>
    );
  }
});
