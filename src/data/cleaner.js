'use strict';

const allSpells = require('./allSpells');
const _ = require('lodash');

function cleanString(str) {
  return str.replace(/<br\/>/g, '\n')
            .replace(/\&#39;/g, '\'')
            .replace(/<div>/g, '\n')
            .replace(/<.*>/g, '')
            .trim();
}

function cleanSpell(spell) {
  const cleanedSpell = _.cloneDeep(spell);

  for (const key of ['Name', 'School', 'CastTime', 'Range', 'Components',
                     'Duration', 'Description', 'AtHigherLevels', 'SourceBook']) {
    cleanedSpell[key] = cleanString(spell[key]);
  }

  if (cleanedSpell.SourceBook === 'Players Handbook') {
    cleanedSpell.SourceBook = 'Player\'s Handbook';
  }

  const atHigherLevel = /at higher levels\W*(.*)/i.exec(cleanedSpell.Description);

  if (atHigherLevel) {
    cleanedSpell.AtHigherLevels = atHigherLevel[1];
    cleanedSpell.Description = atHigherLevel.input.substring(0, atHigherLevel.index).trim();
  }

  const misplacedComponents = /^(\(.*\))\W*(.*)$/m.exec(cleanedSpell.Description);

  if (misplacedComponents) {
    cleanedSpell.Components = cleanedSpell.Components.trim() + ' ' + misplacedComponents[1];
    cleanedSpell.Description = misplacedComponents[2];
  }

  return cleanedSpell;
}

const cleaned = _.sortBy(allSpells.map(cleanSpell), s => s.Name)
                 .filter(s => s.Name !== 'Trap the Soul');

console.log(JSON.stringify(cleaned, null, '  '));
