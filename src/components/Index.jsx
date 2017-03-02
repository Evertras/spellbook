'use strict';

const React = require('react');
const SpellList = require('./SpellList');
const allSpells = require('../data/allSpells');

const sampleSpell = {
  'Name': 'Alter Self',
  'School': 'Transmutation',
  'Level': 2,
  'CastTime': '1 Action',
  'Range': 'Self',
  'Components': 'V, S',
  'Duration': 'Concentration, up to 1 hour',
  'Description': `You assume a different form.
When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.
Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills, and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.
Change Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any.
You can make yourself appear as a member of another race, though none of your statistics change. You also don’t appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can’t use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.
Natural Weapons.
You grow claws, fangs, spines, horns, or a different natural weapon of your choice.
Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.`,
  'AtHigherLevels': '',
  'SourceBook': 'Players Handbook',
  'SourcePage':211,
  'Classes':['Sorcerer','Wizard']
};

module.exports = React.createClass({
  displayName: 'Index',
  render: function() {
    sampleSpell.x = 3;
    return (
      <div>
        <SpellList spells={allSpells} />
      </div>
    );
  }
});
