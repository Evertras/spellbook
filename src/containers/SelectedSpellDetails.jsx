'use strict';

const connect = require('react-redux').connect;
const SpellDetails = require('../components/SpellDetails');

const mapStateToProps = (state, ownProps) => {
  return {
    spellData: state.spells.all[ownProps.spellName]
  };
};

module.exports = connect(mapStateToProps)(SpellDetails);
