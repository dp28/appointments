import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { identity } from '../utils/functional';
import { TOGGLE_DATE_FOCUS, SELECT_DATE } from './DatePickerActions';
import {
  mapStateToProps,
  mapDispatchToProps,
  DatePicker as UnconnectedDatePicker
} from './DatePicker';

describe('the unconnected DatePicker', () => {
  it('renders without crashing when given the correct props', () => {
    const div = document.createElement('div');
    const props = {
      id: 'id',
      selectedDate: moment(),
      selectingDate: false,
      toggleDateFocus: identity,
      selectDate: identity
    };
    ReactDOM.render(<UnconnectedDatePicker {...props} />, div);
  });
});

describe('#mapStateToProps', () => {
  it('should return the "datePicker" property from the state', () => {
    const datePicker = { a: 2, b: 1 };
    const state = { datePicker, somethingElse: {} };
    expect(mapStateToProps(state)).toEqual(datePicker);
  });
});

describe('#mapDispatchToProps', () => {
  function itShouldCreateADispatcherFor({ name, actionType, mockValue }) {
    it(`should return a dispatcher called "${name}" for the ${actionType} action`, () => {
      expect(mapDispatchToProps(identity)[name](mockValue).type).toEqual(actionType);
    });
  }

  itShouldCreateADispatcherFor({ name: 'selectDate', actionType: SELECT_DATE});

  itShouldCreateADispatcherFor({
    name: 'toggleDateFocus',
    actionType: TOGGLE_DATE_FOCUS,
    mockValue: false
  });
});
