'use strict';

const React = require('react');
const expect = require('chai').expect;
const enzyme = require('enzyme');
const About = require('../About');

const mount = enzyme.mount;
const shallow = enzyme.shallow;

describe('<About />', () => {
  it('renders at all', () => {
    const wrapper = mount(<About />);
  });
});
