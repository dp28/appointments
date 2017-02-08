import React from 'react';
import './Appointment.css';

export const Appointment = ({ appointment }) => (
  <div className='Appointment'>
    <h3 className='Appointment-title'>{appointment.title}</h3>
    <div className='Appointment-time Appointment-start'>{appointment.start.toString()}</div>
  </div>
);

export default Appointment;
