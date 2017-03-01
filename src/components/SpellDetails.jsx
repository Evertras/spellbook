'use strict';

const React = require('react');

module.exports = React.createClass({
  displayName: 'SpellDetails',
  propTypes: {
    spellData: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <h1>{this.props.spellData.Name}</h1>
    );
  }
});
