'use strict';

module.exports = {
  // Action type constants
  SPELLS_LOADED: 'SPELLS_LOADED',
  CLASS_LOADED: 'CLASS_LOADED',

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
  }
};
