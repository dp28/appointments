import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';

import { DATE_FORMAT } from '../utils/time';
import * as actions from './DatePickerActions';
import './DatePicker.css'

export const DatePicker = ({ selectedDate, selectingDate, id, toggleDateFocus, selectDate }) => (
  <SingleDatePicker
    id={id}
    date={selectedDate}
    onDateChange={selectDate}
    onFocusChange={toggleDateFocus}
    focused={selectingDate}
    displayFormat={DATE_FORMAT}
    numberOfMonths={1}
    enableOutsideDays={true}
  />
);

export function mapStateToProps({ datePicker }) {
  return datePicker;
}

export function mapDispatchToProps(dispatch) {
  return {
    toggleDateFocus: ({ focused }) => dispatch(actions.toggleDateFocus(focused)),
    selectDate: date => dispatch(actions.selectDate(date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);



