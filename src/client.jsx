'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const Provider = require('react-redux').Provider;
const AppRoutes = require('./components/AppRoutes');
const reducers = require('./reducers');

window.onload = () => {
  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;

  const store = Redux.createStore(reducers, preloadedState);

  ReactDOM.render(
    <Provider store={store}><AppRoutes /></Provider>,
    document.getElementById('main'));
};
