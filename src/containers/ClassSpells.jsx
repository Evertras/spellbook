'use strict';

const SpellList = require('../components/SpellList');
const connect = require('react-redux').connect;

const mapStateToProps = (state, ownProps) => {
  return {
    spells: state.spells.byClass[ownProps.selectedClass.toLowerCase()]
                              .map(n => state.spells.all[n]),
    header: ownProps.selectedClass
  };
};

const ClassSpells = connect(mapStateToProps)(SpellList);

module.exports = ClassSpells;
