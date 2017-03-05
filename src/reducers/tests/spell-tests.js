'use strict';

const expect = require('chai').expect;
const spellReducer = require('../spells');
const spellActions = require('../../actions/spells');

const spells = [
  {
    Name: 'Sample Spell 1',
    Classes: ['Bard', 'Warlock']
  },
  {
    Name: 'Sample Spell 2',
    Classes: ['Sorcerer', 'Warlock', 'Wizard']
  }
];

describe('Spell Reducer', () => {
  it('loads spells and sorts them into classes correctly', () => {
    const loadAction = spellActions.spellsLoaded(spells);

    const nextState = spellReducer(undefined, loadAction);

    expect(Object.keys(nextState.all).length).to.equal(spells.length);

    expect(nextState.byClass.warlock).to.deep.equal(spells.map(s => s.Name));
    expect(nextState.byClass.bard).to.deep.equal(['Sample Spell 1']);
    expect(nextState.byClass.sorcerer).to.deep.equal(['Sample Spell 2']);
    expect(nextState.byClass.wizard).to.deep.equal(['Sample Spell 2']);
  });

  it('puts class-loaded spells into .all as well as the class without filling in unloaded classes', () => {
    const wizardSpells = spells.filter(s => s.Classes.indexOf('Wizard') !== -1);
    const classLoadedAction = spellActions.classLoaded('Wizard', wizardSpells);

    const nextState = spellReducer(undefined, classLoadedAction);

    expect(Object.keys(nextState.all).length).to.equal(wizardSpells.length);

    expect(nextState.byClass.wizard).to.deep.equal(wizardSpells.map(s => s.Name));
    for (const className of Object.keys(nextState.byClass).filter(s => s !== 'wizard')) {
      expect(nextState.byClass[className].length).to.equal(0);
    }
  });
});
