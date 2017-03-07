'use strict';

const React = require('react');
const ClassLink = require('../containers/ClassLink');

module.exports = React.createClass({
  displayName: 'ClassDropMenu',
  render: function() {
    return (
      <ul className="drop-menu drop-menu-anim">
        <li>
          <ClassLink selectedClass="bard">Bard</ClassLink>
        </li>
        <li>
          <ClassLink selectedClass="cleric">Cleric</ClassLink>
        </li>
        <li>
          <ClassLink selectedClass="druid">Druid</ClassLink>
        </li>
        <li>
          <ClassLink selectedClass="paladin">Paladin</ClassLink>
        </li>
        <li>
          <ClassLink selectedClass="ranger">Ranger</ClassLink>
        </li>
        <li>
          <ClassLink selectedClass="sorcerer">Sorcerer</ClassLink>
        </li>
        <li>
          <ClassLink selectedClass="warlock">Warlock</ClassLink>
        </li>
        <li>
          <ClassLink selectedClass="wizard">Wizard</ClassLink>
        </li>
      </ul>
    );
  }
});
