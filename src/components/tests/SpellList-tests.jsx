'use strict';

const React = require('react');
const enzyme = require('enzyme');
const SpellList = require('../SpellList');
const expect = require('chai').expect;

const render = enzyme.render;

const spells = [
  {
    Name: 'Sample Spell 1',
    Level: 1,
    School: 'Transmutation'
  },
  {
    Name: 'Sample Spell 2',
    Level: 3,
    School: 'Evocation'
  }
];

describe('<SpellList />', () => {
  it('contains only each level supplied', () => {
    const wrapper = render(<SpellList spells={spells} />);

    expect(wrapper.text()).to.contain('Level 1');
    expect(wrapper.text()).to.contain('Level 3');
    expect(wrapper.text()).to.not.contain('Cantrip');
    expect(wrapper.text()).to.not.contain('Level 2');
    expect(wrapper.text()).to.not.contain('Level 4');
    expect(wrapper.text()).to.not.contain('Level 5');
    expect(wrapper.text()).to.not.contain('Level 6');
    expect(wrapper.text()).to.not.contain('Level 7');
    expect(wrapper.text()).to.not.contain('Level 8');
    expect(wrapper.text()).to.not.contain('Level 9');
  });

  it('displays the name of each spell in the list', () => {
    const wrapper = render(<SpellList spells={spells} />);

    for (const s of spells) {
      expect(wrapper.text()).to.contain(s.Name)
    }
  })
});
