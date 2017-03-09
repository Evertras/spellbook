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
      atHigherLevels = (<p><strong>At Higher Levels:</strong> {s.AtHigherLevels}</p>);
    }

    const desc = s.Description.split('\n').filter(d => !!d)
                              .map((d, i) => (
                                <div key={i} className="spell-details-desc-chunk">
                                  {d}
                                </div>
                              ));

    return (
      <div className="spell-details">
        <h1>{s.Name}</h1>
        <h2>{s.Level} {s.School} ({classes})</h2>
        <p><strong>Range:</strong> {s.Range}</p>
        <p><strong>Cast Time:</strong> {s.CastTime}</p>
        <p><strong>Components:</strong> {s.Components}</p>
        <p><strong>Duration:</strong> {s.Duration}</p>
        {desc}
        {atHigherLevels}
        <p>{s.SourceBook} - Page {s.SourcePage}</p>
      </div>
    );
  }
});
