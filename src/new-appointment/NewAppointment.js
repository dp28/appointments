import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import DatePicker from '../date-picker/DatePicker';
import TimePicker from '../time-picker/TimePicker';
import * as actions from './NewAppointmentActions';
import './NewAppointment.css';

export const NewAppointment = ({ createAppointment }) => (
  <Form onSubmit={createAppointment} className="NewAppointment">
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

    <FormGroup controlId="submit">
      <Button type="submit" bsStyle="primary">Add</Button>
    </FormGroup>
  </Form>
);

export function mapDispatchToProps(dispatch) {
  return {
    createAppointment: (event) => {
      event.preventDefault();
      dispatch(actions.createAppointment(event.target.title.value));
    }
  };
}

export default connect(null, mapDispatchToProps)(NewAppointment);
