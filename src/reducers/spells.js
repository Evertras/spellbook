'use strict';

const spellActions = require('../actions/spells');
const _ = require('lodash');

const initialState = {
  all: {},
  byClass: {
    bard: [],
    cleric: [],
    druid: [],
    paladin: [],
    ranger: [],
    sorcerer: [],
    warlock: [],
    wizard: []
  }
};

function spells(state = initialState, action) {
  switch(action.type) {
  case spellActions.SPELLS_LOADED: {
    const newState = _.cloneDeep(state);

    for (const className of Object.keys(state.byClass)) {
      newState.byClass[className] = [];
    }

    for(const s of action.spells) {
      newState.all[s.Name] = s;

      for (const c of s.Classes.map(c => c.toLowerCase())) {
        newState.byClass[c].push(s.Name);
      }
    }

    return newState;
  }

  case spellActions.CLASS_LOADED: {
    const newState = _.cloneDeep(state);

    for (const s of action.spells) {
      newState.all[s.Name] = s;
    }

    newState.byClass[action.className.toLowerCase()] = action.spells.map(s => s.Name);

    return newState;
  }

  default:
    return state;
  }
}

module.exports = spells;
