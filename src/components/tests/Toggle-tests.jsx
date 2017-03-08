'use strict';

const React = require('react');
const expect = require('chai').expect;
const enzyme = require('enzyme');
const sinon = require('sinon');
const SpellbookToggle = require('../Toggle');

describe('<Toggle />', () => {
  it('calls the cbAdd callback when toggling on', () => {
    const cbAdd = sinon.stub();
    const cbRemove = sinon.stub();

    const wrapper = enzyme.mount(
      <SpellbookToggle isIncluded={false} cbAdd={cbAdd} cbRemove={cbRemove} />
    );

    wrapper.find('i').simulate('click');

    expect(cbAdd.callCount).to.equal(1);
    expect(cbRemove.callCount).to.equal(0);
  });

  it('calls the cbRemove callback when toggling off', () => {
    const cbAdd = sinon.stub();
    const cbRemove = sinon.stub();

    const wrapper = enzyme.mount(
      <SpellbookToggle isIncluded={true} cbAdd={cbAdd} cbRemove={cbRemove} />
    );

    wrapper.find('i').simulate('click');

    expect(cbAdd.callCount).to.equal(0);
    expect(cbRemove.callCount).to.equal(1);
  });
});
