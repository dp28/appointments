import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from './Appointment';

it('renders without crashing when given an appointment', () => {
  const div = document.createElement('div');
  const appointment = { title: 'a', start: new Date() };
  ReactDOM.render(<Appointment appointment={appointment} />, div);
});
