'use strict';

const React = require('react');

module.exports = React.createClass({
  displayName: 'SpellbookToggle',
  propTypes: {
    isIncluded: React.PropTypes.bool,
    cbAdd: React.PropTypes.func,
    cbRemove: React.PropTypes.func
  },
  render: function() {
    if(!this.props.isIncluded) {
      return (
        <i className="fa fa-fw fa-plus-square spellbook-toggle-off" title="Add to spellbook" onClick={this.props.cbAdd}></i>
      );
    } else {
      return (
        <i className="fa fa-fw fa-check spellbook-toggle-on" title="Remove from spellbook" onClick={this.props.cbRemove}></i>
      );
    }
  }
});
