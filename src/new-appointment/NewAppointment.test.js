import React from 'react';
import ReactDOM from 'react-dom';
import { NewAppointment } from './NewAppointment';

it('renders without crashing when given an appointment', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewAppointment />, div);
});
