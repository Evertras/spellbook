'use strict';

const React = require('react');
const ClassSpells = require('../containers/ClassSpells');
const SelectedSpellDetails = require('../containers/SelectedSpellDetails');

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
        <div className="col-half">
          <ClassSpells selectedClass={this.props.params.selectedClass}
                       linkBase={'/spells/' + this.props.params.selectedClass} />
        </div>
        <div className="col-half">
          {spellDetails}
        </div>
      </div>
    );
  }
});
