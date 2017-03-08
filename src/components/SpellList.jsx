'use strict';

const React = require('react');
const _ = require('lodash');
const SchoolIcon = require('./SchoolIcon');
const SpellbookToggle = require('../containers/SpellbookToggle');
const Link = require('react-router').Link;
const urljoin = require('url-join');

const SpellListEntry = React.createClass({
  displayName: 'SpellListEntry',
  propTypes: function() {
    return {
      spell: React.PropTypes.object.isRequired
    };
  },
  render: function() {
    return (
      <li>
        <SpellbookToggle spell={this.props.spell} />
        <SchoolIcon school={this.props.spell.School} />
        <Link to={urljoin(this.props.linkBase, this.props.spell.Name)}
              activeClassName="active">
          {this.props.spell.Name}
        </Link>
      </li>
    );
  }
});

const SpellListSection = React.createClass({
  displayName: 'SpellListSection',
  propTypes: function() {
    return {
      level: React.PropTypes.number.isRequired,
      spells: React.PropTypes.array.isRequired,
      linkBase: React.PropTypes.string.isRequired
    };
  },
  render: function() {
    if (this.props.spells && this.props.spells.length > 0) {
      const listItems = _.sortBy(this.props.spells, 'Name')
                         .map(s => (
                           <SpellListEntry key={s.Name}
                                           spell={s}
                                           linkBase={this.props.linkBase} />
                         ));
      return (
        <div key={this.props.level} className="spell-list-section">
          <h2>{this.props.level === '0' ? 'Cantrips' : 'Level ' + this.props.level}</h2>
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
      header: React.PropTypes.string,
      linkBase: React.PropTypes.string.isRequired
    };
  },
  render: function() {
    const byLevel = _.groupBy(this.props.spells, 'Level');
    const sections = Object.keys(byLevel)
                           .map(level => <SpellListSection level={level}
                                                           linkBase={this.props.linkBase}
                                                           spells={byLevel[level]}
                                                           key={level} />);

    return (
      <div className="spell-list">
        <h1>{this.props.header}</h1>
        <div className="spell-list-sections scrollbar">
          {sections}
        </div>
    </div>
    );
  }
});
