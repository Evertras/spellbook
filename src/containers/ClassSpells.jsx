'use strict';

const SpellList = require('../components/SpellList');
const connect = require('react-redux').connect;

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    spells: state.spells.byClass[ownProps.params.selectedClass.toLowerCase()].map(n => state.spells.all[n])
  };
};

const ClassSpells = connect(
  mapStateToProps
)(SpellList);

module.exports = ClassSpells;
