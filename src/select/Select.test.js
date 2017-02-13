import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';

it('renders without crashing when given options, id, selected and onSelected', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Select options={[1, 2]} selected={1} onSelected={x => x} id='id'/>, div);
});
