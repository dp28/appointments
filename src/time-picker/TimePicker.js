import React from 'react';
import { connect } from 'react-redux';

import { inclusiveRange } from '../utils/functional';
import Select from '../select/Select';
import * as actions from './TimePickerActions';
import './TimePicker.css';

export const TimePicker = ({ id, selectMinute, selectHour, selectedMinute, selectedHour }) => (
  <div className="TimePicker" id={id} >
    <Select
      id={"TimePicker--hours--" + id}
      options={inclusiveRange(0, 23)}
      selected={selectedHour}
      display={displayTimeElement}
      onSelect={selectHour}
    />
    :
    <Select
      id={"TimePicker--minutes--" + id}
      options={inclusiveRange(0, 59)}
      selected={selectedMinute}
      display={displayTimeElement}
      onSelect={selectMinute}
    />
  </div>
);

export function mapStateToProps({ timePicker }) {
  return timePicker;
}

export function mapDispatchToProps(dispatch) {
  return {
    selectMinute: minute => dispatch(actions.selectMinute(Number(minute))),
    selectHour: hour => dispatch(actions.selectHour(Number(hour)))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);

function displayTimeElement(number) {
  const string = String(number);
  return string.length === 2 ? string : '0' + string;
}
