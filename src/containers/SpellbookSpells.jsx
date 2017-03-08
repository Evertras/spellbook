'use strict';

const connect = require('react-redux').connect;
const SpellList = require('../components/SpellList');

const mapStateToProps = (state) => {
  return {
    spells: state.spells.spellbook.map(s => state.spells.all[s]),
    header: 'Spellbook'
  };
};

module.exports = connect(mapStateToProps)(SpellList);
