import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reducer from './store';
import * as actions from './store/actions';

it('Should render the app', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Should the app when the accessibility is enabled', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App isAccessibilityEnabled />, div);
});

it('Should be able to enable the accessibility', () => {
  const newState = reducer({ isAccessibilityEnabled: false }, actions.toggleAccessibility());
  expect(newState.isAccessibilityEnabled).toBe(true);
});

it('Should be able to disable the accessibility', () => {
  const newState = reducer({ isAccessibilityEnabled: true }, actions.toggleAccessibility());
  expect(newState.isAccessibilityEnabled).toBe(false);
});

it('Should be able to open the menu', () => {
  const newState = reducer({ isMenuOpen: false }, actions.openMenu());
  expect(newState.isMenuOpen).toBe(true);
});

it('Should be able to close the menu', () => {
  const newState = reducer({ isMenuOpen: true }, actions.closeMenu());
  expect(newState.isMenuOpen).toBe(false);
});