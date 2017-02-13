import React from 'react';
import ReactDOM from 'react-dom';
import { Alert } from './Alert';

it('renders without crashing when given a message and a type', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Alert message="help" type="error" />, div);
});
