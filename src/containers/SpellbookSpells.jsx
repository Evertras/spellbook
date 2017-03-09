'use strict';

const connect = require('react-redux').connect;
const SpellList = require('../components/SpellList');

const mapStateToProps = (state) => {
  return {
    spells: Object.keys(state.spells.spellbook)
                  .map(k => state.spells.all[k]),
    header: 'Spellbook'
  };
};

module.exports = connect(mapStateToProps)(SpellList);
