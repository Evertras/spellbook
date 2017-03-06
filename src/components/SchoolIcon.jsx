'use strict';

const React = require('react');

const iconMap = {
  'Abjuration': 'fa-podcast',
  'Conjuration': 'fa-angle-double-up',
  'Divination': 'fa-eye',
  'Enchantment': 'fa-moon-o',
  'Evocation': 'fa-bolt',
  'Illusion': 'fa-magic',
  'Necromancy': 'fa-hourglass-half',
  'Transmutation': 'fa-random'
};

module.exports = React.createClass({
  displayName: 'SchoolIcon',
  propTypes: {
    school: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <i
        className={'fa fa-fw ' + (iconMap[this.props.school] || 'fa-question-circle')}
        title={this.props.school}
      ></i>
    );
  }
});
