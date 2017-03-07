'use strict';

const React = require('react');
const _ = require('lodash');
const SchoolIcon = require('./SchoolIcon');

const SpellListSection = React.createClass({
  displayName: 'SpellListSection',
  propTypes: function() {
    return {
      level: React.PropTypes.number.isRequired,
      spells: React.PropTypes.array.isRequired
    };
  },
  render: function() {
    if (this.props.spells && this.props.spells.length > 0) {
      const listItems = _.sortBy(this.props.spells, 'Name')
                         .map(s =>
                           <li key={s.Name}>
                             <SchoolIcon school={s.School} /> {s.Name}
                           </li>);
      return (
        <div key={this.props.level} className="spell-list-section">
          <h2>{this.props.level === '0' ? 'Cantrips (0 Level)' : 'Level ' + this.props.level}</h2>
          <ul className="spell-list">
            {listItems}
          </ul>
        </div>
      );
    }
  }
});

module.exports = React.createClass({
  displayName: 'SpellList',
  propTypes: function() {
    return {
      spells: React.PropTypes.array.isRequired,
      header: React.PropTypes.string
    };
  },
  render: function() {
    const byLevel = _.groupBy(this.props.spells, 'Level');
    const sections = Object.keys(byLevel)
                           .map(level => <SpellListSection level={level}
                                                           spells={byLevel[level]}
                                                           key={level} />);

    return (
      <div className="spell-list">
        <h1>{this.props.header}</h1>
        {sections}
      </div>
    );
  }
});
