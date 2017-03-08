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
    let atHigherLevels = '';

    if(s.AtHigherLevels) {
      atHigherLevels = (<p>At Higher Levels: {s.AtHigherLevels}</p>);
    }

    return (
      <div className="spell-details">
        <h1>{s.Name}</h1>
        <h2>{s.Level} {s.School} ({classes})</h2>
        <p>{s.CastTime} - {s.Components}</p>
        <p>{s.Duration}</p>
        <p>{s.Description}</p>
        {atHigherLevels}
        <p>{s.SourceBook} - Page {s.SourcePage}</p>
      </div>
    );
  }
});
