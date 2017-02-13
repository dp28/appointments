import React from 'react';

import { displayDateTime } from '../utils/time';
import './Appointment.css';

export const Appointment = ({ appointment }) => (
  <div className='Appointment'>
    <h3 className='Appointment-title'>{appointment.title}</h3>
    <div className='Appointment-time Appointment-start'>
      {displayDateTime(appointment.start)}
    </div>
  </div>
);

export default Appointment;
