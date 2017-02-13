import React from 'react';
import ReactDOM from 'react-dom';

import { identity } from '../utils/functional';
import { SELECT_MINUTE, SELECT_HOUR } from './TimePickerActions';
import {
  mapStateToProps,
  mapDispatchToProps,
  TimePicker as UnconnectedTimePicker
} from './TimePicker';

describe('the unconnected TimePicker', () => {
  it('renders without crashing when given the correct props', () => {
    const div = document.createElement('div');
    const props = {
      id: 'id',
      selectedMinute: 0,
      selectedHour: 0,
      selectMinute: identity,
      selectHour: identity
    };
    ReactDOM.render(<UnconnectedTimePicker {...props} />, div);
  });
});

describe('#mapStateToProps', () => {
  it('should return the "timePicker" property from the state', () => {
    const timePicker = { a: 2, b: 1 };
    const state = { timePicker, somethingElse: {} };
    expect(mapStateToProps(state)).toEqual(timePicker);
  });
});

describe('#mapDispatchToProps', () => {
  function itShouldCreateADispatcherFor({ name, actionType }) {
    it(`should return a dispatcher called "${name}" for the ${actionType} action`, () => {
      expect(mapDispatchToProps(identity)[name](0).type).toEqual(actionType);
    });
  }

  itShouldCreateADispatcherFor({ name: 'selectMinute', actionType: SELECT_MINUTE });
  itShouldCreateADispatcherFor({ name: 'selectHour', actionType: SELECT_HOUR });
});
