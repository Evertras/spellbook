'use strict';

const mapStateToProps = state => {
  return {
    spells: state.spells.byClass
  };
};
