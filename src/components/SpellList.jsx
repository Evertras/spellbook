'use strict';

const React = require('react');
const _ = require('lodash');

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
      const listItems = this.props.spells.map(s => <li key={s.Name}>{s.Name}</li>);
      return (
        <div>
          <h1>{this.props.level === '0' ? 'Cantrips' : 'Level ' + this.props.level}</h1>
          <ul>
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
      spells: React.PropTypes.array.isRequired
    };
  },
  render: function() {
    const byLevel = _.groupBy(this.props.spells, 'Level');
    const sections = Object.keys(byLevel).map(level => <SpellListSection level={level} spells={byLevel[level]} key={level} />);
    return (
      <div>
        {sections}
      </div>
    );
  }
});
