'use strict';

const connect = require('react-redux').connect;
const spellActions = require('../actions/spells');
const Toggle = require('../components/Toggle');

const mapStateToProps = (state, ownProps) => {
  return {
    isIncluded: !!state.spells.spellbook[ownProps.spell.Name]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    cbAdd: () => dispatch(spellActions.spellbookAdd(ownProps.spell)),
    cbRemove: () => dispatch(spellActions.spellbookRemove(ownProps.spell))
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Toggle);
