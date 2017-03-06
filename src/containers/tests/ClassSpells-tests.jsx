'use strict';

const React = require('react');
const expect = require('chai').expect;
const Provider = require('react-redux').Provider;
const enzyme = require('enzyme');
const allSpells = require('../../data/allSpells');
const createStore = require('redux').createStore;
const reducers = require('../../reducers');
const spellActions = require('../../actions/spells');
const ClassSpells = require('../ClassSpells');

let store;

describe('<ClassSpells />', () => {
  beforeEach(() => {
    store = createStore(reducers);
  });

  it('renders all Wizard spells', done => {
    const selectedClass = 'Wizard';
    const params = { selectedClass };
    const unsub = store.subscribe(() => {
      const wrapper = enzyme.mount(
        <Provider store={store}>
          <ClassSpells params={params} />
        </Provider>
      );

      const innerLists = wrapper.find('ul');

      // 9 levels + 1 cantrip level
      expect(innerLists.length).to.equal(10);

      const listedSpells = innerLists.find('li');

      expect(listedSpells.length).to.equal(allSpells.filter(s => s.Classes.map(c => c.toLowerCase()).indexOf('wizard') !== -1).length)
      expect(listedSpells.length).to.be.greaterThan(0);

      done();
    });
    store.dispatch(spellActions.spellsLoaded(allSpells));
    unsub();
  });
});
