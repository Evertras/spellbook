'use strict';

const React = require('react');

module.exports = React.createClass({
  displayName: 'SpellDetails',
  propTypes: {
    spellData: React.PropTypes.object.isRequired
  },
  render: function() {
    const s = this.props.spellData;
    const classes = s.Classes.join(', ');
    return (
      <div className="spell-details">
        <h1>{s.Name}</h1>
        <h3>{s.Level} {s.School} ({classes})</h3>
        <p>{s.CastTime} - {s.Components}</p>
        <p>{s.Duration}</p>
        <p>{s.Description}</p>
        <p>{s.SourceBook} - {s.SourcePage}</p>
      </div>
    );
  }
});
