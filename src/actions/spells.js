'use strict';

module.exports = {
  // Action type constants
  SPELLS_LOADED: 'SPELLS_LOADED',
  CLASS_LOADED: 'CLASS_LOADED',
  SPELLBOOK_ADD: 'SPELLBOOK_ADD',
  SPELLBOOK_REMOVE: 'SPELLBOOK_REMOVE',

  // Action generators
  spellsLoaded: spells => {
    return {
      type: 'SPELLS_LOADED',
      spells: spells
    };
  },
  classLoaded: (className, spells) => {
    return {
      type: 'CLASS_LOADED',
      spells: spells,
      className: className
    };
  },
  spellbookAdd: (spell) => {
    return {
      type: 'SPELLBOOK_ADD',
      spell: spell
    };
  },
  spellbookRemove: (spell) => {
    return {
      type: 'SPELLBOOK_REMOVE',
      spell: spell
    };
  }
};
