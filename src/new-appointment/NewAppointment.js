import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import DatePicker from '../date-picker/DatePicker';
import TimePicker from '../time-picker/TimePicker';

export const NewAppointment = ({ createAppointment }) => (
  <Form onSubmit={createAppointment}>
    <FormGroup controlId="titleInput">
      <ControlLabel>Title</ControlLabel>
      <FormControl name="title" type="text" />
    </FormGroup>

    <FormGroup controlId="dateInput">
      <ControlLabel>Date</ControlLabel>
      <DatePicker id="dateInput" />
    </FormGroup>

    <FormGroup controlId="timeInput">
      <ControlLabel>Time</ControlLabel>
      <TimePicker id="timeInput" />
    </FormGroup>
  </Form>
);

export function mapDispatchToProps(dispatch) {
  return {
    createAppointment: (event) => {
      event.preventDefault();
      const form = event.target;
      console.log(form.title.value, form.time.value);
    }
  };
}

export default connect(null, mapDispatchToProps)(NewAppointment);
