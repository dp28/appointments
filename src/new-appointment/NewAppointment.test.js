import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '../state/store';
import { NewAppointment } from './NewAppointment';

it('renders without crashing when given a function to create appointments and access to the store', () => {
  const div = document.createElement('div');
  const createAppointment = x => x;
  ReactDOM.render(
    <Provider store={store}>
      <NewAppointment createAppointment={createAppointment} />
    </Provider>
    , div
  );
});
