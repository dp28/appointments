import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import Appointment from '../appointment/Appointment';

export const AppointmentList = ({ appointments }) => (
  <ListGroup>
    {
      appointments.map(appointment => (
        <ListGroupItem key={appointment.id}>
          <Appointment appointment={appointment} />
        </ListGroupItem>
      ))
    }
  </ListGroup>
);

export function mapStateToProps({ appointments }) {
  return { appointments };
}

export default connect(mapStateToProps)(AppointmentList);
