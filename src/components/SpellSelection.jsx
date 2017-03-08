'use strict';

const React = require('react');
const ClassSpells = require('../containers/ClassSpells');
const SelectedSpellDetails = require('../containers/SelectedSpellDetails');
const SpellbookSpells = require('../containers/SpellbookSpells');

module.exports = React.createClass({
  displayName: 'SpellSelection',
  propTypes: {
    params: React.PropTypes.shape({
      selectedClass: React.PropTypes.string.isRequired,
      spellName: React.PropTypes.string
    })
  },
  render: function() {
    const spellName = this.props.params.spellName;
    let spellDetails;

    if(spellName) {
      spellDetails = (<SelectedSpellDetails spellName={spellName} />);
    } else {
      spellDetails = (<div />);
    }

    return (
      <div className="col-parent">
        <div className="col-spell-list">
          <ClassSpells selectedClass={this.props.params.selectedClass}
                       linkBase={'/spells/' + this.props.params.selectedClass} />
        </div>
        <div className="col-middle">
              {spellDetails}
        </div>
        <div className="col-spell-list">
          <SpellbookSpells linkBase={'/spells/' + this.props.params.selectedClass} />
        </div>
      </div>
    );
  }
});
