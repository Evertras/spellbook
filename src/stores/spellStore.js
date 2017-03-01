'use strict';

const EventEmitter = require('events').EventEmitter;

const spells = [];

class SpellStore extends EventEmitter {
  getAll() {
    return spells;
  }
}

module.exports = new SpellStore();
