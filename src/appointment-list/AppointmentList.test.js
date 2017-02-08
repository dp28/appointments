import React from 'react';
import ReactDOM from 'react-dom';
import {
  mapStateToProps,
  AppointmentList as UnconnectedAppointmentList
} from './AppointmentList';

describe('the unconnected AppointmentList', () => {
  it('renders without crashing when given an array of appointments', () => {
    const div = document.createElement('div');
    const appointments = [{ id: 1, title: 'A', start: new Date() }];
    ReactDOM.render(<UnconnectedAppointmentList appointments={appointments} />, div);
  });
});


describe('#mapStateToProps', () => {
  it('should return an object containing appointments in the state', () => {
    const appointments = [{ id: 1, title: 'A'}, { id: 2, title: 'B'}];
    const state = { appointments, somethingElse: {} };
    expect(mapStateToProps(state)).toEqual({ appointments });
  });
});
